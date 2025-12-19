"use client";

import { useEffect, useRef } from "react";
// import { getScrollY, subscribeScroll } from "../utiils/scroll-manager";
import {
  getRealScrollY,
  getVirtualScrollY,
  subscribeScroll,
} from "../utils/scroll-manager";

export function useScrollProgress({
  start = 0,
  end = 1,
  disableOnMobile = false,
}) {
  const elementRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const elRef = (node: HTMLElement | null) => {
    if (!elementRef.current) {
      elementRef.current = node;
    }
  };

  const cnRef = (node: HTMLElement | null) => {
    if (!containerRef.current) {
      containerRef.current = node;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const el = elementRef.current;

    if (!el || !container) return;

    const isMobile = window.innerWidth < 768;

    if (disableOnMobile && isMobile) return;

    let startPx = 0;
    let endPx = 0;
    let vh = 0;
    let ticking = false;

    const measure = () => {
      const rect = container.getBoundingClientRect();
      const scrollTop = getRealScrollY();
      vh = window.innerHeight;

      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;

      // Start when start% of element enters viewport
      startPx = elementTop - vh + elementHeight * start;

      // End when end% of element has passed
      endPx = elementTop - vh + elementHeight * end;
    };

    // const measure = () => {
    //   const rect = container.getBoundingClientRect();
    //   const scrollTop = getRealScrollY();
    //   vh = window.innerHeight;
    //   // vh = rect.height;
    //   // vh = window.outerHeight;
    //   const elementTop = rect.top + scrollTop;
    //   const elementHeight = rect.height;

    //   startPx = elementTop - vh + elementHeight * start;
    //   endPx = elementTop - vh + elementHeight * end;
    // };

    const update = (scrollY: number) => {
      const progress = (scrollY - startPx) / (endPx - startPx);
      const clamped = Math.min(1, Math.max(0, progress));
      el.style.setProperty("--p", clamped.toFixed(5));
      container.style.setProperty("--p", clamped.toFixed(5));
    };

    // const update = (virtualScrollY: number) => {
    //   const progress = (virtualScrollY - startPx) / (endPx - startPx);
    //   const clamped = Math.min(1, Math.max(0, progress));

    //   el.style.setProperty("--p", clamped.toFixed(5));
    //   container.style.setProperty("--p", clamped.toFixed(5));
    // };
    // rAF-throttled resize handler
    const onResize = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        measure();
        update(getVirtualScrollY());
        ticking = false;
      });
    };

    measure();
    update(getVirtualScrollY());

    requestAnimationFrame(() => {
      update(getVirtualScrollY());
    });

    // timeout (browser restore)
    setTimeout(() => {
      update(getVirtualScrollY());
    }, 0);

    // Safari safety
    window.addEventListener("pageshow", () => {
      requestAnimationFrame(() => {
        measure();
        update(getVirtualScrollY());
      });
    });

    const unsubscribe = subscribeScroll(update);
    window.addEventListener("resize", onResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", onResize);
    };
  }, [start, end, disableOnMobile]);

  return { elRef, cnRef };
}
