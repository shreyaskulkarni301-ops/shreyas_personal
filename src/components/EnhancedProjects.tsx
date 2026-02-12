import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

const projects = [
  {
    title: "Nova Design System",
    description:
      "Built a scalable design system for B2B SaaS, reducing design-to-dev handoff time by 40%",
    metric: "+40%",
    metricLabel: "Efficiency",
    image:
      "https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2MjE2NjA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Design System", "B2B SaaS", "Component Library"],
  },
  {
    title: "FinTech Mobile App",
    description:
      "Redesigned mobile banking experience, improving user satisfaction by 35%",
    metric: "+35%",
    metricLabel: "Satisfaction",
    image:
      "https://images.unsplash.com/photo-1758411898471-fa144c487c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyMTMyNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile App", "FinTech", "UX Research"],
  },
  {
    title: "Enterprise Dashboard",
    description:
      "Created intuitive analytics platform that increased daily active users by 28%",
    metric: "+28%",
    metricLabel: "DAU Growth",
    image:
      "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYyMDc3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Analytics", "Dashboard", "Data Viz"],
  },
  {
    title: "E-commerce Redesign",
    description:
      "Led complete UX overhaul resulting in 45% increase in conversion rates",
    metric: "+45%",
    metricLabel: "Conversion",
    image:
      "https://images.unsplash.com/photo-1761305135173-616efff573b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjIxNzExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["E-commerce", "Conversion Optimization", "A/B Testing"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Holographic glow */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF] rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        animate={
          isHovered
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Card */}
      <motion.div
        className={`relative rounded-2xl overflow-hidden border-2 backdrop-blur-sm ${
          theme === "dark"
            ? "bg-black/60 border-white/10 hover:border-[#00B2FF]/50"
            : "bg-white/60 border-black/10 hover:border-[#7B61FF]/50"
        } transition-all duration-500 shadow-2xl`}
        whileHover={{ scale: 1.02 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Metric Badge */}
          <motion.div
            className={`absolute top-4 right-4 backdrop-blur-xl border-2 rounded-2xl overflow-hidden ${
              theme === "dark"
                ? "bg-black/80 border-[#00B2FF]/40"
                : "bg-white/80 border-[#7B61FF]/40"
            }`}
            whileHover={{ scale: 1.1 }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)",
            }}
          >
            <div className="px-4 py-3">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#7B61FF]">
                {project.metric}
              </div>
              <div
                className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.metricLabel}
              </div>
            </div>
          </motion.div>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 ${
              theme === "dark" ? "from-black" : "from-white"
            }`}
          />

          {/* Sparkle effect */}
          <motion.div
            className="absolute top-4 left-4"
            animate={
              isHovered
                ? {
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles
              className={`w-5 h-5 ${
                theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
              }`}
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00B2FF] group-hover:to-[#7B61FF] transition-all duration-300">
              {project.title}
            </h3>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -45 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                }`}
              />
            </motion.div>
          </div>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className={`px-3 py-1 text-xs rounded-full border ${
                  theme === "dark"
                    ? "bg-[#00B2FF]/10 border-[#00B2FF]/30 text-[#00B2FF]"
                    : "bg-[#7B61FF]/10 border-[#7B61FF]/30 text-[#7B61FF]"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + tagIndex * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* View Project Link */}
          <motion.button
            className={`w-full py-3 rounded-xl border-2 font-semibold flex items-center justify-center gap-2 ${
              theme === "dark"
                ? "border-[#00B2FF]/40 text-[#00B2FF] hover:bg-[#00B2FF]/10"
                : "border-[#7B61FF]/40 text-[#7B61FF] hover:bg-[#7B61FF]/10"
            } transition-all duration-300`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Corner Accents */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i === 0 ? "top-0 right-0" : "bottom-0 left-0"
            } w-20 h-20 border-2 ${
              theme === "dark" ? "border-[#00B2FF]/30" : "border-[#7B61FF]/30"
            } ${
              i === 0
                ? "border-l-0 border-b-0 rounded-tr-2xl"
                : "border-r-0 border-t-0 rounded-bl-2xl"
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function EnhancedProjects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
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
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] via-[#7B61FF] to-[#00B2FF]">
              Selected Projects
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore a curated collection of projects that demonstrate impact,
            innovation, and design excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
