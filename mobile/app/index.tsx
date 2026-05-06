import { useEffect } from "react";
import { useRouter } from "expo-router";

import "./globals.css";

export default function Index() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace(isLoggedIn ? "/(tabs)/dashboard" : "/(auth)/landing");
    }, 0);

    return () => clearTimeout(timeout);
  }, [isLoggedIn]);

  return null;
}
