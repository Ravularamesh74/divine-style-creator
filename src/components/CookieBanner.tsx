import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Cookie,
  Settings,
  CheckCircle2,
  X,
} from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: false,
    personalization: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const saveConsent = (type: string) => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        type,
        preferences,
        timestamp: Date.now(),
      })
    );

    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

      {/* Banner */}
      <div className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 animate-in slide-in-from-bottom-10 duration-500">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">

          {/* Top Glow */}
          <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />

          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
                  <Cookie className="h-8 w-8 text-orange-400" />
                </div>

                <div>
                  <h2 className="flex items-center gap-2 text-3xl font-bold text-white">
                    Privacy & Cookie Preferences
                    <ShieldCheck className="h-6 w-6 text-emerald-400" />
                  </h2>

                  <p className="mt-3 max-w-3xl text-slate-300 leading-7">
                    We use cookies to improve website performance,
                    personalize your experience, analyze traffic,
                    and enhance security. You remain in complete
                    control of your data and preferences.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                      Essential Cookies
                    </span>

                    <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                      Analytics
                    </span>

                    <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                      Personalization
                    </span>

                    <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                      Marketing
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-white hover:bg-slate-800"
                >
                  <Settings className="h-4 w-4" />
                  Preferences
                </button>

                <button
                  onClick={() => saveConsent("reject")}
                  className="rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-3 font-semibold text-red-400 hover:bg-red-500/20"
                >
                  Reject
                </button>

                <button
                  onClick={() => saveConsent("accept")}
                  className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 transition"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <div className="w-full max-w-2xl rounded-3xl bg-slate-950 border border-slate-800 p-8 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                Cookie Settings
              </h3>

              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-white"
              >
                <X />
              </button>
            </div>

            <div className="space-y-6">

              {[
                {
                  key: "analytics",
                  title: "Analytics Cookies",
                  desc: "Help us understand visitor behavior.",
                },
                {
                  key: "marketing",
                  title: "Marketing Cookies",
                  desc: "Used for personalized advertising.",
                },
                {
                  key: "personalization",
                  title: "Personalization",
                  desc: "Remember preferences and settings.",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="rounded-2xl border border-slate-800 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {item.desc}
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      checked={
                        preferences[
                          item.key as keyof typeof preferences
                        ]
                      }
                      onChange={() =>
                        setPreferences((prev) => ({
                          ...prev,
                          [item.key]:
                            !prev[
                              item.key as keyof typeof preferences
                            ],
                        }))
                      }
                      className="h-5 w-5"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => saveConsent("custom")}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-4 font-semibold text-white"
            >
              <span className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Save Preferences
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}