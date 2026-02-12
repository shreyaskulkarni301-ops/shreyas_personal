import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const projects = [
  {
    title: "Nova Design System",
    description:
      "Built a scalable design system for B2B SaaS, reducing design-to-dev handoff time by 40%",
    metric: "+40% efficiency",
    image:
      "https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2MjE2NjA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "FinTech Mobile App",
    description:
      "Redesigned mobile banking experience, improving user satisfaction by 35%",
    metric: "+35% satisfaction",
    image:
      "https://images.unsplash.com/photo-1758411898471-fa144c487c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyMTMyNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Enterprise Dashboard",
    description:
      "Created intuitive analytics platform that increased daily active users by 28%",
    metric: "+28% DAU",
    image:
      "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYyMDc3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "E-commerce Redesign",
    description:
      "Led complete UX overhaul resulting in 45% increase in conversion rates",
    metric: "+45% conversion",
    image:
      "https://images.unsplash.com/photo-1761305135173-616efff573b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjIxNzExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function FeaturedProjects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4">Featured Work</h2>
          <p className={theme === "dark" ? "text-[#B3B3B3]" : "text-gray-600"}>
            Selected projects that demonstrate impact and design excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Card */}
              <div
                className={`relative rounded-xl overflow-hidden border transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-[#1A1A1A] border-white/[0.08] group-hover:border-[#00B2FF]/60 group-hover:shadow-[0_0_30px_rgba(0,178,255,0.2)]"
                    : "bg-white border-black/[0.08] group-hover:border-[#7B61FF]/60 group-hover:shadow-[0_0_30px_rgba(123,97,255,0.2)]"
                }`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Metric badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-black/70 border-[#00B2FF]/30 group-hover:border-[#00B2FF]/60 group-hover:shadow-[0_0_15px_rgba(0,178,255,0.3)]"
                        : "bg-white/70 border-[#7B61FF]/30 group-hover:border-[#7B61FF]/60 group-hover:shadow-[0_0_15px_rgba(123,97,255,0.3)]"
                    }`}
                  >
                    <span
                      className={
                        theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                      }
                    >
                      {project.metric}
                    </span>
                  </div>
                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 ${
                      theme === "dark" ? "from-[#1A1A1A]" : "from-white"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00B2FF] group-hover:to-[#7B61FF] transition-all duration-300">
                      {project.title}
                    </h3>
                    <ArrowRight
                      className={`w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 ${
                        theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                      }`}
                    />
                  </div>
                  <p className={theme === "dark" ? "text-[#B3B3B3]" : "text-gray-600"}>
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}