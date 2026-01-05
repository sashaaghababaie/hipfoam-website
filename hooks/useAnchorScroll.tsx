"use client";

import { useEffect } from "react";

export default function useAnchorScroll() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      if (anchor.getAttribute("href") !== "#") {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          //@ts-expect-error cannot infer this
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    });
  }, []);
}
