"use client";

interface GradualBlurProps {
  /** Which direction the blur "grows" from: "top" fades from the top down, "bottom" fades from the bottom up */
  direction?: "top" | "bottom";
  /** Total height of the blur region */
  height?: string;
  /** Maximum blur strength at the edge */
  blurStrength?: number;
  /** Number of blur layers - more = smoother transition */
  layers?: number;
  /** Additional classes (e.g., fixed/absolute placement) */
  className?: string;
}

/**
 * GradualBlur
 * Creates a high-end "sholace" or "progressive" blur effect.
 * Instead of slices, it uses overlapping layers with varying blur amounts 
 * and increasingly restrictive masks to create a perfectly smooth transition.
 */
export default function GradualBlur({
  direction = "top",
  height = "120px",
  blurStrength = 16,
  layers = 8,
  className = "",
}: GradualBlurProps) {
  const isTop = direction === "top";

  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none left-0 right-0 ${className}`}
      style={{
        height,
        // If className doesn't contain a top/bottom/inset class, we fallback
        position: className.includes("fixed") || className.includes("absolute") ? undefined : "absolute",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {Array.from({ length: layers }).map((_, i) => {
          // Calculate blur strength for this layer (exponentially for smoother feel)
          const step = i + 1;
          const blur = (step / layers) * blurStrength;
          
          // Calculate where this blur layer starts fading out
          // We use overlapping ranges to ensure no "lines" or "steps" are visible
          const fadeStart = (i / layers) * 100;
          
          // The mask gradient direction
          const maskDir = isTop ? "to bottom" : "to top";
          
          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                backdropFilter: `blur(${blur.toFixed(2)}px)`,
                WebkitBackdropFilter: `blur(${blur.toFixed(2)}px)`,
                // Each layer covers the area from the edge to its specific fade point
                // The overlapping blurs create the "progressive" look
                maskImage: `linear-gradient(${maskDir}, black 0%, transparent ${100 - fadeStart}%)`,
                WebkitMaskImage: `linear-gradient(${maskDir}, black 0%, transparent ${100 - fadeStart}%)`,
                zIndex: i,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}