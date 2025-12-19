import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <div className="w-full relative">
      <div className="absolute left-0 top-0 right-0 border-t-[0.5px]"></div>
      <div className="w-full border-x-[0.5px] px-2 md:px-5 mx-auto max-w-300">
        {children}
      </div>
    </div>
  );
}
