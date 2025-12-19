import * as React from "react";
const CustomizeBubbleSVG = (props: React.ComponentProps<"svg">) => (
  <svg
    id="Layer_8"
    data-name="Layer 8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    {...props}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1={135.96}
        y1={424.27}
        x2={405.35}
        y2={154.88}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#842e5a" />
        <stop offset={0.64} stopColor="#c43a21" />
        <stop offset={1} stopColor="#e44107" />
      </linearGradient>
      <style>
        {
          ".cls-1{fill:#fff}.cls-3,.cls-4{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:4px}.cls-4{stroke-linecap:round}"
        }
      </style>
    </defs>
    <rect
      className="cls-3"
      x={177.85}
      y={218.1}
      width={79.15}
      height={195.23}
      rx={39.57}
      ry={39.57}
    />
    <path
      className="cls-3"
      d="M177.85 272.63v101.13c0 21.86 17.72 39.57 39.57 39.57h121.53a7.75 7.75 0 0 0 7.75-7.75V280.37a7.75 7.75 0 0 0-7.75-7.75H257"
    />
    <rect
      className="cls-3"
      x={177.85}
      y={334.19}
      width={79.15}
      height={79.15}
      rx={39.57}
      ry={39.57}
    />
    <rect
      className="cls-3"
      x={194.56}
      y={350.9}
      width={45.73}
      height={45.73}
      rx={22.86}
      ry={22.86}
    />
    <path className="cls-4" d="M287.56 217.67V339.9m25.94-122.23V339.9" />
    <circle className="cls-1" cx={313.5} cy={247.57} r={10.55} />
    <circle className="cls-1" cx={287.56} cy={295.05} r={10.55} />
    <path className="cls-4" d="M167.3 264.49v40.02m0 10.11v14.95" />
  </svg>
);
export default CustomizeBubbleSVG;
