"use client";

import { useInView } from "react-intersection-observer";
import { LazyShow } from "./lazy-show";

import HipSign from "./svg/logo-sign";

export const Hero = () => {
  const { ref, inView } = useInView({
    rootMargin: "0% 0px 0% 0px",
    initialInView: false,
  });
  return (
    <div
      ref={ref}
      className="relative bg-zinc-300 text-gray-800 flex h-svh min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-linear-to-t from-zinc-100"
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
        <div className="flex items-center w-full md:items-start flex-col">
          {/* <HipLogo width={280} className="fill-hip -mr-14 -mb-10" /> */}
          <div className="flex relative w-full justify-center md:justify-start gap-2 items-center">
            <div className="flex w-40 relative gap-2 items-center">
              <HipSign width={100} className="fill-hip" />
              <p className="right-18 font-semibold text-xl absolute">
                {" "}
                هیپ‌
                <br />
                فــوم
              </p>
            </div>
          </div>

          {/* <h1 className="text-hipfoam text-5xl font-bold sm:text-7xl">هیپ فوم</h1> */}
          <LazyShow inView={inView}>
            <h2 className="text-hipfoam-black text-center md:text-start max-w-md md:max-w-2xl mt-12 text-xl font-medium sm:text-3xl">
              پیشرو در ارائه راهکارهای نوین بسته‌بندی پلی‌اتیلن
            </h2>
          </LazyShow>

          <LazyShow inView={inView}>
            <p className="text-sm text-center md:text-start mt-6 max-w-md md:max-w-xl">
              ما در HIP FOAM، با تخصص در تولید انواع{" "}
              <span className="">پلاستیک حبابدار </span> و{" "}
              <span className="">نایلون استرچ</span> چند لایه و عریض، متعهد به
              تضمین ایمنی کالاهای شما هستیم. محصولات ما با کیفیت بالا و قابلیت
              سفارشی‌سازی تولید می‌شوند تا دقیقاً نیازهای صنایع بزرگ، کارخانجات
              و مصارف خانگی را در زمینه‌های مختلف برطرف کنند. و چند لایه و عریض
              با قابلیت چاپ و کیفیت بالا برای مصارف صنعتی و خانگی
            </p>
          </LazyShow>
          <div className="group mr-0 md:mr-24 relative mt-24 flex cursor-pointer items-center justify-center transition-transform duration-200 hover:scale-120">
            <p className=" absolute z-20 text-2xl font-bold group-hover:text-white">
              ثبت سفارش
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
      </div>
    </div>
  );
};
