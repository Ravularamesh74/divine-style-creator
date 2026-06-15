import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { hyderabadPincodeMap } from "@/lib/hyderabadPincodeMap";

interface LocationModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (pincode: string) => void;
}

interface PincodeLocation {
  display: string;
  district?: string;
  state?: string;
}

export function LocationModal({
  open,
  onClose,
  onSave,
}: LocationModalProps) {
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [location, setLocation] = useState<PincodeLocation | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setAddress("");
      setPincode("");
      setLocation(null);
      setLoading(false);
    }
  }, [open]);

  const fetchLocation = async (pin: string) => {
    if (pin.length !== 6) {
      setLocation(null);
      return;
    }

    const hyderabadLabel = hyderabadPincodeMap[pin];
    if (hyderabadLabel) {
      setLocation({ display: hyderabadLabel });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      const data = await res.json();

      if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length > 0) {
        const office = data[0].PostOffice[0];
        setLocation({
          display: `${office.Name}, ${office.District}, ${office.State}`,
          district: office.District,
          state: office.State,
        });
      } else {
        setLocation(null);
      }
    } catch {
      setLocation(null);
    }

    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-[95%] max-w-xl rounded-md bg-white shadow-2xl text-black">
        <div className="relative border-b p-8">
          <button
            onClick={onClose}
            className="absolute right-5 top-5"
          >
            <X size={28} />
          </button>

          <h2 className="text-4xl font-serif">
            Add delivery location
          </h2>

          <p className="mt-8 mb-2 text-sm text-gray-500">
            Enter your door number, street, and pincode
          </p>

          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Door no / street / locality"
            className="w-full rounded border border-gray-400 px-4 py-4 text-lg outline-none focus:border-yellow-600"
          />

          <input
            value={pincode}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setPincode(value);

              if (value.length === 6) {
                fetchLocation(value);
              } else {
                setLocation(null);
              }
            }}
            placeholder="Enter Pincode"
            maxLength={6}
            className="mt-4 w-full rounded border border-gray-400 px-4 py-4 text-lg outline-none focus:border-yellow-600"
          />

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            {loading && <p className="text-gray-500">Checking location...</p>}

            {location && (
              <div className="rounded border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                <p className="font-semibold">{address || "Address"}</p>
                <p>{location.display}</p>
                <p className="text-xs text-green-700">PIN: {pincode}</p>
              </div>
            )}

            {!loading && pincode.length === 6 && !location && (
              <p className="text-red-500">Invalid pincode.</p>
            )}
          </div>
        </div>

        <div className="p-8">
          <button
            disabled={!location || !address.trim()}
            onClick={() => {
              if (!location || !address.trim()) return;

              const display = `${address.trim()}, ${location.display}, ${pincode}`;
              onSave(display);
              onClose();
            }}
            className="w-full rounded bg-gradient-to-r from-amber-700 to-yellow-500 py-4 text-lg font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            SAVE LOCATION
          </button>
        </div>
      </div>
    </div>
  );
}