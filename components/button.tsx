import { ReactNode } from "react";

export default function Button({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <button
      className={`min-w-32 overflow-hidden relative rounded-full group aspect-square ${className}`}
    >
      <span className="absolute scale-0 top-0 left-0 w-full h-full bg-red-900 rounded-full"></span>
      {children}
    </button>
  );
}
