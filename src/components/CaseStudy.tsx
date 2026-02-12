import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { FuturisticBackground } from "./FuturisticBackground";

const sections = [
  {
    icon: Target,
    title: "Challenge",
    content:
      "A rapidly growing B2B SaaS company was struggling with design inconsistencies across their product suite. With 3 design teams working in silos, the design-to-development handoff was taking 5+ days, leading to missed deadlines and frustrated stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "My Approach",
    content:
      "I led a 6-month initiative to build a comprehensive design system from the ground up. This included conducting a UI audit, establishing design principles, creating a component library in Figma, and collaborating with engineering to build a React component library with full documentation.",
  },
  {
    icon: Rocket,
    title: "Solution",
    content:
      "Nova Design System launched with 120+ components, comprehensive usage guidelines, and a living documentation site. We implemented a governance model with weekly design system office hours and a contribution process that empowered designers across the organization.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    content:
      "The design system reduced design-to-dev handoff time by 40%, improved design consistency scores by 85%, and enabled the company to ship features 2x faster. Designer satisfaction increased by 60% and developer NPS improved from 6 to 8.5.",
  },
  {
    icon: BookOpen,
    title: "Key Learnings",
    content:
      "Success required more than building components—it demanded cultural change. Regular communication, clear governance, and showing quick wins were essential. The most valuable insight: involve engineers early and treat the design system as a product with real users.",
  },
];

const metrics = [
  { value: "40%", label: "Faster handoff" },
  { value: "85%", label: "Consistency increase" },
  { value: "2x", label: "Shipping speed" },
  { value: "60%", label: "Designer satisfaction" },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="relative py-24 overflow-hidden">
      <FuturisticBackground variant="mixed" intensity="low" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#00B2FF]/20 to-[#7B61FF]/20 border border-[#00B2FF]/30 mb-6">
            <span className="text-[#00B2FF]">Case Study</span>
          </div>
          <h2 className="text-white mb-4">
            Building a Scalable Design System for SaaS
          </h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto">
            How Nova Design System transformed product development and enabled
            consistent experiences across platforms
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-[#1A1A1A] rounded-lg border border-white/[0.08] hover:border-[#00B2FF]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,178,255,0.15)] group cursor-default"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              <p className="text-[#B3B3B3] group-hover:text-white transition-colors duration-300">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Background panel */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B2FF]/5 to-[#7B61FF]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-8 border border-white/[0.08] group-hover:border-[#00B2FF]/30 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[#00B2FF]/20 to-[#7B61FF]/20 group-hover:from-[#00B2FF]/30 group-hover:to-[#7B61FF]/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#00B2FF]" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-white mb-3">{section.title}</h3>
                      <p className="text-[#B3B3B3] leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}