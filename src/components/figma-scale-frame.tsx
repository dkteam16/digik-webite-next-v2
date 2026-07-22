"use client";

import { useLayoutEffect, useRef, useState } from "react";

export function FigmaScaleFrame({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Must match between server and client on first render (no window access
  // here) to avoid a hydration mismatch. useLayoutEffect below corrects it
  // synchronously before the browser paints, so this only shows briefly on
  // the very first SSR paint — not on client-side route transitions.
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={containerRef}
      style={{ height: height * scale }}
      className="relative w-full overflow-hidden"
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
