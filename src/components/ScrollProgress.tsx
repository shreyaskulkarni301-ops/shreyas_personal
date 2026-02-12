import { motion, useScroll, useSpring } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { theme } = useTheme();

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left ${
        theme === "dark"
          ? "bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF]"
          : "bg-gradient-to-r from-[#7B61FF] via-[#00B2FF] to-[#7B61FF]"
      }`}
      style={{ scaleX }}
    />
  );
}
