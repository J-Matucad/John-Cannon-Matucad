import React from "react";

const GridBackground = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      <defs>
        {/* Smaller grid pattern */}
        <pattern
          id="grid"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 5 0 L 0 0 0 5"
            fill="none"
            stroke="#373737"
            strokeWidth="0.1"
          />
        </pattern>
        {/* Gradient mask for fading effect */}
        <radialGradient id="fade" cx="50%" cy="50%" r="70%">
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="fadeMask">
          <rect width="100%" height="100%" fill="url(#fade)" />
        </mask>
      </defs>

      {/* Applying grid pattern with fade mask */}
      <rect
        width="100%"
        height="100%"
        fill="url(#grid)"
        mask="url(#fadeMask)"
      />
    </svg>
  );
};

export default GridBackground;

