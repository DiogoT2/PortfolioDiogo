import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import { useSound } from "./SoundContext";

const projects: ProjectData[] = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution with Next.js, Stripe integration, and PostgreSQL.",
    image: "https://picsum.photos/seed/ecommerce/1200/800?blur=2",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    link: "#",
    github: "#",
    content: (
      <>
        <h3>The Challenge</h3>
        <p>Building a performant, SEO-friendly e-commerce platform that can handle high traffic spikes and complex state management across the cart and checkout flows.</p>
        <h3>The Solution</h3>
        <p>I utilized Next.js App Router for server-side rendering product pages, ensuring lightning fast initial loads and optimal SEO. State management was handled via Zustand to keep the global cart state synchronized across tabs.</p>
        <h3>Architecture Overview</h3>
        <ul>
          <li><strong>Frontend:</strong> Next.js 14, Tailwind CSS, Framer Motion</li>
          <li><strong>Backend:</strong> Next.js API Routes, Prisma ORM</li>
          <li><strong>Database:</strong> PostgreSQL hosted on Supabase</li>
          <li><strong>Payments:</strong> Stripe Checkout & Webhooks</li>
        </ul>
      </>
    )
  },
  {
    title: "Task Management App",
    desc: "Real-time collaborative task manager built with React, Node.js, and WebSockets.",
    image: "https://picsum.photos/seed/dashboard/1200/800?blur=2",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
    content: (
      <>
        <h3>The Challenge</h3>
        <p>Creating a highly interactive, real-time board where multiple users can drag and drop tasks simultaneously without race conditions.</p>
        <h3>The Solution</h3>
        <p>Implemented a robust WebSocket architecture using Socket.io. Used optimistic UI updates on the frontend with React Query to ensure immediate feedback, while gracefully handling server synchronisation in the background.</p>
      </>
    )
  },
  {
    title: "AI Content Generator",
    desc: "An AI-powered tool for generating blog posts and marketing copy using OpenAI API.",
    image: "https://picsum.photos/seed/ai/1200/800?blur=2",
    tags: ["React", "OpenAI", "Express", "Tailwind"],
    link: "#",
    github: "#",
    content: (
      <>
        <h3>The Challenge</h3>
        <p>Integrating large language models securely and managing long-polling or streaming responses in the UI so the user isn't stuck waiting for the generation to finish.</p>
        <h3>The Solution</h3>
        <p>Leveraged Server-Sent Events (SSE) to stream the OpenAI response token by token directly to the React frontend, providing a typing-effect experience that significantly reduced perceived wait times.</p>
      </>
    )
  },
];

function ProjectCard({ project, index, onClick }: { project: ProjectData; index: number; onClick: () => void }) {
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
      layoutId={`project-${project.title}`}
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
      onClick={onClick}
      className="group cursor-pointer relative flex flex-col bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl overflow-hidden shadow-lg dark:shadow-none hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors z-10"
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
        <h3 className="text-2xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50 font-display transition-colors group-hover:text-emerald-500">
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
          <span
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
          >
            Read Case Study <ArrowUpRight className="w-4 h-4" />
          </span>
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors z-20 relative ml-auto"
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
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const { playClick, playPop } = useSound();

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filters = ["All", ...allTags];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/50">
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
            beautiful, functional applications. Click a project to read the case study.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                playClick();
                setFilter(f);
              }}
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
              <ProjectCard
                project={project}
                index={index}
                onClick={() => {
                  playClick();
                  setSelectedProject(project);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => {
          playPop();
          setSelectedProject(null);
        }}
      />
    </section>
  );
}
