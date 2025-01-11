"use client";

import { useLayoutEffect, useState } from "react";

type Browser =
  | "Google Chrome"
  | "Chromium"
  | "Safari"
  | "Mozilla Firefox"
  | "Microsoft Edge"
  | "Opera"
  | "Internet Explorer"
  | "Unknown";

export function useBrowserDetection(defaultValue: Browser = "Unknown"): Browser {
  const [browser, setBrowser] = useState<Browser>(defaultValue);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;

      if (userAgent.includes("Chrome") && !userAgent.includes("Chromium")) {
        setBrowser("Google Chrome");
      } else if (userAgent.includes("Chromium")) {
        setBrowser("Chromium");
      } else if (userAgent.includes("Safari") && !userAgent.includes("Chrom")) {
        setBrowser("Safari");
      } else if (userAgent.includes("Firefox")) {
        setBrowser("Mozilla Firefox");
      } else if (userAgent.includes("Edg/")) {
        setBrowser("Microsoft Edge");
      } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        setBrowser("Opera");
      } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
        setBrowser("Internet Explorer");
      }
    }
  }, []);

  return browser;
}
