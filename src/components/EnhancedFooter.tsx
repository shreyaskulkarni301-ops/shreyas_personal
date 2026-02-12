import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { Logo } from "./Logo";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Heart,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:shreyas@example.com", label: "Email" },
];

const footerLinks = [
  {
    title: "Work",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Case Studies", href: "#case-study" },
      { label: "Design Process", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Story", href: "#about" },
      { label: "Skills", href: "#about" },
      { label: "Experience", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "mailto:shreyas@example.com" },
      { label: "Resume", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export function EnhancedFooter() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      {/* Aurora effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-64 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] ${
            theme === "dark"
              ? "bg-[#00B2FF]/10"
              : "bg-[#7B61FF]/8"
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute -top-64 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] ${
            theme === "dark"
              ? "bg-[#7B61FF]/10"
              : "bg-[#00B2FF]/8"
          }`}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo className="mb-6" />
            <p
              className={`text-lg mb-8 max-w-md ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Creating exceptional digital experiences through innovative design
              and user-centric thinking. Let's build the future together.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-black/40 border-white/10 hover:border-[#00B2FF]/50 hover:bg-[#00B2FF]/10"
                      : "bg-white/40 border-black/10 hover:border-[#7B61FF]/50 hover:bg-[#7B61FF]/10"
                  } transition-all duration-300 group`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon
                    className={`w-5 h-5 ${
                      theme === "dark"
                        ? "text-gray-400 group-hover:text-[#00B2FF]"
                        : "text-gray-600 group-hover:text-[#7B61FF]"
                    } transition-colors`}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-8">
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h3
                  className={`font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className={`transition-colors ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-[#00B2FF]"
                            : "text-gray-600 hover:text-[#7B61FF]"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className={`h-px ${
            theme === "dark" ? "bg-white/10" : "bg-black/10"
          } mb-8`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className={`text-sm flex items-center gap-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>© 2026 Shreyas Kulkarni. Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <Heart
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-[#00B2FF]" : "text-[#7B61FF]"
                } fill-current`}
              />
            </motion.span>
            <span>and</span>
            <Sparkles
              className={`w-4 h-4 ${
                theme === "dark" ? "text-[#7B61FF]" : "text-[#00B2FF]"
              }`}
            />
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border backdrop-blur-sm ${
              theme === "dark"
                ? "bg-black/40 border-white/10 hover:border-[#00B2FF]/50 text-gray-400 hover:text-[#00B2FF]"
                : "bg-white/40 border-black/10 hover:border-[#7B61FF]/50 text-gray-600 hover:text-[#7B61FF]"
            } transition-all duration-300 group`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium">Back to Top</span>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === "dark" ? "bg-[#00B2FF]/40" : "bg-[#7B61FF]/40"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
