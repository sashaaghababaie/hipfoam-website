import { ComponentProps } from "react";

export default function Button({
  children,
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={`min-w-32 cursor-pointer overflow-hidden relative rounded-full group aspect-square ${className}`}
      {...props}
    >
      <span className="absolute scale-0 top-0 left-0 w-full h-full bg-red-900 rounded-full"></span>
      {children}
    </button>
  );
}
