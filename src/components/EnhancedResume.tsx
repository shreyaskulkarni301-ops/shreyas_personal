import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Eye, FileText, X, CheckCircle2, Sparkles } from "lucide-react";

export function EnhancedResume() {
  const [showPreview, setShowPreview] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
  setIsDownloading(true);

  setTimeout(() => {
    setIsDownloading(false);
    setDownloaded(true);

    const link = document.createElement("a");
    link.href = "/Shreyas_Kulkarni_Resume.pdf";
    link.download = "Shreyas_Kulkarni_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 3000);
  }, 1000);
 };

  return (
    <section id="resume" className="relative py-32 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-cyan-500/10" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              My Credentials
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Download or preview my professional experience, skills, and achievements
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Holographic Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-500" />
            
            {/* Main Card */}
            <div className="relative bg-background/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, #00B2FF 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, #7B61FF 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, #00B2FF 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative z-10">
                {/* Resume Icon and Info */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-2xl blur-xl opacity-50" />
                    <div className="relative bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-8 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
                      <FileText className="w-16 h-16 text-cyan-400" />
                    </div>
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">Shreyas Kulkarni</h3>
                    <p className="text-xl text-violet-400 mb-1">UI/UX Design Artist</p>
                    <p className="text-foreground/60">9+ Years of Experience</p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                      {["Design Systems", "User Research", "Prototyping", "Interaction Design"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-400"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* Download Button */}
                  <motion.button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 transition-transform group-hover:scale-110" />
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />

                    {/* Button Content */}
                    <span className="relative flex items-center gap-2 text-white font-semibold">
                      {downloaded ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          Downloaded!
                        </>
                      ) : isDownloading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Download className="w-5 h-5" />
                          </motion.div>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Download Resume
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Preview Button */}
                  <motion.button
                    onClick={() => setShowPreview(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-xl overflow-hidden border border-cyan-500/30 bg-background/50 backdrop-blur-sm hover:bg-cyan-500/10 transition-colors"
                  >
                    <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <Eye className="w-5 h-5" />
                      Preview Resume
                    </span>
                  </motion.button>
                </div>

                {/* Additional Info */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-sm text-foreground/40 mt-6"
                >
                  Last updated: February 2026 • PDF Format • 2 pages
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors group"
              >
                <X className="w-6 h-6 text-foreground/60 group-hover:text-cyan-400" />
              </button>

              {/* Preview Content */}
              <div className="p-8 overflow-y-auto max-h-[90vh]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Resume Preview</h3>
                  <p className="text-foreground/60">
                    This is a placeholder preview. Replace with your actual resume PDF or create an embedded viewer.
                  </p>
                </div>

                {/* Resume Preview Placeholder */}
                <div className="aspect-[8.5/11] bg-gradient-to-br from-cyan-500/5 to-violet-500/5 rounded-xl border border-cyan-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-24 h-24 text-cyan-400/30 mx-auto mb-4" />
                    <p className="text-foreground/40 mb-4">
                      Upload your resume PDF to /public/resume-shreyas-kulkarni.pdf
                    </p>
                    <p className="text-sm text-foreground/30">
                      You can also use an iframe or PDF viewer library to display it here
                    </p>
                  </div>
                </div>

                {/* Download from Preview */}
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
