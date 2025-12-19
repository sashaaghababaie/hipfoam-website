import { useEffect } from "react";
import { getScrollY, subscribeScroll } from "../utiils/scroll-manager";

interface Offset {
  start?: number; // 0–1
  end?: number; // 0–1
}

export function useScrollProgress(
  containerRef: React.RefObject<HTMLElement | null>,
  ref: React.RefObject<HTMLElement | null>,
  offset: Offset = { start: 0, end: 0 },
  disableOnMobile = false
) {
  useEffect(() => {
    const container = containerRef.current;
    const el = ref.current;

    if (!el || !container) return;

    const isMobile = window.innerWidth < 768;

    if (disableOnMobile && isMobile) return;

    let startPx = 0;
    let endPx = 0;
    let ticking = false;

    const measure = () => {
      const rect = container.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;

      const start = offset.start ?? 0;
      const end = offset.end ?? 0;

      const top = rect.top + scrollTop;
      const bottom = top + rect.height;

      startPx = top - vh * start;
      endPx = bottom - vh * end;

      // startPx = top;
      // endPx = bottom;
    };

    const update = (scrollY: number) => {
      const progress = (scrollY - startPx) / (endPx - startPx);

      const clamped = Math.min(1, Math.max(0, progress + 1));

      el.style.setProperty("--p", clamped.toFixed(5));

      // console.log(Number(el.style.getPropertyValue("--p")));
      // console.log(1 + Number(el.style.getPropertyValue("--p")) * 2);
      // console.log(el.style.getPropertyValue("--scale"));
    };

    // rAF-throttled resize handler
    const onResize = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        measure();
        update(getScrollY());
        ticking = false;
      });
    };

    measure();
    update(getScrollY());

    requestAnimationFrame(() => {
      update(getScrollY());
    });

    // timeout (browser restore)
    setTimeout(() => {
      update(getScrollY());
    }, 0);

    // Safari safety
    window.addEventListener("pageshow", () => {
      requestAnimationFrame(() => {
        measure();
        update(getScrollY());
      });
    });

    const unsubscribe = subscribeScroll(update);
    window.addEventListener("resize", onResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", onResize);
    };
  }, [ref, offset, disableOnMobile]);
}
