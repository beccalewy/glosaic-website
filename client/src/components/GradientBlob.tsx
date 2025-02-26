import { motion } from "framer-motion";

interface GradientBlobProps {
  position: "top-left" | "bottom-right";
  className?: string;
}

export function GradientBlob({ position, className = "" }: GradientBlobProps) {
  const isTopLeft = position === "top-left";
  
  return (
    <motion.div
      className={`absolute ${isTopLeft ? "-top-20 -left-20" : "-bottom-20 -right-20"} w-96 h-96 pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`gradient-${position}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: "#0038FF" }} />
            <stop offset="100%" style={{ stopColor: "#FF00C7" }} />
          </radialGradient>
        </defs>
        <path
          fill={`url(#gradient-${position})`}
          d="M45.3,-59.4C58.9,-52.9,70.1,-39.4,75.3,-23.5C80.5,-7.6,79.7,10.6,72.8,25.8C65.9,41,52.9,53.2,38.1,60.6C23.3,68,6.7,70.6,-8.9,67.9C-24.5,65.2,-39,57.2,-51.6,45.7C-64.2,34.2,-74.8,19.2,-77.2,2.4C-79.6,-14.4,-73.8,-33,-61.8,-45.1C-49.8,-57.2,-31.6,-62.7,-14.9,-63.1C1.8,-63.5,31.7,-65.9,45.3,-59.4Z"
          transform="translate(100 100)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </motion.div>
  );
}
