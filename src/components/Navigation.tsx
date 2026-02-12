import { motion } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-black/70 backdrop-blur-xl border-b border-[#00B2FF]/10 shadow-[0_4px_20px_rgba(0,178,255,0.1)]"
            : "bg-white/70 backdrop-blur-xl border-b border-[#7B61FF]/10 shadow-[0_4px_20px_rgba(123,97,255,0.08)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Work", id: "projects" },
              { label: "About", id: "about" },
              { label: "Case Study", id: "case-study" },
              { label: "Resume", id: "resume" },
            ].map((link) => (
              <motion.button
                key={link.id}
                onClick={() =>
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`transition-colors duration-300 relative group ${
                  theme === "dark"
                    ? "text-[#B3B3B3] hover:text-[#00B2FF]"
                    : "text-gray-600 hover:text-[#7B61FF]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Right side: Theme toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/5 hover:bg-white/10 text-[#00B2FF]"
                  : "bg-black/5 hover:bg-black/10 text-[#7B61FF]"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="relative bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] hover:shadow-[0_0_25px_rgba(0,178,255,0.5)] transition-all duration-300 overflow-hidden group"
                onClick={() =>
                  (window.location.href = "mailto:shreyas@example.com")
                }
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Contact
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
        </div>
      </div>
    </motion.nav>
  );
}