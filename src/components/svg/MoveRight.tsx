import React from "react";

interface MoveRightProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
}

function MoveRight({
  className,
  width = "21",
  height = "20",
  color = "white",
}: MoveRightProps) {
  return (
    <div className={`${className}`} style={{ width, height }}>
      <svg
        className="svg-btn"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.307 10H3.97363"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1406 14.1673C13.1406 14.1673 17.3073 11.0987 17.3073 10.0007C17.3073 8.90265 13.1406 5.83398 13.1406 5.83398"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default MoveRight;
