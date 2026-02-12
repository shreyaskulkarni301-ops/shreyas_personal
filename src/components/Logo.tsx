import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function Logo({ className = "" }: { className?: string }) {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Custom SVG Logo */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Background hexagon */}
          <motion.path
            d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="rgba(0, 178, 255, 0.05)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Letter S - stylized */}
          <motion.path
            d="M18 16C18 16 20 14 24 14C28 14 30 16 30 18.5C30 21 28 22 24 22C20 22 18 23 18 25.5C18 28 20 30 24 30C28 30 30 28 30 28"
            stroke="url(#gradient2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          />
          
          {/* Letter K - stylized diagonal */}
          <motion.path
            d="M32 16L38 24M38 16L32 24"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Inner geometric accent */}
          <motion.circle
            cx="24"
            cy="24"
            r="2"
            fill="url(#gradient4)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="6" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B2FF" />
              <stop offset="1" stopColor="#7B61FF" />
            </linearGradient>
            <linearGradient id="gradient2" x1="18" y1="14" x2="30" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B2FF" />
              <stop offset="1" stopColor="#7B61FF" />
            </linearGradient>
            <linearGradient id="gradient3" x1="32" y1="16" x2="38" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B2FF" />
              <stop offset="1" stopColor="#7B61FF" />
            </linearGradient>
            <linearGradient id="gradient4" x1="22" y1="22" x2="26" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00B2FF" />
              <stop offset="1" stopColor="#7B61FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] blur-xl opacity-20 rounded-full" />
      </motion.div>

      {/* Name */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-foreground tracking-wide leading-none font-medium">
          Shreyas Kulkarni
        </span>
        <span
          className={`tracking-wide leading-none mt-0.5 ${
            theme === "dark" ? "text-[#B3B3B3]" : "text-gray-600"
          }`}
        >
          UI/UX Design Artist
        </span>
      </motion.div>
    </div>
  );
}