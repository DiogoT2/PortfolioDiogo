import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass-panel border-t-0 border-x-0"
    >
      <div className="font-mono text-sm font-bold tracking-tighter group cursor-pointer">
        <span className="text-zinc-500">{"<"}</span>
        <span className="group-hover:text-emerald-400 transition-colors">DIOGO</span>
        <span className="text-zinc-500">{" />"}</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#about" className="hover:text-zinc-50 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-zinc-50 transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-zinc-50 transition-colors">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-zinc-50 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-zinc-50 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:hello@example.com"
          className="text-zinc-400 hover:text-zinc-50 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.nav>
  );
}
