import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

const milestones = [
  {
    phase: "Research & Discovery",
    description: "Conducted user interviews and competitive analysis",
    duration: "2 weeks",
  },
  {
    phase: "Design System Build",
    description: "Created comprehensive component library",
    duration: "6 weeks",
  },
  {
    phase: "Implementation",
    description: "Rolled out across 3 product teams",
    duration: "4 weeks",
  },
  {
    phase: "Iteration & Scale",
    description: "Refined based on team feedback",
    duration: "Ongoing",
  },
];

const metrics = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Faster Development",
    description: "Reduced design-to-dev handoff time",
  },
  {
    icon: Users,
    value: "50+",
    label: "Active Users",
    description: "Designers & developers using the system",
  },
  {
    icon: CheckCircle2,
    value: "200+",
    label: "Components",
    description: "Reusable UI components built",
  },
  {
    icon: Award,
    value: "95%",
    label: "Satisfaction",
    description: "Team satisfaction score",
  },
];

export function EnhancedCaseStudy() {
  const { theme } = useTheme();

  return (
    <section id="case-study" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center max-w-3xl mx-auto"
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
              Featured Case Study
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF]">
              Nova Design System
            </span>
          </h2>

          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Building a scalable design system from the ground up to unify design
            language and accelerate product development across a B2B SaaS platform
          </p>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: "The Challenge",
              content:
                "The company had grown rapidly with inconsistent UI patterns across products. Teams were rebuilding components, causing inefficiency and poor user experience. We needed a unified design language.",
            },
            {
              title: "The Solution",
              content:
                "I led the creation of Nova, a comprehensive design system with 200+ components, clear documentation, and governance model. Built with accessibility and scalability at its core.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl border backdrop-blur-sm ${
                theme === "dark"
                  ? "bg-black/40 border-white/10"
                  : "bg-white/40 border-black/10"
              }`}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {item.title}
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-foreground">
            Design Process
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
                theme === "dark" ? "bg-white/10" : "bg-black/10"
              } hidden md:block`}
            />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Left side (for even indices) */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <motion.div
                      className={`inline-block p-6 rounded-2xl border backdrop-blur-sm ${
                        theme === "dark"
                          ? "bg-black/60 border-[#00B2FF]/30"
                          : "bg-white/60 border-[#7B61FF]/30"
                      }`}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        {milestone.phase}
                      </h4>
                      <p
                        className={`mb-2 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {milestone.description}
                      </p>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                        }`}
                      >
                        {milestone.duration}
                      </span>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-4 ${
                        theme === "dark"
                          ? "bg-[#00B2FF] border-black"
                          : "bg-[#7B61FF] border-white"
                      } shadow-lg`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-foreground">
            Measurable Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className={`relative group p-8 rounded-2xl border backdrop-blur-sm text-center ${
                  theme === "dark"
                    ? "bg-black/40 border-white/10 hover:border-[#00B2FF]/50"
                    : "bg-white/40 border-black/10 hover:border-[#7B61FF]/50"
                } transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                <div className="relative">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-[#00B2FF]/10 border border-[#00B2FF]/30"
                        : "bg-[#7B61FF]/10 border border-[#7B61FF]/30"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <metric.icon
                      className={`w-8 h-8 ${
                        theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                      }`}
                    />
                  </motion.div>

                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] mb-2">
                    {metric.value}
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {metric.label}
                  </h4>

                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className={`mt-20 p-12 rounded-3xl border backdrop-blur-sm relative overflow-hidden ${
            theme === "dark"
              ? "bg-gradient-to-br from-black/60 to-black/40 border-[#00B2FF]/30"
              : "bg-gradient-to-br from-white/60 to-white/40 border-[#7B61FF]/30"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Quote mark */}
          <div
            className={`text-8xl font-serif opacity-10 absolute top-8 left-8 ${
              theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
            }`}
          >
            "
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p
              className={`text-xl md:text-2xl mb-8 italic ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Shreyas transformed our entire design workflow. The Nova Design System
              not only improved our efficiency but elevated the quality and
              consistency of our products across the board.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00B2FF] to-[#7B61FF]" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Sarah Johnson</p>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  VP of Product, TechCorp
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
