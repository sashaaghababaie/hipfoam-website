"use client";
import { CSSProperties } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useInView } from "react-intersection-observer";
import { LazyShow } from "./lazy-show";
import HipLogo from "./svg/hip-logo";

export default function HeroProducts() {
  return (
    <div className="h-[280svh] md:h-[200svh] relative">
      <div className="h-svh text-black  top-0  flex items-center justify-center">
        <Hero />
      </div>
      <Products />
    </div>
  );
}

export const Hero = () => {
  const { ref, inView } = useInView({
    rootMargin: "0% 0px 0% 0px",
    initialInView: false,
  });
  return (
    <div
      ref={ref}
      className="relative flex h-svh min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-linear-to-t from-zinc-100"
    >
      {/* <img
        src="/bg.png"
        className="aspect-square h-1/2 min-h-[300px] rounded-full object-cover"
      />
 */}

      <div className="absolute inset-0 mx-auto h-full max-w-[400px] opacity-90 sm:max-w-[500px]">
        <div dir="ltr" className="relative h-full w-full -translate-x-1/2">
          <div className="bg-hip absolute top-16 right-44 aspect-square h-2/3 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-12 aspect-square h-1/2 rounded-full bg-orange-600/50 blur-3xl" />
        </div>
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="aspect-square w-full max-w-[620px] min-w-[300px] rounded-full mask-[radial-gradient(circle,black_0%,black_20%,transparent_70%)] object-cover"
          src="./nano.jpg"
        />
      </div> */}

      {/* <div className="orbit-wrapper aspect-square w-full max-w-[420px] min-w-[300px] items-center justify-center sm:max-w-[600px]">
        <div className="orbit-item h-full w-full">
          <div className="scale-up-and-orbit z-10 h-full w-full rounded-full bg-white/30 mask-[radial-gradient(circle,transparent_0%,transparent_10%,black_90%)]"></div>
        </div>
      </div> */}
      <div
        style={
          {
            "--float-radius": "170px",
            "--float-duration": "16s",
            "--float-direction": "reverse",
          } as React.CSSProperties
        }
        className="orbit-wrapper absolute aspect-square w-full max-w-[400px] min-w-[320px] -translate-x-1/2 -translate-y-2 items-center justify-center opacity-50 blur-sm sm:max-w-[450px]"
      >
        <div className="orbit-item h-full w-full">
          <div className="scale-up-and-orbit z-10 h-full w-full rounded-full bg-white/80 mask-[radial-gradient(circle,transparent_0%,transparent_10%,black_90%)]"></div>
        </div>
      </div>
      <div className="orbit-wrapper absolute aspect-square w-full max-w-[400px] min-w-[320px] -translate-x-1/2 -translate-y-2 items-center justify-center opacity-50 blur-sm sm:max-w-[550px]">
        <div className="orbit-item h-full w-full">
          <div className="scale-up-and-orbit z-10 h-full w-full rounded-full bg-white/80 mask-[radial-gradient(circle,transparent_0%,transparent_10%,black_90%)]"></div>
        </div>
      </div>

      <div className="absolute inset-0 z-40 mx-auto flex w-full max-w-[1200px] items-center px-4 py-12">
        <div className="flex flex-col">
          <HipLogo width={280} className="fill-hip -mr-14 -mb-10" />

          {/* <h1 className="text-hipfoam text-5xl font-bold sm:text-7xl">هیپ فوم</h1> */}
          <LazyShow inView={inView}>
            <h2 className="text-hipfoam-black mt-12 text-xl font-medium sm:text-3xl">
              ارائه‌‌دهنده راهکار‌های بسته‌بندی پلی‌اتیلن
            </h2>
          </LazyShow>

          <LazyShow inView={inView}>
            {/* <p className="mt-8 max-w-lg sm:text-lg">
              تولیدکننده انواع محصولات پلی‌اتیلن چندلایه، عریض و با قابلیت چاپ با کیفیت
              بالا برای مصارف صنعتی، ساختمانی و خانگی
            </p> */}
            <p className="text-md mt-6 max-w-lg">
              تولید کننده انواع{" "}
              <span className="font-bold text-orange-600">نایلون حبابدار </span>{" "}
              و <span className="font-bold text-orange-600">نایلون استرچ</span>{" "}
              چند لایه و عریض با قابلیت چاپ و کیفیت بالا برای مصارف صنعتی و
              خانگی
            </p>
          </LazyShow>
          <div className="group relative mt-24 flex cursor-pointer items-center justify-center transition-transform duration-200 hover:scale-120">
            <p className="mt absolute z-20 text-2xl font-bold group-hover:text-white">
              سفارش
            </p>
            <div className="orbit-wrapper aspect-square w-[150px] transform-gpu will-change-transform">
              <div className="orbit-item">
                <div className="scale-up-and-orbit bg-hip/10 group-hover:bg-hip aspect-square w-full max-w-[200px] transform-gpu rounded-full border-t-2 border-white/20 shadow-sm shadow-white/50 transition duration-300 will-change-transform">
                  <div
                    style={
                      {
                        "--float-radius": "100px",
                        "--float-duration": "5s",
                        "--float-direction": "reverse",
                      } as React.CSSProperties
                    }
                    className="orbit-wrapper aspect-square transform-gpu will-change-transform"
                  >
                    {/* <div className="orbit-item"> */}
                    <div className="scale-up-and-orbit bg-hip/10 group-hover:bg-hip aspect-square w-full max-w-[100px] transform-gpu rounded-full border-t-2 border-white/20 shadow-sm shadow-white/50 transition duration-300 will-change-transform">
                      {/* <div
                          style={
                            {
                              "--float-radius": "10px",
                              "--float-duration": "20s",
                            } as React.CSSProperties
                          }
                          className="orbit-wrapper aspect-square w-full max-w-[300px]">
                          <div className="orbit-item">
                            <div className="scale-up-and-orbit bg-hip/10 aspect-square w-full max-w-[100px] rounded-full border-t-2 border-white/20 shadow-sm shadow-white/50 transition duration-300 will-change-transform group-hover:bg-white/30"></div>
                          </div>
                        </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="group relative flex items-center justify-center">
          <p className="absolute z-50 text-4xl font-bold">سفارش</p>
          <div className="orbit-wrapper aspect-square w-[300px] transform-gpu will-change-transform">
            <div className="orbit-item">
              <div className="scale-up-and-orbit aspect-square w-full max-w-[300px] transform-gpu rounded-full border-t-2 border-white/20 bg-white/10 shadow-sm shadow-white/50 transition duration-300 will-change-transform group-hover:bg-white/30">
                <div
                  style={
                    {
                      "--float-radius": "100px",
                      "--float-duration": "5s",
                      "--float-direction": "reverse",
                    } as React.CSSProperties
                  }
                  className="orbit-wrapper aspect-square transform-gpu will-change-transform">
                  <div className="orbit-item">
                    <div className="scale-up-and-orbit aspect-square w-full max-w-[200px] transform-gpu rounded-full border-t-2 border-white/20 bg-white/10 shadow-sm shadow-white/50 transition duration-300 will-change-transform group-hover:bg-white/30">
                      <div
                        style={
                          {
                            "--float-radius": "10px",
                            "--float-duration": "20s",
                          } as React.CSSProperties
                        }
                        className="orbit-wrapper aspect-square w-full max-w-[300px]">
                        <div className="orbit-item">
                          <div className="scale-up-and-orbit aspect-square w-full max-w-[100px] rounded-full border-t-2 border-white/20 bg-white/10 shadow-sm shadow-white/50 backdrop-blur-sm transition duration-300 will-change-transform group-hover:bg-white/30"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <h1 className="text-hipfoam mt-8 text-6xl font-bold">هیپ فوم</h1>
      <h2 className="text-hipfoam-black mt-4 text-2xl font-medium">
        تولید کننده محصولات پلی‌اتیلن
      </h2>
      <p>
        تامین کننده انواع راهکارهای پلی‌اتیلن با کیفیت بالا برای مصارف صنعتی، ساختمانی و
        خانگی
      </p> */}
    </div>
  );
};
const Products = () => {
  return (
    <>
      <ProductsDesktop />
      <ProductsMobile />
    </>
  );
};
const ProductsDesktop = () => {
  const { elRef, cnRef } = useScrollProgress({ start: 0, end: 2 });

  return (
    <div
      ref={cnRef}
      className="hidden md:flex bg-zinc-100  justify-center absolute top-[100svh] w-full h-svh"
    >
      <div className="absolute bg-linear-to-b to-pinc-900/20 inset-0" />
      <div className="flex w-full  justify-center max-w-300">
        <div className="flex w-1/3 items-center h-full justify-center">
          <h2
            style={{ "--speed": 5 } as CSSProperties}
            className="layer text-black font-bold text-4xl"
          >
            محصولات <span className="text-hip">هیپ‌فوم</span>
          </h2>
        </div>
        <div className="w-2/3 relative">
          <div className="*:border-zinc-300 layer layer-left absolute h-full top-0 left-0 grid grid-cols-7 w-full z-1">
            <div
              style={{ "--speed": 2 } as CSSProperties}
              className="w-full flex items-center layer border-l col-span-3 h-full"
            >
              <div className="bg-white/30 backdrop-blur-sm w-2/3 aspect-square flex p-2 items-center justify-center rounded-full">
                <p className="relative text-center font-bold z-10 text-2xl lg:text-3xl text-black">
                  نایلون حباب‌دار
                </p>
              </div>
            </div>
            <div
              style={{ "--speed": 5 } as CSSProperties}
              className="w-full flex items-center layer  border-l col-span-2 h-full"
            >
              <div className="bg-white/30 backdrop-blur-sm w-auto aspect-square flex p-2 items-center justify-center rounded-full">
                <p className="relative  text-center font-bold z-10 text-2xl lg:text-3xl text-black">
                  تسمه PET
                </p>
              </div>
            </div>
            <div
              style={{ "--speed": 2.5 } as CSSProperties}
              className="w-full flex layer items-center col-span-2 h-full"
            >
              <div className="bg-white/30 backdrop-blur-sm w-auto aspect-square flex p-2 items-center justify-center rounded-full">
                <p className="relative  text-center font-bold z-10 text-2xl lg:text-3xl text-black">
                  تایلون استرچ
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 top-[150svh] max-w-300 w-full h-svh z-1">
            <div className="w-full h-full layer layer-left col-span-3 overflow-hidden">
              <div
                ref={elRef}
                className="w-[120%] relative max-w-150 overflow-hidden aspect-square rounded-full border border-zinc-300"
              >
                <img
                  src="./bubble.jpg"
                  className="w-full absolute top-0 h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full layer layer-middle col-span-2 h-full overflow-hidden">
              <div className="w-[150%] border-zinc-300 relative right-1/2 translate-x-1/2 max-w-150 overflow-hidden aspect-square rounded-full border">
                <img
                  src="./strap.jpg"
                  className="w-full absolute top-0 h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full layer layer-right col-span-2 h-full overflow-hidden">
              <div className="w-[170%] border-zinc-300 relative translate-x-1/2 max-w-150 aspect-square rounded-full overflow-hidden border">
                <img
                  src="./stretch.jpg"
                  className="w-full absolute top-0 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsMobile = () => {
  const { elRef, cnRef } = useScrollProgress({ start: 0, end: 2 });
  return (
    <div
      ref={cnRef}
      className="flex bg-zinc-100 justify-around md:hidden absolute top-[100svh] w-full flex-col h-[150svh]"
    >
      <h2
        style={{ "--speed": 1 } as CSSProperties}
        className="w-full text-black text-center layer font-bold mb-12 text-4xl"
      >
        محصولات <span className="text-pink-900">هیپ‌فوم</span>
      </h2>
      {/* 1 */}

      <div ref={elRef} className="p-4 relative h-1/4">
        <div
          style={{ "--speed": 2 } as CSSProperties}
          className="bg-white/30 absolute top-0 layer  z-2  backdrop-blur-sm w-fit aspect-square flex p-2 items-center justify-center rounded-full"
        >
          <p className="relative text-center font-bold z-10 text-2xl lg:text-4xl text-black">
            نایلون حباب‌دار
          </p>
        </div>
        <div
          style={{ "--speed": 0 } as CSSProperties}
          className="h-full absolute top-0 layer   border-zinc-300  right-1/2 translate-x-1/2 max-w-150 overflow-hidden aspect-square rounded-full border"
        >
          <img src="./bubble.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* 2 */}
      <div className="p-4 relative h-1/4">
        <div
          style={{ "--speed": 2 } as CSSProperties}
          className="bg-white/30 absolute top-0 layer  z-2  backdrop-blur-sm w-fit aspect-square flex p-2 items-center justify-center rounded-full"
        >
          <p className="relative text-center font-bold z-10 text-2xl lg:text-4xl text-black">
            تسمه PET
          </p>
        </div>
        <div
          style={{ "--speed": 0 } as CSSProperties}
          className="h-full absolute  layer   border-zinc-300  right-1/2 translate-x-1/2 max-w-150 overflow-hidden aspect-square rounded-full border"
        >
          <img src="./strap.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* 3 */}
      <div className="p-8 relative h-1/4">
        <div
          style={{ "--speed": 2 } as CSSProperties}
          className="bg-white/30 absolute layer z-2  backdrop-blur-sm w-fit aspect-square flex p-2 items-center justify-center rounded-full"
        >
          <p className="relative text-center font-bold z-10 text-2xl lg:text-4xl text-black">
            نایلون استرچ
          </p>
        </div>
        <div
          style={{ "--speed": 0 } as CSSProperties}
          className="h-full absolute layer   border-zinc-300  right-1/2 translate-x-1/2 max-w-150 overflow-hidden aspect-square rounded-full border"
        >
          <img src="./stretch.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
const Products2 = () => {
  const { elRef, cnRef } = useScrollProgress({ start: 0, end: 2 });
  return (
    <>
      <div className="absolute max-w-300 left-1/2 -translate-x-1/2  *:border-zinc-300 grid grid-cols-7 top-[100svh] w-full h-svh z-1">
        <div className="w-full border-r layer layer-left col-span-3 h-full  overflow-hidden"></div>
        <div className="w-full border-r layer layer-middle  col-span-2 h-full overflow-hidden"></div>
        <div className="w-full layer layer-right col-span-2 h-full overflow-hidden"></div>
      </div>
      <div
        ref={cnRef}
        className="absolute grid grid-cols-7 left-1/2 -translate-x-1/2 top-[150svh] max-w-300 w-full h-svh z-1"
      >
        <div className="w-full items-end h-full layer layer-left col-span-3 overflow-hidden">
          <div
            ref={elRef}
            className="w-[50vw] items-center relative max-w-150 flex justify-center overflow-hidden aspect-square rounded-full border border-zinc-300"
          >
            <p
              dir="rtl"
              className="relative w-1/2 text-center font-bold font-boldd z-10 text-4xl text-white"
            >
              نایلون حباب‌دار
            </p>
            <img
              src="./bubble.jpg"
              ref={elRef}
              className="w-full absolute top-0 h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full layer layer-middle col-span-2 h-full overflow-hidden">
          <div className="w-[50vw] border-zinc-300 relative left-1/2 -translate-x-1/2 max-w-150 flex justify-center items-center overflow-hidden aspect-square rounded-full border">
            <p
              dir="rtl"
              className="relative w-1/2 text-center font-bold font-boldd z-10 text-4xl text-white"
            >
              تسمه
            </p>
            <img
              src="./strap.jpg"
              ref={elRef}
              className="w-full absolute top-0 h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full layer layer-right col-span-2 h-full overflow-hidden">
          <div className="w-[50vw] border-zinc-300 relative -translate-x-1/2   max-w-150 aspect-square rounded-full border"></div>
        </div>
      </div>
    </>
  );
};

{
  /* <Section>
  <div className="grid grid-cols-1 md:grid-cols-3">
    <div className="w-full aspect-square border-r">
      <div className="w-full h-full rounded-full"></div>
    </div>
    <div className="w-full aspect-square border-r">
      <div className="w-full h-full rounded-full"></div>
    </div>
    <div className="w-full aspect-square border-r">
      <div className="w-full h-full rounded-full"></div>
    </div>
  </div>
</Section>; */
}

// className="scroll-section fade-in" style={{ "--speed": 1.2 }}
