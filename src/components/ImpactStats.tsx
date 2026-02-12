import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

const stats = [
  { label: "Years in UI/UX Design", value: "9+" },
  { label: "Product Launches", value: "15+" },
  { label: "Improved Engagement", value: "30%+" },
  { label: "Scaled Design Systems", value: "4+" },
];

export function ImpactStats() {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-lg blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div
                  className={`relative rounded-lg p-6 border transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-[#1A1A1A] border-white/[0.08] group-hover:border-[#00B2FF]/50"
                      : "bg-white/60 backdrop-blur-sm border-black/[0.08] group-hover:border-[#7B61FF]/50"
                  }`}
                >
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] mb-2">
                    {stat.value}
                  </div>
                  <p className={theme === "dark" ? "text-[#B3B3B3]" : "text-gray-600"}>
                    {stat.label}
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