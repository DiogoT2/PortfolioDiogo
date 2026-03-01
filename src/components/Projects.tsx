import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution with Next.js, Stripe integration, and PostgreSQL.",
    image: "https://picsum.photos/seed/ecommerce/800/600?blur=2",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    desc: "Real-time collaborative task manager built with React, Node.js, and WebSockets.",
    image: "https://picsum.photos/seed/dashboard/800/600?blur=2",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    desc: "An AI-powered tool for generating blog posts and marketing copy using OpenAI API.",
    image: "https://picsum.photos/seed/ai/800/600?blur=2",
    tags: ["React", "OpenAI", "Express", "Tailwind"],
    link: "#",
    github: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number; key?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct * 15);
    y.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl overflow-hidden shadow-lg dark:shadow-none hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors z-10"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-zinc-950/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50 font-display">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800/50">
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            View Live <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={project.github}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filters = ["All", ...allTags];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
            Selected Work
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A collection of projects that showcase my passion for building
            beautiful, functional applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10" style={{ perspective: "1000px" }}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              key={project.title}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
