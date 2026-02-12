import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export function AIBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulsePhase: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Data packets
    const dataPackets: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
    }> = [];

    const animate = () => {
      ctx.fillStyle =
        theme === "dark"
          ? "rgba(13, 13, 13, 0.08)"
          : "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += 0.02;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i >= j) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const opacity = (1 - distance / 150) * 0.2;

            // Create gradient for connections
            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              otherNode.x,
              otherNode.y
            );
            if (theme === "dark") {
              gradient.addColorStop(0, `rgba(0, 178, 255, ${opacity})`);
              gradient.addColorStop(0.5, `rgba(123, 97, 255, ${opacity})`);
              gradient.addColorStop(1, `rgba(0, 178, 255, ${opacity})`);
            } else {
              gradient.addColorStop(0, `rgba(123, 97, 255, ${opacity * 0.8})`);
              gradient.addColorStop(0.5, `rgba(0, 178, 255, ${opacity * 0.8})`);
              gradient.addColorStop(1, `rgba(123, 97, 255, ${opacity * 0.8})`);
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Occasionally spawn data packets
            if (Math.random() < 0.0005 && dataPackets.length < 20) {
              dataPackets.push({
                x: node.x,
                y: node.y,
                targetX: otherNode.x,
                targetY: otherNode.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.03,
              });
            }
          }
        });

        // Draw node with pulse
        const pulseSize = node.size + Math.sin(node.pulsePhase) * 0.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);

        // Gradient for nodes
        const nodeGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          pulseSize
        );
        if (theme === "dark") {
          nodeGradient.addColorStop(0, "rgba(0, 178, 255, 0.8)");
          nodeGradient.addColorStop(1, "rgba(0, 178, 255, 0.2)");
        } else {
          nodeGradient.addColorStop(0, "rgba(123, 97, 255, 0.7)");
          nodeGradient.addColorStop(1, "rgba(123, 97, 255, 0.1)");
        }
        ctx.fillStyle = nodeGradient;
        ctx.fill();
      });

      // Draw and update data packets
      dataPackets.forEach((packet, index) => {
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          dataPackets.splice(index, 1);
          return;
        }

        const x = packet.x + (packet.targetX - packet.x) * packet.progress;
        const y = packet.y + (packet.targetY - packet.y) * packet.progress;

        // Draw packet
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === "dark"
            ? `rgba(0, 178, 255, ${1 - packet.progress})`
            : `rgba(123, 97, 255, ${1 - packet.progress})`;
        ctx.fill();

        // Draw trail
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === "dark"
            ? `rgba(0, 178, 255, ${(1 - packet.progress) * 0.2})`
            : `rgba(123, 97, 255, ${(1 - packet.progress) * 0.2})`;
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
      {/* Base gradient */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at top, rgba(0, 13, 26, 1) 0%, rgba(13, 13, 13, 1) 50%, rgba(0, 0, 0, 1) 100%)"
              : "radial-gradient(ellipse at top, rgba(255, 252, 255, 1) 0%, rgba(248, 250, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      {/* Animated gradient orbs with improved movement */}
      {theme === "dark" ? (
        <>
          <motion.div
            className="absolute rounded-full blur-[140px]"
            style={{
              width: "700px",
              height: "700px",
              background:
                "radial-gradient(circle, rgba(0, 178, 255, 0.18) 0%, transparent 70%)",
              left: "-10%",
              top: "-10%",
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.2, 0.9, 1],
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
                "radial-gradient(circle, rgba(123, 97, 255, 0.15) 0%, transparent 70%)",
              right: "-5%",
              top: "20%",
            }}
            animate={{
              x: [0, -80, 60, 0],
              y: [0, 100, -50, 0],
              scale: [1, 0.9, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(circle, rgba(0, 178, 255, 0.12) 0%, transparent 70%)",
              left: "50%",
              bottom: "10%",
            }}
            animate={{
              x: [-60, 60, -60],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute rounded-full blur-[160px]"
            style={{
              width: "800px",
              height: "800px",
              background:
                "radial-gradient(circle, rgba(123, 97, 255, 0.1) 0%, transparent 70%)",
              left: "-10%",
              top: "-15%",
            }}
            animate={{
              x: [0, 120, -60, 0],
              y: [0, -100, 80, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[160px]"
            style={{
              width: "700px",
              height: "700px",
              background:
                "radial-gradient(circle, rgba(0, 178, 255, 0.08) 0%, transparent 70%)",
              right: "-10%",
              top: "15%",
            }}
            animate={{
              x: [0, -90, 70, 0],
              y: [0, 110, -60, 0],
              scale: [1, 0.9, 1.2, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute rounded-full blur-[140px]"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(255, 182, 193, 0.07) 0%, transparent 70%)",
              left: "55%",
              bottom: "5%",
            }}
            animate={{
              x: [-70, 70, -70],
              y: [0, -70, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
            }}
          />
        </>
      )}

      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />

      {/* Holographic grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] transition-opacity duration-500"
        style={{
          backgroundImage:
            theme === "dark"
              ? `linear-gradient(rgba(0, 178, 255, 0.15) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 178, 255, 0.15) 1px, transparent 1px)`
              : `linear-gradient(rgba(123, 97, 255, 0.12) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(123, 97, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Scanline effect */}
      <motion.div
        className={`absolute left-0 right-0 h-[2px] ${
          theme === "dark"
            ? "bg-gradient-to-r from-transparent via-[#00B2FF] to-transparent"
            : "bg-gradient-to-r from-transparent via-[#7B61FF] to-transparent"
        } opacity-30`}
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.025] transition-opacity duration-500"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)"
              : "radial-gradient(ellipse at center, transparent 0%, rgba(255, 255, 255, 0.5) 100%)",
        }}
      />
    </div>
  );
}
