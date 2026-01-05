"use client";

import { CSSProperties } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const Products = () => {
  return (
    <div className="scroll-m-8" id="products">
      <ProductsDesktop />
      <ProductsMobile />
    </div>
  );
};

const ProductsDesktop = () => {
  const { elRef, cnRef } = useScrollProgress({ start: 0, end: 1 });

  return (
    <div
      ref={cnRef}
      className="hidden overflow-hidden md:flex bg-zinc-100 relative justify-center w-full h-[150svh]"
    >
      <div className="absolute inset-0 bg-dots-diagonal" />
      {/* <div className="absolute bg-zinc-100 inset-0" /> */}
      <div className="flex w-full  justify-center max-w-300">
        <div
          style={{ "--speed": 4 } as CSSProperties}
          className="flex layer flex-col gap-y-8 w-1/3 items-center h-full justify-center"
        >
          <h2 className="text-black font-bold text-3xl">
            تولیدات <span className="text-hip">هیپ‌فوم</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-hip rounded-full w-3 h-3"></div>
              <p>نایلون حباب‌دار</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-hip rounded-full w-3 h-3"></div>
              <p>نایلون استرچ</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-hip rounded-full w-3 h-3"></div>
              <p>نایلون شرینک</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-hip rounded-full w-3 h-3"></div>
              <p>تسمه PP</p>
            </div>
          </div>
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
              style={{ "--speed": 2.4 } as CSSProperties}
              className="w-full flex items-center layer border-l col-span-2 h-full"
            >
              <div className="bg-white/30 backdrop-blur-sm w-auto aspect-square flex p-2 items-center justify-center rounded-full">
                <p className="relative text-center font-bold z-10 text-2xl lg:text-3xl text-black">
                  تسمه PP
                </p>
              </div>
            </div>
            <div
              style={{ "--speed": 1.5 } as CSSProperties}
              className="w-full flex layer items-center col-span-2 h-full"
            >
              <div className="bg-white/30 backdrop-blur-sm w-auto aspect-square flex p-2 items-center justify-center rounded-full">
                <p className="relative  text-center font-bold z-10 text-2xl lg:text-3xl text-black">
                  تایلون استرچ
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 max-w-300 w-full h-full z-1">
            <div className="w-full h-full flex items-center col-span-3 overflow-hidden">
              <div
                style={{ "--speed": 4.2 } as CSSProperties}
                className="w-full layer layer-left "
              >
                <div
                  ref={elRef}
                  className="w-[120%] relative max-w-150 overflow-hidden aspect-square rounded-full border border-zinc-300"
                >
                  <img
                    src="/bubble.webp"
                    className="w-full absolute top-0 h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full flex items-center col-span-2 overflow-hidden">
              <div
                style={{ "--speed": 2 } as CSSProperties}
                className="w-full layer layer-left"
              >
                <div className="w-[170%] border-zinc-300 relative right-1/2 translate-x-1/2 max-w-150 overflow-hidden aspect-square rounded-full border">
                  <img
                    src="/strap.jpg"
                    className="w-full absolute top-0 h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full flex items-center col-span-2 overflow-hidden">
              <div
                style={{ "--speed": 3 } as CSSProperties}
                className="w-full layer layer-left"
              >
                <div className="w-[170%] border-zinc-300 relative translate-x-1/2 max-w-150 aspect-square rounded-full overflow-hidden border">
                  <img
                    src="/stretch.jpg"
                    className="w-full absolute top-0 h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsMobile = () => {
  const { elRef, cnRef } = useScrollProgress({ start: 0, end: 1.5 });

  return (
    <div
      ref={cnRef}
      className="flex overflow-hidden border-t bg-zinc-100 py-8 border-zinc-300 justify-around md:hidden relative w-full flex-col h-[150svh]"
    >
      <div className="absolute bg-amber-100 inset-0 bg-dots-diagonal" />
      <h2
        // style={{ "--speed": 1 } as CSSProperties}
        className="w-full text-black text-center layer font-bold mb-12 text-4xl"
      >
        محصولات <span className="text-hip">هیپ‌فوم</span>
      </h2>
      {/* 1 */}

      <div ref={elRef} className="p-4 relative h-1/4">
        <div
          style={{ "--speed": 3 } as CSSProperties}
          className="bg-white/30 min-w-44 left-1/3 absolute top-0 layer mt-24 z-2  backdrop-blur-sm w-fit aspect-square flex p-2 items-center justify-center rounded-full"
        >
          <p className="relative text-center font-bold z-10 text-2xl lg:text-4xl text-black">
            نایلون حباب‌دار
          </p>
        </div>
        <div
          style={{ "--speed": 6 } as CSSProperties}
          className="bg-hip w-32 left-1/3 absolute top-32 layer mt-24 z-1 backdrop-blur-sm  aspect-square flex p-2 items-center justify-center rounded-full"
        ></div>
        <div
          style={{ "--speed": 0 } as CSSProperties}
          className="h-full sm:h-auto w-auto sm:w-1/2 max-w-85 absolute top-0 layer -left-12  border-zinc-300 md:max-w-150 overflow-hidden aspect-square rounded-full border"
        >
          <img src="/bubble.webp" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* 2 */}
      <div className="p-4 relative h-1/4">
        <div
          style={{ "--speed": 2 } as CSSProperties}
          className="bg-white/30 min-w-44 left-1/3 absolute top-0 layer z-2 mt-44 backdrop-blur-sm w-fit aspect-square flex p-2 items-center justify-center rounded-full"
        >
          <p className="relative text-center font-bold z-10 text-2xl lg:text-4xl text-black">
            تسمه PP
          </p>
        </div>{" "}
        <div
          style={{ "--speed": 2 } as CSSProperties}
          className="bg-orange-600 w-32 left-3/7 absolute top-32 layer mt-24 z-1 backdrop-blur-sm  aspect-square flex p-2 items-center justify-center rounded-full"
        ></div>
        <div
          style={{ "--speed": 0 } as CSSProperties}
          className="h-full sm:h-auto w-auto sm:w-1/2 max-w-85 absolute top-0 layer -left-12  border-zinc-300 md:max-w-150 overflow-hidden aspect-square rounded-full border"
        >
          <img src="/strap.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* 3 */}
      <div className="p-8 relative h-1/4 mb-12">
        <div
          style={{ "--speed": 2 } as CSSProperties}
          className="bg-white/30 absolute flex-col min-w-44 left-1/3 layer z-2 mt-44 backdrop-blur-sm w-fit aspect-square flex p-2 items-center justify-center rounded-full"
        >
          <p className="relative text-center font-bold z-10 text-2xl lg:text-4xl text-black">
            نایلون استرچ
          </p>
          <p className="relative text-center font-bold z-10 text-2xl lg:text-4xl text-black">
            نایلون شرینک
          </p>
        </div>
        <div
          style={{ "--speed": 1 } as CSSProperties}
          className="bg-hip w-32 left-3/7 absolute top-32 layer mt-24 z-1 backdrop-blur-sm  aspect-square flex p-2 items-center justify-center rounded-full"
        ></div>
        <div
          style={{ "--speed": 0 } as CSSProperties}
          className="h-full sm:h-auto w-auto sm:w-1/2 max-w-85 absolute top-0 layer -left-12  border-zinc-300 md:max-w-150 overflow-hidden aspect-square rounded-full border"
        >
          <img src="/stretch.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

// const Products2 = () => {
//   const { elRef, cnRef } = useScrollProgress({ start: 0, end: 2 });
//   return (
//     <>
//       <div className="absolute max-w-300 left-1/2 -translate-x-1/2  *:border-zinc-300 grid grid-cols-7 top-[100svh] w-full h-svh z-1">
//         <div className="w-full border-r layer layer-left col-span-3 h-full  overflow-hidden"></div>
//         <div className="w-full border-r layer layer-middle  col-span-2 h-full overflow-hidden"></div>
//         <div className="w-full layer layer-right col-span-2 h-full overflow-hidden"></div>
//       </div>
//       <div
//         ref={cnRef}
//         className="absolute grid grid-cols-7 left-1/2 -translate-x-1/2 top-[150svh] max-w-300 w-full h-svh z-1"
//       >
//         <div className="w-full items-end h-full layer layer-left col-span-3 overflow-hidden">
//           <div
//             ref={elRef}
//             className="w-[50vw] items-center relative max-w-150 flex justify-center overflow-hidden aspect-square rounded-full border border-zinc-300"
//           >
//             <p
//               dir="rtl"
//               className="relative w-1/2 text-center font-bold font-boldd z-10 text-4xl text-white"
//             >
//               نایلون حباب‌دار
//             </p>
//             <img
//               src="./bubble.jpg"
//               ref={elRef}
//               className="w-full absolute top-0 h-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full layer layer-middle col-span-2 h-full overflow-hidden">
//           <div className="w-[50vw] border-zinc-300 relative left-1/2 -translate-x-1/2 max-w-150 flex justify-center items-center overflow-hidden aspect-square rounded-full border">
//             <p
//               dir="rtl"
//               className="relative w-1/2 text-center font-bold font-boldd z-10 text-4xl text-white"
//             >
//               تسمه
//             </p>
//             <img
//               src="./strap.jpg"
//               ref={elRef}
//               className="w-full absolute top-0 h-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full layer layer-right col-span-2 h-full overflow-hidden">
//           <div className="w-[50vw] border-zinc-300 relative -translate-x-1/2   max-w-150 aspect-square rounded-full border"></div>
//         </div>
//       </div>
//     </>
//   );
// };

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
