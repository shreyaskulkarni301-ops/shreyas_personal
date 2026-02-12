import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { FuturisticBackground } from "./FuturisticBackground";

export function Footer() {
  return (
    <footer className="relative py-24 overflow-hidden">
      <FuturisticBackground variant="mixed" intensity="medium" />
      
      {/* Aurora effect overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B2FF] rounded-full blur-[150px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B61FF] rounded-full blur-[150px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Let's Create Something Great</h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto mb-10">
            Want to collaborate or discuss design leadership opportunities? I'm
            always interested in connecting with fellow designers, product
            leaders, and innovative teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] hover:shadow-[0_0_35px_rgba(0,178,255,0.5)] transition-all duration-300 overflow-hidden group"
                onClick={() => (window.location.href = "mailto:shreyas@example.com")}
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Get in Touch
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] to-[#00B2FF]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {[
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Mail, href: "mailto:shreyas@example.com", label: "Email" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-lg bg-[#1A1A1A] border border-white/[0.08] hover:border-[#00B2FF]/60 text-[#B3B3B3] hover:text-[#00B2FF] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,178,255,0.2)]"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/[0.08] mb-8" />

        {/* Bottom text */}
        <div className="text-center text-[#B3B3B3]">
          <p>© 2025 Shreyas Kulkarni. Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}