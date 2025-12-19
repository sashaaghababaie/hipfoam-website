"use client";
import { CSSProperties } from "react";
import { useScrollProgress } from "../app/hooks/useScrollProgress";
import Button from "./button";
import { FiArrowUpLeft } from "react-icons/fi";

export default function BuyNow() {
  const { elRef, cnRef } = useScrollProgress({ start: 0, end: 0.8 });

  return (
    <div
      id="contact"
      ref={cnRef}
      className="flex justify-center h-svh relative overflow-hidden w-full z-1"
    >
      <div className="absolute top-0 left-0 h-full w-1/2 border-r border-zinc-300" />
      <div
        ref={elRef}
        style={{ "--speed": 1 } as CSSProperties}
        className="h-180 bg-hip rounded-full absolute top-0 duration-75 origin-top scroll-animate scroll-zoom w-180"
      ></div>
      <div className="h-svh flex flex-col justify-center items-center">
        <div className="py-24 max-w-sm z-2">
          <h2 className=" text-white/60 text-center text-2xl">
            آماده ارتقاء بسته‌بندی هستید؟
          </h2>
          <h2 className=" text-white mt-4 font-black text-center text-4xl">
            اکنون سفارش دهید!
          </h2>
        </div>
        <div className="grow relative z-2 items-center  justify-center flex flex-col">
          <Button className="bg-white text-black p-8 font-black text-xl">
            <span className="leading-loose">
              لیست قیمت
              <br />
              و
              <br />
              سفارش
            </span>
            <FiArrowUpLeft className="inline text-2xl text-black" />
          </Button>
        </div>
      </div>
    </div>
    // <div className="h-svh">
    //   {" "}
    // <div className="py-8">
    //   <h2 className=" text-gray-400 text-center text-2xl">
    //     برای انتخاب راهکار مناسب
    //   </h2>
    //   <h2 className=" text-black mt-4 font-black text-center text-4xl">
    //     مشاوره تخصصی رایگان بگیرید
    //   </h2>
    // </div>
    //   <Button>مشاوره</Button>
    // </div>
  );
}
