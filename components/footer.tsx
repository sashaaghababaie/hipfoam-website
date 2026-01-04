"use client";
import { useEffect } from "react";
import HipLogo from "./svg/hip-logo";
import { siteConfig } from "@/config/site";

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
    <footer dir="rtl" className="bg-hip-black min-h-44 pt-4">
      <div className="flex flex-col gap-y-12 md:flex-row justify-between">
        <div>
          <HipLogo className="fill-white w-44" />
          <p className="text-white px-10 mb-10 text-sm leading-loose">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex flex-col md:items-center items-start px-10 w-full mt-8">
          <div className="space-y-4 text-sm text-white/90">
            <h2 className="font-black text-white">نقشه سایت</h2>
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
        <div
          dir="ltr"
          className="text-white/90 mt-8 text-sm pl-10 flex flex-col gap-y-2"
        >
          <h2 className="font-black text-white mb-2">ارتباط با ما</h2>
          <a
            className="hover:text-white/70 pr-2 w-fit"
            href="tel:00989023035258"
          >
            +۹۸ ۹۰۲ ۳۰ ۳۵ ۲۵۸
          </a>
          <a
            className="hover:text-white/70 w-fit pr-2"
            href="tel:00989174044721"
          >
            +۹۸ ۹۱۷ ۴۰ ۴۴ ۷۲۱
          </a>
          <a
            className="hover:text-white/70 w-fit pr-2"
            href="mailto:sales@hipfoam.com"
          >
            sales@hipfoam.com
          </a>

          <a
            className="mt-8 hover:text-white/70 max-w-44 pr-2"
            href="mailto:sales@hipfoam.com"
          >
            شیراز، شهرک بزرگ صنعتی، میدان سوم، کوشش شمالی، خیابان ۱۱۲، پلاک ۷
          </a>
        </div>
      </div>

      <p className="text-gray-500 border-t mt-12 py-4 text-center text-sm">
        @۱۴۰۴ تمامی حقوق برای هیپ‌فوم (حباب‌ایمن) محفوظ است
      </p>
    </footer>
  );
};
