"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Basic refresh on mount to ensure triggers are correctly calculated
    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
