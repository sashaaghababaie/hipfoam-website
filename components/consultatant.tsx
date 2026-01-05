"use client";

// import { CSSProperties, useEffect, useRef, useState } from "react";
// import { useScrollProgress } from "../hooks/useScrollProgress";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import Button from "./button";
import { FiArrowUpLeft } from "react-icons/fi";
import { Modal } from "./contact-modal";

export default function Consultant() {
  const [showModal, setShowModal] = useState(false);

  const { ref, inView } = useInView({
    rootMargin: "100% 0px -30% 0px",
    triggerOnce: true,
  });
  //   const { cnRef, elRef } = useScrollProgress({ start: 0, end: 1 });
  const bottomPathRef = useRef<SVGPathElement | null>(null);
  const controllerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const controller = controllerRef.current;

      // const topPath2 = topPath2Ref.current;
      // const topPath3 = topPath3Ref.current;

      const bottomPath = bottomPathRef.current;

      if (!controller || !bottomPath) {
        return;
      }

      const windowHeight = window.innerHeight;

      const factor = 800 / window.innerWidth;
      const rect = controller.getBoundingClientRect();

      const progress = 1 - rect.bottom / windowHeight;
      if (progress < -0.5) return;

      const curve = (progress * 70) / factor;

      const width = 1000;
      const height = 200;

      // const topD2 = `
      //   M 0,${0}
      //   Q ${width / 2},${0 + curve * 1.2}
      //     ${width},${0}
      //   L ${width},0
      //   L 0,0
      //   Z
      // `;

      // const topD3 = `
      //   M 0,${0}
      //   Q ${width / 2},${0 + curve * 1.5}
      //     ${width},${0}
      //   L ${width},0
      //   L 0,0
      //   Z
      // `;

      const bottomD = `
        M 0,${height}
        Q ${width / 2},${height - curve}
          ${width},${height}
        L ${width},${height}
        L 0,${height}
        Z
      `;

      // topPath2.setAttribute("d", topD2);
      // topPath3.setAttribute("d", topD3);
      bottomPath.setAttribute("d", bottomD);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <div ref={ref} className="relative h-[150vh]">
      <div
        ref={controllerRef}
        className="absolute top-[50vh] h-[50vh] w-full"
      ></div>
      <div
        // ref={cnRef}
        className="bg-hip sticky top-0 h-svh overflow-hidden p-4"
      >
        <svg
          viewBox="0 0 1000 200"
          className="absolute -bottom-px left-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path ref={bottomPathRef} className="stroke-white fill-white" />
        </svg>

        <div
          //   ref={elRef}
          className={`${inView ? "flex" : "hidden"} relative flex h-full items-center justify-center`}
        >
          {/* === Circle 1 === */}
          <div
            // ref={leftCircleRef}
            className="absolute top-1/2 left-0 aspect-square w-[15%] -translate-y-1/2 transform-gpu"
            style={
              {
                "--initial": 3,
                "--float-radius": "2px",
                "--float-duration": "5s",
              } as React.CSSProperties
            }
          >
            <div
              //   style={{ "--speed": 10 } as CSSProperties}
              className="scroll-animate scroll-zoom-2 orbit-wrapper"
            >
              <div className="orbit-item ">
                <div className="scale-up-and-orbit aspect-square w-[70%] transform-gpu rounded-full bg-zinc-100/50 blur-xs" />
              </div>
            </div>
          </div>

          {/* === Circle 2 === */}
          <div
            // ref={centerCircleRef}
            className="absolute top-1/2 left-[13%] aspect-square w-[50%] -translate-y-1/2 transform-gpu"
            style={
              {
                "--initial": 1.72,
                "--float-radius": "1vw",
                "--float-duration": "6s",
              } as React.CSSProperties
            }
          >
            <div className="orbit-wrapper">
              <div className="orbit-item">
                <div className="scale-up-and-orbit aspect-square w-[70%] transform-gpu rounded-full bg-zinc-100/50 blur-sm" />
              </div>
            </div>
          </div>

          {/* === Circle 3 === */}
          <div
            // ref={rightCircleRef}
            className="absolute top-1/2 left-[71%] aspect-square w-[29%] -translate-y-1/2 transform-gpu"
            style={
              {
                "--initial": 1.72,
                "--float-radius": "3px",
                "--float-duration": "4s",
                "--float-direction": "reverse",
              } as React.CSSProperties
            }
          >
            <div className="orbit-wrapper">
              <div className="orbit-item">
                <div className="scale-up-and-orbit aspect-square w-[60%] transform-gpu rounded-full bg-zinc-100/50 blur-sm" />
              </div>
            </div>
          </div>

          {/* === Text === */}
          <div className="z-10">
            <div className="flex flex-col justify-center items-center">
              <div className="py-24 max-w-sm relative z-2">
                <h2 className="text-orange-600 rounded-full py-2 bg-white font-semibold text-center text-2xl">
                  برای انتخاب راهکار مناسب
                </h2>
                <h2 className=" text-white mt-8 font-black text-center text-4xl">
                  مشاوره تخصصی رایگان بگیرید
                </h2>
              </div>
              <div className="grow relative z-2 items-center justify-center flex flex-col">
                <Button
                  onPointerDown={() => setShowModal(true)}
                  className="bg-orange-600 transition-all duration-300 hover:scale-110 cursor-pointer hover:bg-orange-500 text-white p-4 font-black text-xl"
                >
                  دریافت مشاوره <FiArrowUpLeft className="inline text-2xl" />
                </Button>
              </div>
            </div>
            {/* <HipLogo className="fill-hipfoam h-48 -translate-x-16" /> */}
            {/* <h1 className="text-hipfoam text-5xl font-bold">Hip Foam</h1> */}
            {/* <p className="max-w-3xl text-2xl font-semibold text-orange-600">
              High-performance polyethylene and polypropylene packaging
              solutions
            </p> */}
          </div>
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
