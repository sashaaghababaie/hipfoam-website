"use client";

import { useEffect, useState } from "react";
import GravityPile from "./gravity";
import { useInView } from "react-intersection-observer";

export default function HipDelivers() {
  const [show, setShow] = useState(false);

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView2) setShow(true);
  }, [inView2]);

  return (
    <div className="bg-white border-b-4 border-zinc-300 relative flex h-svh max-h-200 flex-col">
      <div ref={ref} className="absolute top-0 left-0 h-[150vh] w-full"></div>
      <div
        className={`relative top-8 flex justify-center text-black duration-1000 ${inView ? "-translate-y-24 opacity-100" : "opacity-0"}`}
      >
        <div className="relative max-w-sm z-50 text-center">
          <h1 className="mt-16 text-lg md:text-xl ">هیپ‌فوم</h1>
          <h1 className="text-2xl md:text-4xl mt-4 font-semibold">
            ارائه‌دهنده راهکارهای نوین بسته‌بندی پلی اتیلن
          </h1>
        </div>
      </div>
      <div className="relative w-full grow">
        <div className="absolute bottom-0 left-0 h-full w-full">
          {show && <GravityPile />}
        </div>
      </div>

      <div ref={ref2} className="absolute top-full h-[200vh]"></div>
    </div>
  );
}
