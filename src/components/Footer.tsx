import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-zinc-800/50 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-sm font-bold tracking-tighter group cursor-pointer">
          <span className="text-zinc-500">{"<"}</span>
          <span className="group-hover:text-emerald-400 transition-colors">DIOGO</span>
          <span className="text-zinc-500">{" />"}</span>
        </div>

        <p className="text-sm text-zinc-500 font-mono">
          © {new Date().getFullYear()} Diogo Trincheiras. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm font-medium text-zinc-400">
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
      </div>
    </footer>
  );
}
