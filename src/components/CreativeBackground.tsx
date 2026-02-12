import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export function CreativeBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
      });
    }

    // Animation loop
    const animate = () => {
      // Different fade effects for light/dark mode
      if (theme === "dark") {
        ctx.fillStyle = "rgba(13, 13, 13, 0.05)";
      } else {
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 120) * 0.15;

            if (theme === "dark") {
              ctx.strokeStyle = `rgba(0, 178, 255, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(123, 97, 255, ${opacity})`;
            }
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        if (theme === "dark") {
          ctx.fillStyle = `rgba(0, 178, 255, 0.4)`;
        } else {
          ctx.fillStyle = `rgba(123, 97, 255, 0.5)`;
        }
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />

      {/* Animated gradient orbs - different colors for light/dark */}
      {theme === "dark" ? (
        <>
          {/* Dark mode: Cyan and Violet orbs */}
          <motion.div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(0, 178, 255, 0.15) 0%, transparent 70%)",
              left: "10%",
              top: "10%",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -80, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(circle, rgba(123, 97, 255, 0.12) 0%, transparent 70%)",
              right: "10%",
              top: "30%",
            }}
            animate={{
              x: [0, -60, 0],
              y: [0, 60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[100px]"
            style={{
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(0, 178, 255, 0.1) 0%, transparent 70%)",
              left: "50%",
              bottom: "20%",
            }}
            animate={{
              x: [-30, 30, -30],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </>
      ) : (
        <>
          {/* Light mode: Soft pastel gradient orbs */}
          <motion.div
            className="absolute rounded-full blur-[140px]"
            style={{
              width: "700px",
              height: "700px",
              background:
                "radial-gradient(circle, rgba(123, 97, 255, 0.08) 0%, transparent 70%)",
              left: "5%",
              top: "0%",
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, -70, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[140px]"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(0, 178, 255, 0.06) 0%, transparent 70%)",
              right: "0%",
              top: "20%",
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, 70, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(circle, rgba(255, 182, 193, 0.05) 0%, transparent 70%)",
              left: "60%",
              bottom: "10%",
            }}
            animate={{
              x: [-40, 40, -40],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
        </>
      )}

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      />

      {/* Gradient mesh overlay */}
      <div
        className={`absolute inset-0 opacity-30 transition-opacity duration-500 ${
          theme === "dark" ? "opacity-20" : "opacity-30"
        }`}
        style={{
          backgroundImage:
            theme === "dark"
              ? `
                radial-gradient(at 20% 30%, rgba(0, 178, 255, 0.08) 0px, transparent 50%),
                radial-gradient(at 80% 50%, rgba(123, 97, 255, 0.08) 0px, transparent 50%),
                radial-gradient(at 40% 80%, rgba(0, 178, 255, 0.06) 0px, transparent 50%)
              `
              : `
                radial-gradient(at 15% 25%, rgba(123, 97, 255, 0.06) 0px, transparent 50%),
                radial-gradient(at 85% 45%, rgba(0, 178, 255, 0.05) 0px, transparent 50%),
                radial-gradient(at 50% 85%, rgba(255, 182, 193, 0.04) 0px, transparent 50%)
              `,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] transition-opacity duration-500"
        style={{
          backgroundImage:
            theme === "dark"
              ? `linear-gradient(rgba(0, 178, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 178, 255, 0.1) 1px, transparent 1px)`
              : `linear-gradient(rgba(123, 97, 255, 0.08) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(123, 97, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02] transition-opacity duration-500"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)"
              : "radial-gradient(ellipse at center, transparent 0%, rgba(255, 255, 255, 0.4) 100%)",
        }}
      />
    </div>
  );
}
