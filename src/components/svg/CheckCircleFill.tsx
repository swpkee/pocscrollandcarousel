import React from "react";

interface CheckCircleFillProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function CheckCircleFill({
  className,
  width,
  height,
  color = "white",
}: CheckCircleFillProps) {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM15.0379 6.21209C14.6718 5.84597 14.0782 5.84597 13.7121 6.21209C13.7032 6.22093 13.6949 6.23029 13.6872 6.24013L9.34674 11.7709L6.72985 9.15403C6.36373 8.78791 5.77014 8.78791 5.40402 9.15403C5.0379 9.52015 5.0379 10.1137 5.40402 10.4799L8.71208 13.7879C9.0782 14.154 9.67179 14.154 10.0379 13.7879C10.0461 13.7798 10.0538 13.7712 10.061 13.7622L15.0512 7.52434C15.404 7.15727 15.3995 6.57371 15.0379 6.21209Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default CheckCircleFill;
