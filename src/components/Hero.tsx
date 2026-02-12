import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowDown, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-32 min-h-screen flex items-center">
        {/* Main Content Container - Asymmetric Layout */}
        <div className="w-full relative">
          {/* Top Section - Badge and Intro */}
          <motion.div
            className="mb-16 flex flex-col items-start lg:items-center lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Holographic Badge */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] blur-xl opacity-40" />
              <div
                className={`relative inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border ${
                  theme === "dark"
                    ? "bg-black/50 border-[#00B2FF]/30"
                    : "bg-white/50 border-[#7B61FF]/30"
                }`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-[#00B2FF]" : "bg-[#7B61FF]"
                  }`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span
                  className={`tracking-wide ${
                    theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                  }`}
                >
                  Available for new opportunities
                </span>
                <Sparkles
                  className={`w-4 h-4 ${
                    theme === "dark" ? "text-[#7B61FF]" : "text-[#00B2FF]"
                  }`}
                />
              </div>
            </motion.div>

            {/* Large Typography Hero */}
            <motion.div
              className="mb-6 max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="leading-[1.1] mb-6">
                <span className="block">Design Artist</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]">
                  Crafting the Future
                </span>
              </h1>
            </motion.div>

            <motion.p
              className={`max-w-2xl mb-12 lg:text-center text-lg ${
                theme === "dark" ? "text-[#B3B3B3]" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm <span className="text-foreground font-medium">Shreyas Kulkarni</span>, a
              UI/UX Design Artist with 9+ years transforming complex challenges into
              elegant, scalable digital experiences
            </motion.p>
          </motion.div>

          {/* Middle Section - Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {/* Photo Card - Spans 5 columns */}
            <motion.div
              className="lg:col-span-5 relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] p-[2px] bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "200% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    className={`w-full h-full rounded-3xl overflow-hidden ${
                      theme === "dark" ? "bg-black" : "bg-white"
                    }`}
                  >
                    <ImageWithFallback
                      src="figma:asset/e05f98d2a807d244eede0008d6c7ae8816c87d93.png"
                      alt="Shreyas Kulkarni - UI/UX Design Artist"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                {/* Floating label */}
                <motion.div
                  className={`absolute bottom-6 left-6 right-6 backdrop-blur-xl border rounded-2xl p-4 ${
                    theme === "dark"
                      ? "bg-black/80 border-[#00B2FF]/20"
                      : "bg-white/80 border-[#7B61FF]/20"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-foreground font-medium">Shreyas Kulkarni</p>
                  <p
                    className={
                      theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                    }
                  >
                    UI/UX Design Artist
                  </p>
                </motion.div>

                {/* Corner accents */}
                <div
                  className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg ${
                    theme === "dark"
                      ? "border-[#00B2FF]/50"
                      : "border-[#7B61FF]/50"
                  }`}
                />
                <div
                  className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg ${
                    theme === "dark"
                      ? "border-[#7B61FF]/50"
                      : "border-[#00B2FF]/50"
                  }`}
                />
              </div>
            </motion.div>

            {/* Stats Grid - Spans 7 columns */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              {/* Stats Cards */}
              {[
                {
                  value: "9+",
                  label: "Years Experience",
                  desc: "Leading design teams",
                  color: "from-[#00B2FF]",
                },
                {
                  value: "15+",
                  label: "Projects Shipped",
                  desc: "Across various industries",
                  color: "from-[#7B61FF]",
                },
                {
                  value: "4+",
                  label: "Design Systems",
                  desc: "Built from scratch",
                  color: "from-[#00B2FF]",
                },
                {
                  value: "30%",
                  label: "Avg. Impact",
                  desc: "User engagement boost",
                  color: "from-[#7B61FF]",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-default"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00B2FF]/20 to-[#7B61FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Card */}
                  <div
                    className={`relative h-full backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-black/40 border-white/[0.08] group-hover:border-[#00B2FF]/30"
                        : "bg-white/40 border-black/[0.08] group-hover:border-[#7B61FF]/30"
                    }`}
                  >
                    <div
                      className={`text-transparent bg-clip-text bg-gradient-to-br ${stat.color} to-${
                        theme === "dark" ? "white" : "black"
                      } mb-3`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-foreground mb-1 font-medium">{stat.label}</p>
                    <p
                      className={theme === "dark" ? "text-[#B3B3B3]" : "text-gray-600"}
                    >
                      {stat.desc}
                    </p>

                    {/* Floating dot indicator */}
                    <motion.div
                      className={`absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} to-${
                        theme === "dark" ? "white" : "black"
                      }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section - CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] hover:shadow-[0_0_50px_rgba(0,178,255,0.7)] transition-all duration-300 overflow-hidden min-w-[200px]"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] to-[#00B2FF]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className={`relative border backdrop-blur-xl min-w-[200px] group transition-all duration-300 ${
                  theme === "dark"
                    ? "border-[#00B2FF]/30 text-[#00B2FF] hover:bg-[#00B2FF]/10 hover:border-[#00B2FF] hover:shadow-[0_0_35px_rgba(0,178,255,0.4)]"
                    : "border-[#7B61FF]/30 text-[#7B61FF] hover:bg-[#7B61FF]/10 hover:border-[#7B61FF] hover:shadow-[0_0_35px_rgba(123,97,255,0.4)]"
                }`}
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">About Me</span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === "dark"
                      ? "from-[#00B2FF]/0 via-[#00B2FF]/10 to-[#00B2FF]/0"
                      : "from-[#7B61FF]/0 via-[#7B61FF]/10 to-[#7B61FF]/0"
                  }`}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className={`relative border backdrop-blur-xl min-w-[200px] group transition-all duration-300 ${
                  theme === "dark"
                    ? "border-[#7B61FF]/30 text-[#7B61FF] hover:bg-[#7B61FF]/10 hover:border-[#7B61FF] hover:shadow-[0_0_35px_rgba(123,97,255,0.4)]"
                    : "border-[#00B2FF]/30 text-[#00B2FF] hover:bg-[#00B2FF]/10 hover:border-[#00B2FF] hover:shadow-[0_0_35px_rgba(0,178,255,0.4)]"
                }`}
                onClick={() => (window.location.href = "mailto:shreyas@example.com")}
              >
                <span className="relative z-10">Contact Me</span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === "dark"
                      ? "from-[#7B61FF]/0 via-[#7B61FF]/10 to-[#7B61FF]/0"
                      : "from-[#00B2FF]/0 via-[#00B2FF]/10 to-[#00B2FF]/0"
                  }`}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating decorative elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#00B2FF] to-[#7B61FF]"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className={`flex flex-col items-center gap-2 cursor-pointer group ${
            theme === "dark" ? "text-[#B3B3B3]" : "text-gray-600"
          }`}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span
            className={`text-sm transition-colors ${
              theme === "dark" ? "group-hover:text-[#00B2FF]" : "group-hover:text-[#7B61FF]"
            }`}
          >
            Scroll to explore
          </span>
          <ArrowDown
            className={`w-4 h-4 transition-colors ${
              theme === "dark" ? "group-hover:text-[#00B2FF]" : "group-hover:text-[#7B61FF]"
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}