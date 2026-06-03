import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white shadow-2xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-3xl font-bold">
          Your privacy, your choice
        </h2>

        <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-200">
          We use essential cookies to ensure the website functions properly.
          Optional cookies help us improve performance, personalize content,
          and analyze traffic. By clicking "Accept All Cookies" you consent
          to the use of optional cookies.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-full bg-white px-8 py-3 font-semibold text-slate-900 transition hover:scale-105"
          >
            Accept All Cookies
          </button>

          <button
            type="button"
            onClick={rejectCookies}
            className="rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Reject Optional Cookies
          </button>
        </div>
      </div>
    </div>
  );
}