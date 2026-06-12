"use client";

import { useEffect, useState } from "react";

const KEY = "cookie-consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    setConsent(stored ? stored === "true" : null);
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, "true");
    setConsent(true);
  };

  const decline = () => {
    localStorage.setItem(KEY, "false");
    setConsent(false);
  };

  return { consent, accept, decline };
}
