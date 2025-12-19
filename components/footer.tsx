"use client";
import { useEffect } from "react";
import HipLogo from "./svg/hip-logo";

export const Footer = () => {
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
  return (
    <footer className="bg-hip-black min-h-44">
      <div className="flex flex-row-reverse justify-between">
        <div>
          <HipLogo className=" fill-white w-44" />
        </div>
        <div className="flex flex-col items-center w-full mt-8">
          <div className="space-y-4 text-sm  text-white">
            <p className="font-bold">نقشه سایت</p>
            <div className="flex flex-col gap-y-2">
              <a className="hover:text-white/50" href="#products">
                محصولات هیپ‌فوم
              </a>
              <a className="hover:text-white/50" href="#about">
                درباره ما
              </a>
              <a className="hover:text-white/50" href="#contact">
                ارتباط با ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
