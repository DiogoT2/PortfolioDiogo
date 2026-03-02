import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export interface ProjectData {
    title: string;
    desc: string;
    image: string;
    tags: string[];
    link: string;
    github: string;
    content?: React.ReactNode;
}

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [project]);

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-zinc-950/20 dark:bg-zinc-950/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        layoutId={`project-${project.title}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full h-full md:h-[90vh] md:max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                    >
                        {/* Header / Nav */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-20">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors font-medium text-sm"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Projects
                            </button>

                            <div className="flex items-center gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors bg-zinc-100 dark:bg-zinc-800 rounded-full"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 py-2 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-500 hover:bg-emerald-600 rounded-full transition-colors"
                                >
                                    Visit Site <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto flex-grow scrollbar-none">
                            <div className="relative h-64 md:h-96 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                                <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 pr-6">
                                    <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                                        {project.title}
                                    </h1>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-mono text-zinc-300 bg-zinc-800/80 backdrop-blur-md rounded-full border border-zinc-700/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-12 max-w-3xl mx-auto">
                                {project.content ? (
                                    <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
                                        {project.content}
                                    </div>
                                ) : (
                                    <div className="text-zinc-500 italic text-center py-12">
                                        Detailed case study coming soon.
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
