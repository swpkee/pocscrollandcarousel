interface ArrowCarouselProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
}

function ArrowCarousel({
  className,
  width,
  height,
  color,
}: ArrowCarouselProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        <path
          d="M1.5 32L16.5 17L1.5 2"
          stroke={color}
          strokeWidth="2.45796"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ArrowCarousel;
