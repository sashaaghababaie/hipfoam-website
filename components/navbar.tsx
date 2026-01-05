"use client";

import HipSign from "./svg/logo-sign";
import useAnchorScroll from "@/hooks/useAnchorScroll";

export default function Navbar() {
  useAnchorScroll();

  return (
    <nav className="fixed flex top-0 w-full border-b justify-between border-zinc-300 bg-white/10 left-0 h-16 backdrop-blur-md z-50">
      <div className="w-full text-sm md:text-base h-full items-center flex md:w-1/2 justify-around">
        <a className="text-black hover:text-black/50" href="#products">
          محصولات
        </a>
        <a className="text-black hover:text-black/50" href="#about">
          درباره ما
        </a>

        <a className="text-black hover:text-black/50" href="#contact">
          ارتباط با ما
        </a>
      </div>
      <a
        href="#top"
        className="flex shrink-0 cursor-pointer w-32 relative gap-2 items-center"
      >
        <HipSign width={80} className="fill-hip" />
        <span className="right-16 font-semibold text-lg leading-5 absolute">
          {" "}
          هیپ‌ فــوم
        </span>
      </a>
    </nav>
  );
}
