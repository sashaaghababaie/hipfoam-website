"use client";
import { CSSProperties, useRef } from "react";
import { useScrollProgress } from "../app/hooks/useScrollProgress";

export default function Hero() {
  const { elRef, cnRef } = useScrollProgress({ start: 0.1, end: 0.5 });
  return (
    <div className="h-[200svh] relative">
      <div className="h-svh text-black sticky top-0 bg-zinc-100 flex items-center justify-center">
        HERO
      </div>
      <div
        ref={cnRef}
        className="absolute flex justify-center overflow-hidden top-[100svh] left-0 w-full h-svh z-1"
      >
        <div
          ref={elRef}
          style={{ "--speed": 50 } as CSSProperties}
          className="h-10 rounded-full duration-75 origin-top scroll-animate scroll-zoom w-10 bg-hip-black"
        ></div>
      </div>
    </div>
  );
}

// className="scroll-section fade-in" style={{ "--speed": 1.2 }}
