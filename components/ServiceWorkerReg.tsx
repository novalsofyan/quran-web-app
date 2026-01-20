"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js");
          console.log("Service Worker registered:", registration);
        } catch (error) {
          console.log("Service Worker registration failed:", error);
        }
      };

      window.addEventListener("load", registerSW);
    }
  }, []);

  return null;
}
