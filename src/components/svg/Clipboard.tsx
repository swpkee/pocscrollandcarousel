import React from "react";

interface ClipboardProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
}

function Clipboard({
  className,
  width = "20",
  height = "20",
  color = "white",
}: ClipboardProps) {
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
          d="M1.66699 5.00033H5.00033M1.66699 8.33366H5.00033M1.66699 11.667H5.00033M1.66699 15.0003H5.00033M7.91699 6.66699H12.0837M7.91699 10.0003H13.3337M7.91699 13.3337H11.667M5.00033 1.66699H15.0003C15.9208 1.66699 16.667 2.41318 16.667 3.33366V16.667C16.667 17.5875 15.9208 18.3337 15.0003 18.3337H5.00033C4.07985 18.3337 3.33366 17.5875 3.33366 16.667V3.33366C3.33366 2.41318 4.07985 1.66699 5.00033 1.66699Z"
          stroke="#ABAFB4"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default Clipboard;
