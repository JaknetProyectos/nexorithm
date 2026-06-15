interface SectionWaveProps {
  position?: "top" | "bottom";
  fill?: string;
  className?: string;
}

/**
 * Smooth two-layer wave divider used to transition between the dark
 * sections and the aqua gradient sections, matching the Divi-style waves.
 */
export default function SectionWave({
  position = "top",
  fill = "#252937",
  className = "",
}: SectionWaveProps) {
  return (
    <div
      className={`pointer-events-none absolute left-0 z-10 w-full overflow-hidden leading-[0] ${
        position === "top" ? "top-0" : "bottom-0"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="h-[55px] w-full md:h-[95px]"
        style={position === "bottom" ? { transform: "scaleY(-1)" } : undefined}
      >
        {/* back layer for depth */}
        <path
          d="M0,0 L1440,0 L1440,60 C1180,34 980,92 720,78 C470,64 280,104 0,80 Z"
          fill={fill}
          opacity={0.45}
        />
        {/* front layer */}
        <path
          d="M0,0 L1440,0 L1440,46 C1180,20 980,74 720,62 C460,50 280,94 0,66 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
