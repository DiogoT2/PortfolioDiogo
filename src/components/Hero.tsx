import { motion } from "motion/react";
import { ArrowDownRight, Terminal } from "lucide-react";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          Hi, I'm
          <br />
          <span className="text-gradient"><ScrambleText text="Diogo Trincheiras" /></span>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-mono"
        >
          {">"} Junior Software Engineer crafting digital experiences.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-50 text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            View Projects
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-50 rounded-full font-medium hover:bg-zinc-800 transition-colors"
          >
            <Terminal className="w-4 h-4 text-zinc-400" />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono uppercase tracking-widest">
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent" 
        />
      </motion.a>
    </section>
  );
}
