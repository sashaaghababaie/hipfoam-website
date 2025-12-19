import { ReactNode } from "react";

export const LazyShow = ({
  children,
  inView,
}: {
  children: ReactNode;
  inView: boolean;
}) => {
  //   const { ref, inView } = useInView({ rootMargin: "100% 0px -10% 0px" });
  return (
    <div className="overflow-hidden">
      <div
        className={`${inView ? "translate-y-0" : "translate-y-full"} transition-transform duration-700`}
      >
        {children}
      </div>
    </div>
  );
};
