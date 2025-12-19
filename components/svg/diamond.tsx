import * as React from "react";
const Diamond = (props: React.ComponentProps<"svg">) => (
  <svg
    id="Layer_8"
    data-name="Layer 8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1,.cls-2{fill:none;stroke:#fff;stroke-linecap:round;stroke-width:4px}.cls-1{stroke-linejoin:bevel}.cls-2{stroke-miterlimit:10}"
        }
      </style>
    </defs>
    <path
      className="cls-2"
      d="m279.75 365.71 38.46-49.49c.63-.81.69-1.94.15-2.81l-14.21-22.9a2.48 2.48 0 0 0-2.09-1.17h-48.51c-.85 0-1.64.44-2.09 1.17l-14.21 22.9c-.54.88-.48 2 .15 2.81l38.46 49.49c.99 1.27 2.91 1.27 3.89 0Zm-43.84-51.33H319"
    />
    <path className="cls-1" d="m277.81 289.12-14.48 25.08h28.95z" />
    <path className="cls-1" d="m277.81 366.81 14.47-52.64h-28.95z" />
    <path
      className="cls-2"
      d="M354.07 230.07h-17m8.5 8.49v-16.99M191.41 400.72h-19.14m9.57 9.57v-19.14"
    />
  </svg>
);
export default Diamond;
