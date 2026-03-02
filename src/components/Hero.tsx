import { motion } from "motion/react";
import { ArrowDownRight, Terminal, User } from "lucide-react";
import ScrambleText from "./ScrambleText";
import Magnetic from "./Magnetic";
import { useSound } from "./SoundContext";

export default function Hero() {
  const { playClick, playWoosh } = useSound();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
      {/* Dynamic Background glow blobs */}
      <motion.div
        animate={{
          y: ["0%", "10%", "-5%", "0%"],
          x: ["0%", "5%", "-10%", "0%"],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[100px] -z-10"
      />

      <motion.div
        animate={{
          y: ["0%", "-10%", "5%", "0%"],
          x: ["0%", "-5%", "10%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-sky-400/20 dark:bg-zinc-800/30 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          onClick={() => {
            playWoosh();
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
          }}
          className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <span className="flex items-center gap-1.5 font-mono">
            <kbd className="px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">⌘</kbd>
            <kbd className="px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">K</kbd>
          </span>
          <span>Open Command Palette</span>
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-zinc-900 dark:text-zinc-50"
        >
          Hi, I'm
          <br />
          <span className="text-gradient"><ScrambleText text="Diogo Trincheiras" /></span>
        </motion.h1>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-mono">
            {">"} Junior Software Engineer crafting digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Magnetic>
            <a
              onClick={playClick}
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-900 dark:border-zinc-800 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xl"
            >
              View Projects
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              onClick={playClick}
              href="/resume.pdf" // Placeholder link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors shadow-md shadow-zinc-200/50 dark:shadow-none"
            >
              <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              onClick={playClick}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors shadow-md shadow-zinc-200/50 dark:shadow-none"
            >
              <Terminal className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-zinc-400 dark:from-zinc-500 to-transparent"
        />
      </motion.a>
    </section>
  );
}
