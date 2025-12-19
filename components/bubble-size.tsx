"use client";
import { useInView } from "react-intersection-observer";
import { LazyShow } from "./lazy-show";
import BubbleRenderer from "./bubble-renderer";

export default function BubbleSize() {
  const { ref, inView } = useInView({
    rootMargin: "100% 0px -30% 0px",
  });
  return (
    <div ref={ref} className="min-h-[calc(100svh-64px)]">
      <div className="py-12 border-y border-zinc-300 flex flex-col items-center justify-center text-center">
        <LazyShow inView={inView}>
          <h2 className="text-xl font-semibold text-gray-500">
            تولید پلاستیک حباب دار
          </h2>
          <LazyShow inView={inView}>
            <h2 className="mt-3 text-black md:text-4xl text-2xl font-black">
              با قطر حباب متنوع
            </h2>
            <LazyShow inView={inView}>
              <h2 className="text-pink-900 mt-3 text-xl font-black">
                برای هر نوع نیاز لجستیک
              </h2>
            </LazyShow>
          </LazyShow>
        </LazyShow>
      </div>
      <div className="border-b border-zinc-300 flex flex-col items-center justify-center text-center">
        <LazyShow inView={inView}>
          <p className="text-gray-600 leading-loose py-12">
            هیپ فوم متناسب با نیاز شما اقدام به تولید پلاستیک حبابدار با قطرهای
            حباب ۱۰ میلی‌متر، ۱۸ میلی‌متر و ۲۵ میلی‌متر می‌نماید.
          </p>
        </LazyShow>
      </div>
      {/* <div className="h-auto md:h-[200svh]"> */}
      <div className="">
        <div className="grid relative md:sticky md:top-16 grid-cols-1 border-zinc-300 md:grid-cols-3 border-b">
          <div className="w-full relative h-[200svh] border-l border-zinc-300">
            <div className="w-full sticky overflow-hidden top-16 h-[calc(100svh-64px)]">
              <div className="w-full left-1/2 -translate-x-1/2 h-auto md:h-full md:w-auto z-0 absolute aspect-square rounded-full bg-black/5" />
              <img
                src="/furniture.webp"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="h-[calc(100svh-64px)] absolute top-1/2 flex items-center justify-center w-full z-40 px-4">
              <div className="rounded-full max-w-[300px] flex flex-col justify-between items-center p-2 h-full aspect-1/2 w-auto md:h-auto md:w-full md:aspect-1/2 bg-white/50 backdrop-blur-2xl">
                <div className="w-full">
                  <div className="relative flex aspect-square w-full justify-between overflow-hidden rounded-full border border-dashed">
                    <BubbleRenderer spacingX={35} spacingY={35} />
                  </div>
                  <h3 className="text-center mt-8 text-xl font-semibold">
                    قطر{" "}
                    <span className=" text-2xl w-8 h-8 rounded-full text-white bg-pink-900 inline-block font-black">
                      ۱۰
                    </span>{" "}
                    میلیمتر
                  </h3>
                </div>

                <div className="flex flex-col items-center justify-center mb-24">
                  <p className="text-lg font-semibold my-4">برای بسته‌بندی</p>
                  <p>مبلمان</p>
                  <p>تشک خوش‌خواب</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative h-[200svh] border-l border-zinc-300">
            <div className="w-full sticky overflow-hidden top-16 h-[calc(100svh-64px)]">
              <div className="w-full h-auto md:h-full left-1/2 -translate-x-1/2 md:w-auto z-0 absolute aspect-square rounded-full bg-black/5" />
              <img
                src="/hardware.webp"
                className="relative z-1 w-full h-full object-contain"
              />
            </div>
            <div className="h-[calc(100svh-64px)] absolute top-1/2 flex items-center justify-center w-full z-40 px-4">
              <div className="rounded-full max-w-[300px] flex flex-col justify-between items-center p-2 h-full aspect-1/2 w-auto md:h-auto md:w-full md:aspect-1/2 bg-white/50 backdrop-blur-2xl">
                <div className="w-full">
                  <div className="relative flex aspect-square w-full justify-between overflow-hidden rounded-full border border-dashed">
                    <BubbleRenderer spacingX={55} spacingY={55} />
                  </div>
                  <h3 className="text-center mt-8 text-xl font-semibold">
                    قطر{" "}
                    <span className=" text-2xl w-8 h-8 rounded-full text-white bg-pink-900 inline-block font-black">
                      ۱۸
                    </span>{" "}
                    میلیمتر
                  </h3>
                </div>

                <div className="flex flex-col items-center justify-center mb-24">
                  <p className="text-lg font-semibold my-4">برای بسته‌بندی</p>
                  <p>انواع تجهیزات</p>
                  <p>خودرو</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative h-[200svh] border-l border-zinc-300">
            <div className="w-full sticky overflow-hidden top-16 h-[calc(100svh-64px)]">
              <div className="w-full left-1/2 -translate-x-1/2 h-auto md:h-full md:w-auto z-0 absolute aspect-square rounded-full bg-black/5" />
              <img
                src="/industry.webp"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="h-[calc(100svh-64px)] absolute top-1/2 flex items-center justify-center w-full z-40 px-4">
              <div className="rounded-full max-w-[300px] flex flex-col justify-between items-center p-2 h-full aspect-1/2 w-auto md:h-auto md:w-full md:aspect-1/2 bg-white/50 backdrop-blur-2xl">
                <div className="w-full">
                  <div className="relative flex aspect-square w-full justify-between overflow-hidden rounded-full border border-dashed">
                    <BubbleRenderer spacingX={85} spacingY={85} />
                  </div>
                  <h3 className="text-center mt-8 text-xl font-semibold">
                    قطر{" "}
                    <span className=" text-2xl w-8 h-8  items-center justify-center rounded-full text-white bg-pink-900 inline-block font-black">
                      ۲۵
                    </span>{" "}
                    میلیمتر
                  </h3>
                </div>

                <div className="flex flex-col items-center justify-center mb-24">
                  <p className="text-lg font-semibold my-4">برای بسته‌بندی</p>
                  {/* <p>صنایع نفت و گاز</p> */}
                  <p>تجهیزات صنایع نفت و گاز</p>
                  <p>رک‌های مخابراتی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
