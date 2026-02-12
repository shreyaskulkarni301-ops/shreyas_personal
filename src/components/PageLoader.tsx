import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Brain, Code2, Sparkles } from "lucide-react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={`fixed inset-0 z-[100] flex items-center justify-center ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className={`absolute -top-64 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] ${
                theme === "dark" ? "bg-[#00B2FF]/20" : "bg-[#7B61FF]/15"
              }`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={`absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] ${
                theme === "dark" ? "bg-[#7B61FF]/20" : "bg-[#00B2FF]/15"
              }`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          {/* Loader content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo/Icon animation */}
            <div className="relative">
              {/* Rotating circles */}
              <motion.div
                className={`absolute inset-0 w-32 h-32 rounded-full border-4 ${
                  theme === "dark" ? "border-[#00B2FF]/30" : "border-[#7B61FF]/30"
                } border-t-transparent`}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className={`absolute inset-2 w-28 h-28 rounded-full border-4 ${
                  theme === "dark" ? "border-[#7B61FF]/30" : "border-[#00B2FF]/30"
                } border-b-transparent`}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Center icon */}
              <motion.div
                className={`w-32 h-32 rounded-full flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#00B2FF]/10 to-[#7B61FF]/10"
                    : "bg-gradient-to-br from-[#7B61FF]/10 to-[#00B2FF]/10"
                } backdrop-blur-sm`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Brain
                  className={`w-12 h-12 ${
                    theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                  }`}
                />
              </motion.div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-[#00B2FF]" : "bg-[#7B61FF]"
                  }`}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos((i * Math.PI * 2) / 6) * 80],
                    y: [0, Math.sin((i * Math.PI * 2) / 6) * 80],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* Loading text */}
            <div className="text-center">
              <motion.h2
                className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Shreyas Kulkarni
              </motion.h2>

              <div className="flex items-center gap-2 justify-center">
                {[
                  { icon: Code2, delay: 0 },
                  { icon: Sparkles, delay: 0.2 },
                  { icon: Brain, delay: 0.4 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: item.delay,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 0.6,
                    }}
                  >
                    <item.icon
                      className={`w-4 h-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Progress bar */}
              <div
                className={`mt-8 w-64 h-1 rounded-full overflow-hidden ${
                  theme === "dark" ? "bg-white/10" : "bg-black/10"
                }`}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] bg-[length:200%_100%]"
                  initial={{ x: "-100%" }}
                  animate={{
                    x: "100%",
                    backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                  }}
                  transition={{
                    x: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    backgroundPosition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
