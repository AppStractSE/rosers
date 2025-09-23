// components/SnowInSection.tsx
"use client";

import { useEffect, useRef } from "react";

type Props = {
  count?: number;
};

export default function Snowfall({ count = 30 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const flakesRef = useRef<HTMLDivElement[]>([]);
  const dimsRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Position container
    container.style.position = "absolute";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.overflow = "hidden";

    // get size helper
    function updateDims() {
      const r = container!.getBoundingClientRect();
      dimsRef.current.w = Math.max(1, Math.round(r.width));
      dimsRef.current.h = Math.max(1, Math.round(r.height));
    }
    updateDims();

    // create flakes
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "snowflake";
      const size = Math.random() * 2 + 4;
      const startX = Math.random() * dimsRef.current.w;
      const startY = Math.random() * dimsRef.current.h * -1;
      const speed = Math.random() * 0.1 + 0.2;
      const amp = Math.random() * 10 + 6;
      const phase = Math.random() * Math.PI * 3;

      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `0px`;
      el.style.top = `0px`;
      el.style.opacity = `${Math.random() * 0.2 + 0.25}`;

      (el as any).__snow = { x: startX, y: startY, size, speed, amp, phase };

      container.appendChild(el);
      flakesRef.current.push(el);
    }

    function step() {
      const { w, h } = dimsRef.current;

      for (const el of flakesRef.current) {
        const s = (el as any).__snow;
        s.y += s.speed;
        const sway = Math.sin(s.y / 10 + s.phase) * s.amp;
        const tx = s.x + sway;
        const ty = s.y;

        el.style.transform = `translate(${tx}px, ${ty}px)`;

        // Reset when out of view
        if (ty > h) {
          s.y = -10 - Math.random() * (h * 0.5);
          s.x = Math.random() * w;
          s.speed = Math.random() * 0.1 + 0.2;
          s.amp = Math.random() * 15 + 6;
          s.phase = Math.random() * Math.PI * 2;
          el.style.opacity = `${Math.random() * 0.35 + 0.25}`;
          const newSize = Math.random() * 2 + 3;
          s.size = newSize;
          el.style.width = `${newSize}px`;
          el.style.height = `${newSize}px`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    const ro = new ResizeObserver(() => {
      updateDims();
    });
    ro.observe(container);

    // Cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      flakesRef.current.forEach((f) => f.remove());
      flakesRef.current = [];
    };
  }, [count]);

  return <div ref={containerRef} aria-hidden="true" />;
}
