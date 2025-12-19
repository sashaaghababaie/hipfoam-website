// import React, { useRef, useEffect } from "react";
// import { useScrollProgress } from "../hooks/useScrollProgress";

// export interface ScrollAnimProps {
//   children: React.ReactNode;
//   offset?: { start?: number; end?: number };
//   disableOnMobile?: boolean;
//   className?: string;
//   cssVars?: Record<string, string | number>;
//   animate?: (el: HTMLElement, p: number) => void;
// }

// export const ScrollAnim: React.FC<ScrollAnimProps> = ({
//   children,
//   offset = { start: 0, end: 1 },
//   disableOnMobile = false,
//   className = "",
//   cssVars = {},
//   animate = () => {},
// }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   // Initialize CSS vars
//   useEffect(() => {
//     if (!ref.current) return;

//     Object.entries(cssVars).forEach(([key, value]) => {
//       ref.current!.style.setProperty(`--${key}`, String(value));
//     });
//   }, [cssVars]);

//   // Subscribe to scroll updates
//   useScrollProgress(ref, offset, disableOnMobile);

//   // Animate on each frame
//   useEffect(() => {
//     if (!ref.current) return;

//     let frame: number;

//     const loop = () => {
//       const el = ref.current;
//       if (!el) return;

//       const p = parseFloat(getComputedStyle(el).getPropertyValue("--p") || "0");
//       animate(el, p);

//       frame = requestAnimationFrame(loop);
//     };

//     loop();
//     return () => cancelAnimationFrame(frame);
//   }, [animate]);

//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{ willChange: "transform, opacity" }}
//     >
//       {children}
//     </div>
//   );
// };
