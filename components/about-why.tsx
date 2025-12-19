"use client";
import { useInView } from "react-intersection-observer";
// export function AboutWhy2() {
//   return (
//     <div className="relative">
//       <div className="sticky border-y border-hip top-0 w-full">
//         <div className="flex flex-col-reverse lg:flex-row">
//           <div className="w-full lg:w-1/2 flex  items-center justify-center">
//             <div className="max-w-md p-4 text-black flex justify-center items-start flex-col">
//               <h2 className="text-2xl font-bold">
//                 <span className="text-hip">هیپ‌فوم</span>، پیشتاز در تولید
//                 باکیفیت و نوآوری
//               </h2>
//               <div className="font-medium mt-4 leading-relaxed">
//                 <p>
//                   فعالیت ما در حوزه‌ی تولید پلی‌اتیلن، از سال ۱۴۰۱ آغاز شد. هدف
//                   ما از ابتدا، ورود به این صنعت با رویکردی متفاوت بود:
//                   <span className="font-bold text-orange-600">
//                     بهره‌گیری از آخرین نسل تکنولوژی.
//                   </span>
//                   تمامی ماشین‌آلات خط تولید ما، منطبق با به‌روزترین استانداردهای
//                   جهانی هستند. این زیرساخت پیشرفته به ما امکان می‌دهد تا
//                   محصولاتی با ویژگی‌های خاص ارائه دهیم.
//                 </p>
//                 <ol className="mt-4 space-y-2">
//                   <li>
//                     انعطاف: پاسخ سریع به نیازهای متنوع بازار با قابلیت تولید
//                     پلاستیک حبابدار در عرض‌های 10 سانتی‌متر تا 2 متر.
//                   </li>
//                   <li>
//                     قدرت: تولید انحصاری پلاستیک حبابدار 5 لایه، برای تضمین
//                     حداکثر ضربه‌گیری.
//                   </li>
//                   <li>
//                     تمایز: تنها کارخانه مجهز به تکنولوژی Recycle (بازیافت) مواد
//                     درجه دو، که علاوه بر مسئولیت‌پذیری محیط زیستی، به ما امکان
//                     می‌دهد راه‌حل‌های اقتصادی‌تری ارائه دهیم. همچنین برای
//                     پاسخگویی به نیازهای مشتریان و صنایع مختلف، سه اندازه
//                     استاندارد حباب را تولید می‌کنیم
//                   </li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//           <img
//             className="w-full lg:w-1/2 h-full object-cover"
//             src="./hip-factory.JPEG"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { CSSProperties } from "react";
import { useScrollProgress } from "../app/hooks/useScrollProgress";
import { LazyShow } from "./lazy-show";

export default function AboutWhy() {
  const { ref, inView } = useInView({ rootMargin: "100% 0px -10% 0px" });
  const { elRef, cnRef } = useScrollProgress({ start: 0, end: 3 });
  return (
    <div id="about" className="relative z-10 bg-white md:-mt-[30vh]">
      <div
        ref={cnRef}
        className="aspect-square overflow-hidden md:aspect-2/1 lg:aspect-2/1 flex items-center justify-start relative w-full "
      >
        <h2 className="md:text-4xl p-4 mr-12 text-2xl text-white z-2 absolute font-bold">
          <span className="before:absolute inline-block mb-4 before:-z-1 text-3xl md:text-5xl before:left-12 before:top-1/2 before:-translate-y-1/2 before:w-full before:aspect-square before:rounded-full before:bg-pink-900/80 text-white relative">
            هیپ‌فوم
          </span>
          <br /> پیشتاز در تولید باکیفیت و نوآوری
        </h2>
        {/* <div className="inset-0 w-full h-full absolute bg-black/30 z-1" /> */}
        <img
          ref={elRef}
          style={{ "--speed": 1 } as CSSProperties}
          className="layer object-left md:object-top relative after:absolute after:inset-0 after:bg-black/20 after:z-20 after:w-full after:h-full w-full h-full object-cover"
          src="./banner.webp"
        />
      </div>
      <div className="w-full border-t border-zinc-300 text-gray-600 relative h-auto grid grid-cols-1 md:grid-cols-2 px-4">
        <div className="w-1/2 absolute h-full top-0 left-1/2 border-l border-zinc-200" />
        <div className="flex border-transparent md:border-zinc-200 border-l justify-center relative z-10">
          <p className="max-w-xl leading-relaxed text-zinc-800 mb-8 mt-2 p-4 text-xl font-medium">
            فعالیت ما در حوزه‌ی تولید پلی‌اتیلن، از سال ۱۴۰۱ آغاز شد. هدف ما از
            ابتدا، ورود به این صنعت با رویکردی متفاوت بود:
            <span className="font-black text-orange-600">
              بهره‌گیری از آخرین نسل تکنولوژی.
            </span>{" "}
            تمامی ماشین‌آلات خط تولید ما، منطبق با به‌روزترین استانداردهای جهانی
            هستند. این زیرساخت پیشرفته به ما امکان می‌دهد تا محصولاتی با
            ویژگی‌های خاص ارائه دهیم.
          </p>
        </div>
        <div className="flex justify-center mt-[10%] md:mt-[50%] p-4 mb-4">
          <div ref={ref} className="space-y-16 mt-8 max-w-xl">
            <div className="relative pr-8">
              <div className="w-28 h-28 -top-4 right-0 absolute rounded-full border-pink-900/40 bg-pink-900/10"></div>
              <div className="flex gap-2 items-center">
                {/* <div className="w-4 h-4 rounded-full border shrink-0"></div> */}
                <h3 className="font-black">انعطاف</h3>
              </div>
              <LazyShow inView={inView}>
                پاسخ سریع به نیازهای متنوع بازار با قابلیت تولید پلاستیک حبابدار
                در عرض‌های ۱۰ سانتی‌متر تا ۲ متر.
              </LazyShow>
            </div>

            <div className="relative pr-8">
              <div className="w-28 h-28 -top-4 right-0  absolute rounded-full border-pink-900/40 bg-pink-900/10"></div>

              <div className="flex gap-2 items-center">
                {/* <div className="w-4 h-4 rounded-full border shrink-0"></div> */}
                <h3 className="font-black">قدرت</h3>
              </div>
              <LazyShow inView={inView}>
                <p className="min-h-12">
                  تولید انحصاری پلاستیک حبابدار ۵ لایه، برای تضمین حداکثر
                  ضربه‌گیری
                </p>
              </LazyShow>
            </div>

            <div className="relative pr-8">
              <div className="w-28 h-28 -top-4 right-0  absolute rounded-full border-pink-900/40 bg-pink-900/10"></div>
              <div className="flex gap-2 items-center">
                {/* <div className="w-4 h-4 rounded-full border shrink-0"></div> */}
                <h3 className="font-black">تمایز</h3>
              </div>
              <LazyShow inView={inView}>
                تنها کارخانه مجهز به تکنولوژی Recycle (بازیافت) مواد درجه دو، که
                علاوه بر مسئولیت‌پذیری محیط زیستی، به ما امکان می‌دهد راه‌حل‌های
                اقتصادی‌تری ارائه دهیم. همچنین برای پاسخگویی به نیازهای مشتریان
                و صنایع مختلف، سه اندازه استاندارد حباب را تولید می‌کنیم
              </LazyShow>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-svh"></div> */}
    </div>
  );
}
