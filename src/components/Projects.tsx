import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Selected Work
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl">
          A collection of projects that showcase my passion for building
          beautiful, functional applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col bg-zinc-900/30 border border-zinc-800/50 rounded-3xl overflow-hidden hover:bg-zinc-800/30 transition-colors"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-6 flex-grow">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-zinc-300 bg-zinc-800/50 rounded-full border border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800/50">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-emerald-400 transition-colors"
                >
                  View Live <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  className="text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
