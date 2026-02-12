import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Palette,
  Users,
  Layers,
  Zap,
  GitBranch,
  BarChart3,
} from "lucide-react";
import { FuturisticBackground } from "./FuturisticBackground";

const skills = [
  { icon: Palette, label: "Design Thinking & Strategy" },
  { icon: Users, label: "User Research & Testing" },
  { icon: Layers, label: "Design Systems & DesignOps" },
  { icon: Zap, label: "Rapid Prototyping" },
  { icon: GitBranch, label: "Cross-functional Leadership" },
  { icon: BarChart3, label: "Data-Driven Design" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <FuturisticBackground variant="mixed" intensity="medium" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white mb-4">About Me</h2>
          <p className="text-[#B3B3B3] max-w-2xl">
            Design artist passionate about creating inclusive, scalable digital
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-full blur-2xl opacity-20" />
              {/* Photo container */}
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-[#00B2FF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIwODc2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Shreyas Kulkarni"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#B3B3B3] mb-6">
              With over 9 years of experience leading design teams and shipping
              digital products, I specialize in bridging the gap between user
              needs and business objectives through strategic, systematic
              design.
            </p>
            <p className="text-[#B3B3B3] mb-6">
              My expertise spans building scalable design systems, leading
              cross-functional teams, and establishing DesignOps practices that
              enable organizations to design and ship faster without
              compromising quality.
            </p>
            <p className="text-[#B3B3B3]">
              I've partnered with startups and Fortune 500 companies across
              fintech, healthcare, and SaaS to create products that users love
              and businesses can scale.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-white mb-8">Core Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-[#1A1A1A] rounded-lg p-5 border border-white/[0.08] hover:border-[#00B2FF]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,178,255,0.2)] cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#00B2FF]/20 to-[#7B61FF]/20 group-hover:from-[#00B2FF]/40 group-hover:to-[#7B61FF]/40 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-[#00B2FF] group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00B2FF] group-hover:to-[#7B61FF] transition-all duration-300">{skill.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B2FF]/5 to-[#7B61FF]/5 rounded-2xl blur-xl" />
          <div className="relative bg-[#1A1A1A]/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/[0.08]">
            <div className="text-[#00B2FF] mb-4">Philosophy</div>
            <blockquote className="text-white italic">
              "Great design lives at the intersection of empathy, structure, and
              business value."
            </blockquote>
            <p className="text-[#B3B3B3] mt-6">
              I believe the most impactful design work doesn't just solve user
              problems—it creates systematic solutions that empower entire
              organizations to deliver better experiences consistently.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}