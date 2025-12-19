"use client";
import { useInView } from "react-intersection-observer";
import { LazyShow } from "./lazy-show";
import { localeNumber } from "../app/utiils/string";
import { useScrollProgress } from "../app/hooks/useScrollProgress";
import { CSSProperties } from "react";

const sizes = [10, 16, 30, 60, 80, 100, 120, 150, 180, 200];

export default function Cylinder() {
  const { cnRef, elRef } = useScrollProgress({ start: 0, end: 2 });
  const { ref, inView } = useInView({ rootMargin: "100% 0px -10% 0px" });
  return (
    <div ref={cnRef} className="relative px-4">
      <div className="mx-auto flex min-h-svh max-w-300 flex-col border-x border-t border-slate-300 bg-white pb-24 md:max-h-200 md:flex-row md:pb-0">
        {/* <div className="absolute -top-4 left-4 z-50 h-44 w-full bg-linear-to-b from-slate-100" /> */}
        <div className=" border-l border-transparent md:border-slate-300 relative flex  w-full flex-col items-center justify-center overflow-hidden  px-4 text-center md:w-1/2 md:text-start">
          {/* <div className="orbit-wrapper absolute aspect-square w-full max-w-[100px] -translate-y-2 items-center justify-center">
            <div className="orbit-item h-full w-full">
              <div className="z-10 h-full w-full rounded-full border border-slate-200"></div>
            </div>
          </div> */}
          <div ref={ref} className="relative z-20 py-20 max-w-md">
            <LazyShow inView={inView}>
              <h2 className="text-xl font-semibold text-gray-500">
                سیلندر عریض
              </h2>
            </LazyShow>
            <LazyShow inView={inView}>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <div className="bg-pink-900 mt-2 h-4 w-4 rounded-full" />
                <h2 className="mt-3 text-black md:text-4xl text-2xl font-black">
                  ارائه عرض‌های تا ۲ متر
                </h2>
              </div>
            </LazyShow>
            <LazyShow inView={inView}>
              <h2 className="text-pink-900 mt-3 text-xl font-black">
                برای پوشش کامل محصول شما
              </h2>
            </LazyShow>
            <LazyShow inView={inView}>
              <p className="mt-12 text-base leading-loose font-normal text-gray-600">
                یکی از بزرگترین مزیت‌های HIP FOAM، بهره‌گیری از سیلندرهایی با
                عرض ۲ متر است. این قابلیت به ما اجازه می‌دهد تا تمام عرض‌های
                استاندارد از ۱۰ سانتی‌متر تا ۲ متر را پوشش دهیم.
              </p>

              <LazyShow inView={inView}>
                <div className="mt-12 flex flex-wrap gap-2">
                  {sizes.map((d, i) => (
                    <div
                      key={i}
                      className="border-orange flex h-8 w-20 items-center justify-center rounded-full border bg-orange-500 text-white"
                    >
                      {localeNumber(d)} س.م
                    </div>
                  ))}
                </div>
              </LazyShow>
            </LazyShow>
          </div>
        </div>

        <div className="to-pink-900/10 pt-0 md:pt-20 relative flex w-full items-center justify-center  bg-white px-4 md:h-full md:w-1/2">
          {/* <TextIntro inView={inView}> */}
          <div className="w-full aspect-square rounded-full overflow-hidden">
            <img
              src="./sizes.webp"
              className="relative z-20 h-full w-full object-contain rounded-full "
            />
          </div>
          <div
            ref={elRef}
            style={{ "--speed": 8 } as CSSProperties}
            className="bg-zinc-200/80 layer backdrop-blur-sm top-[50vh] rounded-full absolute z-20 w-2/3 aspect-square"
          >
            <img
              src="./dim.webp"
              className="z-20 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
