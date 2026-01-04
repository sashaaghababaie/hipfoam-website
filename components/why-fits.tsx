"use client";

import { CSSProperties } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useInView } from "react-intersection-observer";
import { LazyShow } from "./lazy-show";
import CostumizeBubbleSVG from "./svg/customizable";
import TimeSVG from "./svg/time";
import Diamond from "./svg/diamond";
import Gear from "./svg/gear";

export const WhyFits = () => {
  const { elRef, cnRef } = useScrollProgress({ start: 0.1, end: 0.5 });
  const { ref, inView } = useInView({ rootMargin: "100% 0px -30% 0px" });

  return (
    <div
      ref={cnRef}
      className="flex bg-white relative justify-center overflow-hidden left-0 w-full z-1"
    >
      <div ref={ref} className="relative w-full px-4 z-2">
        <LazyShow inView={inView}>
          <h2 className="flex flex-col justify-center items-center gap-y-2 z-2 text-black pt-24 relative">
            <span className="text-2xl md:text-4xl text-center leading-relaxed font-black">
              ۳ دلیل اصلی انتخاب هیپ‌فوم
            </span>
            <LazyShow inView={inView}>
              <span className="text-xl md:text-2xl text-zinc-500 font-semibold mt-2">
                برای لجستیک شما
              </span>
            </LazyShow>
          </h2>
        </LazyShow>

        <div className="grid w-full mt-24 grid-cols-1 gap-y-14 gap-x-8 md:grid-cols-3 text-white">
          <div className="flex h-120 relative items-center flex-col justify-center w-full">
            <TimeBubble />
          </div>
          <div className="flex h-120 relative items-center flex-col justify-center w-full">
            <TechBubble />
          </div>
          <div className="flex h-120 relative items-center flex-col justify-center w-full">
            <CostumizeBubble />
          </div>
        </div>
      </div>
      <div
        ref={elRef}
        style={{ "--speed": 3 } as CSSProperties}
        className="h-200 rounded-full absolute top-0 duration-75 origin-top scroll-animate scroll-zoom w-200 bg-zinc-200"
      ></div>
    </div>
  );
};

const TechBubble = () => {
  return (
    <>
      <div className="w-50  h-100 relative flex justify-center items-center">
        <Diamond className="z-10 w-50 h-50 absolute -top-2 left-2" />
        <Gear className="z-10 w-50 h-50 absolute -top-2 left-2" />
        <div
          className="absolute top-0 aspect-square w-full"
          style={
            {
              "--float-radius": "5px",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 top-0 w-20"
          style={
            {
              "--float-radius": "10px",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute w-full">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute right-20 -top-12 w-full"
          style={
            {
              "--float-radius": "10px",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute right-0 w-10">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 w-1/2"
          style={
            {
              "--float-radius": "4px",
              "--float-duration": "3s",
              "--float-direction": "reverse",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute top-32 w-full">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
      </div>
      {/* bubble */}
      {/* text */}
      <div className="text-black flex flex-col justify-center absolute top-75">
        <h3 className="text-center font-black text-xl">
          تکنولوژی برتر و ۵ لایه
        </h3>
        <p className="max-w-lg text-black text-center mt-2 ">
          محصولات ما متناسب با ابعاد و ماهیت کالای شما و نیازهای اختصاصی صنایع
          مختلف تولید می‌شوند تا کمترین هدر رفت پلاستیک را داشته باشید.
        </p>
      </div>
    </>
  );
};

const TimeBubble = () => {
  return (
    <>
      <div className="w-50  h-100 relative flex justify-center items-center">
        <TimeSVG className="z-10 w-50 h-50 absolute -top-2 left-2" />
        <div
          className="absolute top-0 aspect-square w-full"
          style={
            {
              "--float-radius": "5px",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 -top-10 w-25"
          style={
            {
              "--float-radius": "10px",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute w-full">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute left-6 top-20 w-full"
          style={
            {
              "--float-radius": "10px",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute right-0 w-15">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 top-10 -bottom-full w-10"
          style={
            {
              "--float-radius": "4px",
              "--float-duration": "3s",
              "--float-direction": "reverse",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute top-32 w-full">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
      </div>
      {/* bubble */}
      {/* text */}
      <div className="text-black flex flex-col justify-center absolute top-75">
        <h3 className="text-center font-black text-xl">تحویل فوری</h3>
        <p className="max-w-lg text-black text-center mt-2 ">
          ظرفیت تولید بالا و فرآیندهای بهینه ما تضمین می‌کند که سفارشات بدون
          تأخیر و دقیقاً در موعد مقرر به دست شما برسد. سفارش‌گیری روزانه ۴ الی ۵
          تن و تحویل درب کارخانه.
        </p>
      </div>
    </>
  );
};

const CostumizeBubble = () => {
  return (
    <>
      <div className="w-50  h-100 relative flex justify-center items-center">
        <CostumizeBubbleSVG className="z-10 w-50 h-50 absolute -top-2 left-2" />
        <div
          className="absolute top-0 aspect-square w-full"
          style={
            {
              "--float-radius": "3px",
              "--float-duration": "6s",
              "--float-direction": "reverse",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute -left-8 -top-10 w-12"
          style={
            {
              "--float-radius": "10px",
              "--float-duration": "5s",
              "--float-direction": "reverse",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute w-full">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 w-full"
          style={
            {
              "--float-radius": "10px",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute right-0 w-16">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
        <div
          className="absolute -right-12 -top-10 -bottom-full w-1/2"
          style={
            {
              "--float-radius": "4px",
              "--float-duration": "3s",
              "--float-direction": "",
            } as React.CSSProperties
          }
        >
          <div className="orbit-wrapper absolute top-32 w-full">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full rounded-full bg-pink-900/90" />
            </div>
          </div>
        </div>
      </div>
      {/* bubble */}
      {/* text */}
      <div className="text-black flex flex-col justify-center absolute top-75">
        <h3 className="text-center font-black text-xl">
          سفارشی‌سازی متناسب با نیاز
        </h3>
        <p className="max-w-lg text-black text-center mt-2 ">
          محصولات ما متناسب با ابعاد و ماهیت کالای شما و نیازهای اختصاصی صنایع
          مختلف تولید می‌شوند تا کمترین هدر رفت پلاستیک را داشته باشید.
        </p>
      </div>
    </>
  );
};
