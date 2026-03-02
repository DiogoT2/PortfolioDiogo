import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Github, Linkedin, Mail, Volume2, VolumeX, TerminalSquare } from "lucide-react";
import { useSound } from "./SoundContext";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMuted, toggleMute, playClick } = useSound();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-6 pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between transition-all duration-500 ease-out pointer-events-auto ${isScrolled
          ? "w-full max-w-4xl rounded-full px-6 md:px-8 py-3 shadow-lg dark:shadow-none bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-800"
          : "w-full px-0 md:px-6 py-2 border-transparent bg-transparent dark:bg-transparent shadow-none"
          }`}
      >
        <div className="font-mono text-sm font-bold tracking-tighter group cursor-pointer text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          <TerminalSquare className="w-5 h-5 text-emerald-500" />
          <span>DIOGO</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <a onClick={playClick} href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            About
          </a>
          <a onClick={playClick} href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            Projects
          </a>
          <a onClick={playClick} href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 border-r border-zinc-200 dark:border-zinc-800 pr-6">
            <button
              onClick={() => {
                playClick();
                toggleMute();
              }}
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              aria-label="Toggle sound"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <a
              onClick={playClick}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:-translate-y-0.5 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              onClick={playClick}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:-translate-y-0.5 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-zinc-950 transition-colors flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Hire Me
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
