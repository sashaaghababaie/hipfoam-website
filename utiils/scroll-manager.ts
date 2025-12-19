type ScrollListener = (scrollY: number) => void;

let listeners: ScrollListener[] = [];
let scrollY = 0;
let ticking = false;

function onScroll() {
  scrollY = getRealScrollY();

  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      listeners.forEach((listener) => listener(scrollY));
      ticking = false;
    });
  }
}

export function subscribeScroll(listener: ScrollListener): () => void {
  listeners.push(listener);

  if (listeners.length === 1) {
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  return () => {
    listeners = listeners.filter((l) => l !== listener);

    if (listeners.length === 0) {
      window.removeEventListener("scroll", onScroll);
    }
  };
}

export function getRealScrollY(): number {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}
export function getVirtualScrollY(): number {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

// type ScrollListener = (virtualY: number) => void;

// let listeners: ScrollListener[] = [];

// let lastRealY = 0;
// let virtualY = 0;
// let ticking = false;

// function readScrollY() {
//   return (
//     window.scrollY ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop ||
//     0
//   );
// }

// function onScroll() {
//   const realY = readScrollY();
//   const delta = realY - lastRealY;

//   // 🔒 Ignore toolbar jumps
//   // if (Math.abs(delta) < 80) {
//   //   virtualY += delta;
//   // }
//   virtualY += delta;
//   lastRealY = realY;

//   if (!ticking) {
//     ticking = true;
//     requestAnimationFrame(() => {
//       listeners.forEach((l) => l(virtualY));
//       ticking = false;
//     });
//   }
// }

// export function subscribeScroll(listener: ScrollListener): () => void {
//   listeners.push(listener);

//   if (listeners.length === 1) {
//     lastRealY = readScrollY();
//     window.addEventListener("scroll", onScroll, { passive: true });
//   }

//   return () => {
//     listeners = listeners.filter((l) => l !== listener);
//     if (listeners.length === 0) {
//       window.removeEventListener("scroll", onScroll);
//     }
//   };
// }

// // 👇 expose both when needed
// export function getRealScrollY() {
//   return readScrollY();
// }

// export function getVirtualScrollY() {
//   return virtualY;
// }
