"use client";

import { useInView } from "react-intersection-observer";
import { LazyShow } from "./lazy-show";
import HipLogo from "./svg/hip-logo";

const layerBaseClass =
  "absolute w-[300px] -right-[300px] sm:-right-[400px] z-50 aspect-square sm:w-[400px] origin-top border lg:-right-[600px] lg:w-[600px] will-change-transform";

const skewClass = "skew-x-12 skew-y-12";
export default function Layers() {
  const [l1, l1View] = useInView({
    // triggerOnce: true,
    rootMargin: "100% 0px -60% 0px",
    // threshold: Array.from({ length: 1001 }, (_, i) => i / 1000),
  });
  const [l2, l2View] = useInView({
    rootMargin: "100% 0px -30% 0px",
    // triggerOnce: true,
    // rootMargin: "100% 0px -10% 0px",
    // threshold: Array.from({ length: 10 }, (_, i) => i / 100),
  });
  const [l3, l3View] = useInView({
    rootMargin: "100% 0px -30% 0px",
    // triggerOnce: true,
    // rootMargin: "100% 0px -10% 0px",
    // threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  });
  const [l4, l4View] = useInView({
    rootMargin: "100% 0px -30% 0px",
    // triggerOnce: true,
    // rootMargin: "100% 0px -10% 0px",
    // threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  });
  const [l5, l5View] = useInView({
    rootMargin: "100% 0px -30% 0px",
    // triggerOnce: true,
    // rootMargin: "100% 0px -10% 0px",
    // threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  });

  return (
    <div className="w-full h-[300svh] relative px-4">
      <div className="w-1/2 absolute h-full top-0 border-r border-zinc-300 left-[1px] " />
      <div className="h-full pt-24 max-w-300 border-x border-zinc-300 mx-auto relative">
        <div className="h-[300svh] absolute w-full left-0 top-0">
          <div className="relative w-full h-full">
            <div
              ref={l1}
              className="absolute border-t border-zinc-300 w-full top-0 h-[300svh]"
            />
            <div
              ref={l2}
              className="absolute border-t border-zinc-300  w-full top-[100svh] h-[200svh]"
            />
            <div
              ref={l3}
              className="absolute border-t border-zinc-300 w-full top-[150svh] h-[150svh]"
            />
            <div
              ref={l4}
              className="absolute border-t border-zinc-300 w-full top-[200svh] h-[100svh]"
            />
            <div
              ref={l5}
              className="absolute border-t border-zinc-300 w-full top-[250svh] h-[50svh]"
            />
          </div>
        </div>
        <div className="h-[calc(100svh-64px)] min-h-[500px] border-b border-zinc-300 sticky overflow-hidden w-full top-16">
          <div className="w-full md:w-1/2 absolute z-60 px-4 top-0 left-0 h-full">
            <LazyShow inView={l1View}>
              <h2 className="mt-3 md:text-4xl text-black text-2xl font-black">
                پلاستیک حباب دار ۵ لایه
              </h2>
              <h2 className="text-pink-900 mt-3 text-xl font-black">
                برای محافظت حداکثری از محصول
              </h2>
              <LazyShow inView={l1View}>
                <p className="mt-12 leading-loose text-gray-600">
                  ما در HIP FOAM بر اساس نیازهای لجستیک و حساسیت محصول شما،
                  توانایی تولید پلاستیک حباب دار با ۵ لایه محافظتی اختصاصی را
                  داریم که استحکام و ایمنی را به طور چشمگیری افزایش می‌دهد.
                  امکان اضافه کردن لایه آلومینیوم و چاپ طرح شما برای برندینگ نیز
                  وجود دارد.
                </p>
              </LazyShow>
            </LazyShow>
          </div>
          <div className="absolute top-0 left-0"></div>
          <div className="bottom-4 w-full z-10 right-1/2 mr-4 absolute">
            <LazyShow inView={l5View}>
              <p className="text-orange-600 text-lg font-bold border-b border-orange-600">
                +‌ نایلون با چاپ
              </p>
            </LazyShow>
            <LazyShow inView={l4View}>
              <p className="text-orange-600 text-lg font-bold border-b border-orange-600">
                + نایلون استرچ
              </p>
            </LazyShow>{" "}
            <LazyShow inView={l3View}>
              <p className="text-orange-600 text-lg font-bold border-b border-orange-600">
                + نایلون حباب‌دار
              </p>
            </LazyShow>{" "}
            <LazyShow inView={l2View}>
              <p className="text-orange-600 text-lg font-bold border-b border-orange-600">
                + نایلون استرچ
              </p>
            </LazyShow>{" "}
            <LazyShow inView={l1View}>
              <p className="text-orange-600 text-lg font-bold border-b border-orange-600">
                + لایه متالایز
              </p>
            </LazyShow>
          </div>
          <div className="overflow-hidden">
            <div
              //   style={{
              //     transform: `skewX(12deg) skewY(12deg) translateX(${(entry1?.intersectionRatio || 1) * -100}%)`,
              //   }}
              className={`${layerBaseClass} ${skewClass} ${l1View && "-translate-x-[85%] translate-y-[50%]"} transform-gpu duration-200 transition-transform top-[140px] -rotate-45 bg-linear-to-r from-zinc-500 to-zinc-200 lg:-top-[4%]`}
            >
              {/* {entry1?.intersectionRatio} */}
            </div>
            <div
              className={`${layerBaseClass} ${skewClass} ${l2View && "-translate-x-[85%] translate-y-[50%]"} transform-gpu transition-transform duration-200 bg-pink-900/10 top-[132px] -rotate-45 lg:-top-[6%]`}
            />
            <div
              className={`${layerBaseClass} ${skewClass} ${l3View && "-translate-x-[85%] translate-y-[50%]"} transform-gpu transition-transform duration-200 bg-pink-900/10 top-[124px] -rotate-45 lg:-top-[8%]`}
            />
            <div
              className={`${layerBaseClass} ${skewClass} ${l4View && "-translate-x-[85%] translate-y-[50%]"} transform-gpu transition-transform duration-200 bg-pink-900/10 top-[116px] -rotate-45 lg:-top-[10%]`}
            />
            <div
              className={`${layerBaseClass} ${skewClass} ${l5View && "-translate-x-[85%] translate-y-[50%]"} transform-gpu transition-transform duration-200 top-[108px] -rotate-45 bg-orange-600 lg:-top-[12%]`}
            >
              {" "}
              <HipLogo className="fill-hip text-pink-900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
