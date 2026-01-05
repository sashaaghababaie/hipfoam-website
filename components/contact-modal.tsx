"use client";

import { useRef } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScoll";
import HipSign from "./svg/logo-sign";
import { createPortal } from "react-dom";
import CopyButton from "./copy-button";

export function Modal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useLockBodyScroll(open);

  const boundry = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (boundry.current && boundry.current.contains(e.target as Node)) return;
    onClose();
  };

  if (!open) return null;

  return createPortal(
    <div
      //@ts-ignore
      onPointerDown={handleClick}
      className="fixed inset-0 z-50 bg-black/10 animate-fade-in backdrop-blur-md"
    >
      <div className="absolute inset-0 p-2 flex items-center justify-center">
        <div
          ref={boundry}
          className="bg-white max-h-[100svh-4rem] animate-scale-in relative p-6 rounded-xl w-full max-w-xl"
        >
          {/* <div
            className="absolute z-50 top-4 right-4 cursor-pointer"
            onClick={onClose}
          >
onClose
          </div> */}
          <h1 className="text-2xl font-black text-center">راه‌های ارتباطی</h1>
          <div className="mt-4 mb-8  flex items-center justify-center">
            <div dir="rtl" className="flex w-40 relative gap-2 items-center">
              <HipSign width={100} className="fill-hip" />
              <p className="right-18 text-hip-black font-semibold text-xl absolute">
                هیپ‌
                <br />
                فــوم
              </p>
            </div>
          </div>
          <div>
            <h2 className="mt-4 text-center font-bold text-base text-hip-black">
              تماس با دفتر فروش
            </h2>
            <div dir="ltr" className="flex flex-col gap-y-3">
              <div className="flex mt-4 justify-between items-center gap-4 border-black/50">
                <p>+۹۸ ۹۰۲ ۳۰ ۳۵ ۲۵۸</p>
                <div className="grow border-b border-dotted hidden md:flex" />
                <div className="flex gap-x-1">
                  <a
                    className="rounded-lg bg-hip px-2 py-1 text-sm text-white"
                    href="tel:00989023035258"
                  >
                    تماس
                  </a>
                  <CopyButton textToCopy="+989023035258" />
                </div>
              </div>
              <div className="flex justify-between items-center gap-4 border-black/50">
                <p>+۹۸ ۹۱۷ ۴۰ ۴۴ ۷۲۱</p>
                <div className="grow border-b border-dotted hidden md:flex" />
                <div className="flex gap-x-1">
                  <a
                    className="rounded-lg bg-hip px-2 py-1 text-sm text-white"
                    href="tel:00989174044721"
                  >
                    تماس
                  </a>
                  <CopyButton textToCopy="+989174044721" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-center font-bold text-base text-hip-black">
              ایمیل
            </h2>
            <div
              dir="ltr"
              className="flex mt-4 items-center gap-4 justify-between border-black/50"
            >
              <p>sales@hipfoam.com</p>
              <div className="grow border-b border-dotted hidden md:flex" />
              <div className="flex gap-x-1">
                <a
                  className="rounded-lg bg-hip px-2 py-1 text-sm text-white"
                  href="mailto:sales@hipfoam.com"
                >
                  ارسال
                </a>
                <CopyButton textToCopy="sales@hipfoam.com" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h2 className="mt-4 text-center font-bold text-base text-hip-black">
              آدرس
            </h2>
            <p className="mt-4 leading-relaxed text-sm">
              شیراز، شهرک بزرگ صنعتی، میدان سوم، کوشش شمالی، خیابان ۱۱۲، پلاک ۷
            </p>
          </div>
          <div className="flex mt-8 items-center justify-center">
            <button
              onClick={onClose}
              className="px-2 hover:text-zinc-500 hover:border-zinc-500 cursor-pointer min-w-32 py-1 text-sm text-hip-black rounded-lg border border-zinc-500"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
