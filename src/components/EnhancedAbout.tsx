import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import {
  Lightbulb,
  Users,
  Target,
  Rocket,
  Code2,
  Palette,
  Brain,
  Zap,
} from "lucide-react";

const skills = [
  { icon: Palette, name: "UI/UX Design", level: 95 },
  { icon: Code2, name: "Design Systems", level: 92 },
  { icon: Brain, name: "User Research", level: 88 },
  { icon: Zap, name: "Prototyping", level: 90 },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pushing boundaries with AI-driven design solutions",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Every decision backed by research and data",
  },
  {
    icon: Target,
    title: "Impact Focused",
    description: "Measurable results that drive business growth",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Building scalable systems for tomorrow",
  },
];

export function EnhancedAbout() {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className={`px-4 py-2 rounded-full border text-sm font-medium ${
                theme === "dark"
                  ? "bg-[#00B2FF]/10 border-[#00B2FF]/30 text-[#00B2FF]"
                  : "bg-[#7B61FF]/10 border-[#7B61FF]/30 text-[#7B61FF]"
              }`}
            >
              About Me
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#7B61FF]">
              Digital Excellence
            </span>
          </h2>

          <div className="space-y-6">
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              With over 9 years of experience in UI/UX design, I specialize in
              creating intuitive, scalable, and impactful digital products. My
              approach combines data-driven insights with creative innovation to
              deliver experiences that users love and businesses value.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I've led design initiatives across FinTech, SaaS, E-commerce, and
              Enterprise platforms, building design systems that empower teams and
              creating interfaces that drive measurable business outcomes.
            </p>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`relative group p-6 rounded-2xl border backdrop-blur-sm ${
                theme === "dark"
                  ? "bg-black/40 border-white/10 hover:border-[#00B2FF]/50"
                  : "bg-white/40 border-black/10 hover:border-[#7B61FF]/50"
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

              <div className="relative">
                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    theme === "dark"
                      ? "bg-[#00B2FF]/10 border border-[#00B2FF]/30"
                      : "bg-[#7B61FF]/10 border border-[#7B61FF]/30"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon
                    className={`w-6 h-6 ${
                      theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                    }`}
                  />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Core Competencies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-[#00B2FF]/10 border border-[#00B2FF]/30"
                        : "bg-[#7B61FF]/10 border border-[#7B61FF]/30"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <skill.icon
                      className={`w-5 h-5 ${
                        theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                      }`}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-foreground">
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  className={`h-2 rounded-full overflow-hidden ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className={`mt-20 p-8 md:p-12 rounded-3xl border backdrop-blur-sm ${
            theme === "dark"
              ? "bg-gradient-to-br from-black/60 to-black/40 border-[#00B2FF]/30"
              : "bg-gradient-to-br from-white/60 to-white/40 border-[#7B61FF]/30"
          } relative overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00B2FF]/20 to-[#7B61FF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7B61FF]/20 to-[#00B2FF]/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Let's Create Something Amazing
            </h3>
            <p
              className={`text-lg mb-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm always excited to work on new projects and collaborate with
              innovative teams. Let's discuss how we can bring your vision to life.
            </p>

            <motion.button
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] text-white font-semibold shadow-lg hover:shadow-[0_0_40px_rgba(0,178,255,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                (window.location.href = "mailto:shreyas@example.com")
              }
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
