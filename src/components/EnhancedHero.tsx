import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowDown, Sparkles, Code2, Zap, Brain } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export function EnhancedHero() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor spotlight effect */}
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: "600px",
          height: "600px",
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(0, 178, 255, 0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(123, 97, 255, 0.05) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 py-32 min-h-screen flex items-center"
        style={{ y }}
      >
        <motion.div
          className="w-full relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge with AI indicator */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex justify-center lg:justify-start"
          >
            <motion.div
              className={`relative group cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Holographic glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              <div
                className={`relative inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border ${
                  theme === "dark"
                    ? "bg-black/60 border-[#00B2FF]/40"
                    : "bg-white/60 border-[#7B61FF]/40"
                } shadow-lg`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-[#00B2FF]" : "bg-[#7B61FF]"
                  }`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span
                  className={`font-medium tracking-wide ${
                    theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                  }`}
                >
                  Available for Opportunities
                </span>
                <Brain className="w-4 h-4 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-6">
                {/* Glitch text effect on hover */}
                <motion.h1
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
                >
                  <span className="block text-foreground mb-2">
                    UI/UX Design Artist
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] bg-[length:200%_100%] animate-[gradient_4s_ease_infinite]">
                    Crafting Digital
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#00B2FF] to-[#7B61FF] bg-[length:200%_100%] animate-[gradient_4s_ease_infinite]">
                    Experiences
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className={`text-lg max-w-xl ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  I'm{" "}
                  <span className="text-foreground font-semibold">
                    Shreyas Kulkarni
                  </span>
                  , a UI/UX Design Artist with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#7B61FF]">
                    9+ years
                  </span>{" "}
                  of experience transforming complex challenges into elegant,
                  scalable, and AI-driven digital solutions.
                </motion.p>
              </motion.div>

              {/* Skill Tags */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Brain, text: "AI-Driven Design" },
                  { icon: Code2, text: "Design Systems" },
                  { icon: Zap, text: "Performance First" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm ${
                      theme === "dark"
                        ? "bg-black/40 border-white/10 hover:border-[#00B2FF]/50"
                        : "bg-white/40 border-black/10 hover:border-[#7B61FF]/50"
                    } transition-all duration-300 cursor-default`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <skill.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{skill.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="relative group bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] hover:shadow-[0_0_40px_rgba(0,178,255,0.6)] transition-all duration-300 overflow-hidden"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Work
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowDown className="ml-2 w-4 h-4" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] to-[#00B2FF]"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className={`relative border-2 backdrop-blur-xl group overflow-hidden ${
                      theme === "dark"
                        ? "border-[#00B2FF]/40 text-[#00B2FF] hover:bg-[#00B2FF]/10 hover:shadow-[0_0_30px_rgba(0,178,255,0.3)]"
                        : "border-[#7B61FF]/40 text-[#7B61FF] hover:bg-[#7B61FF]/10 hover:shadow-[0_0_30px_rgba(123,97,255,0.3)]"
                    } transition-all duration-300`}
                    onClick={() =>
                      (window.location.href = "mailto:shreyas@example.com")
                    }
                  >
                    <span className="relative z-10">Contact Me</span>
                    <motion.div
                      className={`absolute inset-0 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-[#00B2FF]/0 via-[#00B2FF]/20 to-[#00B2FF]/0"
                          : "bg-gradient-to-r from-[#7B61FF]/0 via-[#7B61FF]/20 to-[#7B61FF]/0"
                      }`}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Profile Image with 3D effect */}
            <motion.div
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* 3D container */}
              <div className="relative perspective-1000">
                {/* Holographic border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] p-[3px] bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
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
                      src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2OTI5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Shreyas Kulkarni - UI/UX Design Artist"
                      className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                {/* Floating info card */}
                <motion.div
                  className={`absolute bottom-6 left-6 right-6 backdrop-blur-xl border rounded-2xl p-5 ${
                    theme === "dark"
                      ? "bg-black/80 border-[#00B2FF]/30"
                      : "bg-white/80 border-[#7B61FF]/30"
                  } shadow-2xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground font-semibold text-lg">
                        Shreyas Kulkarni
                      </p>
                      <p
                        className={
                          theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                        }
                      >
                        Senior UI/UX Design Artist
                      </p>
                    </div>
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        theme === "dark"
                          ? "bg-[#00B2FF]/10 border border-[#00B2FF]/30"
                          : "bg-[#7B61FF]/10 border border-[#7B61FF]/30"
                      }`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles
                        className={`w-6 h-6 ${
                          theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                        }`}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Corner accents */}
                {[
                  { top: "top-4", right: "right-4", rotate: "0deg" },
                  { bottom: "bottom-4", left: "left-4", rotate: "180deg" },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos.top || ""} ${pos.right || ""} ${
                      pos.bottom || ""
                    } ${pos.left || ""} w-10 h-10`}
                    style={{ rotate: pos.rotate }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                  >
                    <div
                      className={`w-full h-full border-t-2 border-r-2 ${
                        theme === "dark"
                          ? "border-[#00B2FF]/60"
                          : "border-[#7B61FF]/60"
                      } rounded-tr-lg`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "9+", label: "Years", sublabel: "Experience" },
              { value: "15+", label: "Projects", sublabel: "Delivered" },
              { value: "4+", label: "Systems", sublabel: "Built" },
              { value: "30%", label: "Avg Impact", sublabel: "Engagement" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`relative group cursor-default rounded-2xl p-6 border backdrop-blur-sm ${
                  theme === "dark"
                    ? "bg-black/40 border-white/10 hover:border-[#00B2FF]/50"
                    : "bg-white/40 border-black/10 hover:border-[#7B61FF]/50"
                } transition-all duration-300`}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                <div className="relative">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00B2FF] to-[#7B61FF] mb-2">
                    {stat.value}
                  </div>
                  <p className="text-foreground font-semibold">{stat.label}</p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.sublabel}
                  </p>

                  {/* Animated dot */}
                  <motion.div
                    className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                      theme === "dark" ? "bg-[#00B2FF]" : "bg-[#7B61FF]"
                    }`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className={`flex flex-col items-center gap-3 cursor-pointer group ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-sm font-medium group-hover:text-[#00B2FF] transition-colors">
            Scroll to Explore
          </span>
          <div
            className={`w-6 h-10 rounded-full border-2 ${
              theme === "dark"
                ? "border-gray-400 group-hover:border-[#00B2FF]"
                : "border-gray-600 group-hover:border-[#7B61FF]"
            } flex items-start justify-center p-2 transition-colors`}
          >
            <motion.div
              className={`w-1.5 h-1.5 rounded-full ${
                theme === "dark" ? "bg-gray-400" : "bg-gray-600"
              }`}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}