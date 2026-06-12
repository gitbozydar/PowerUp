"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "cookie-consent";

type Consent = "accepted" | "rejected" | null;

const CookieBanner = () => {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY) as Consent;
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(KEY, "rejected");
    setConsent("rejected");
    setVisible(false);
  };

  if (!visible || consent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-9999 w-95 rounded-2xl border border-black/10 bg-white shadow-2xl p-5 backdrop-blur-xl"
      >
        <h3 className="text-lg font-semibold text-black">🍪 Cookies</h3>

        <p className="text-sm text-black/60 mt-2 leading-relaxed">
          Używamy plików cookies, aby poprawić działanie strony oraz analizować
          ruch. Możesz zaakceptować lub odrzucić ich użycie.
        </p>

        <div className="flex gap-3 mt-5">
          <Button
            onClick={handleReject}
            variant="outline"
            className="flex-1 border-black/20 hover:bg-black/5"
          >
            Odrzuć
          </Button>

          <Button
            onClick={handleAccept}
            className="flex-1 bg-black text-white hover:bg-black/80"
          >
            Akceptuję
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
