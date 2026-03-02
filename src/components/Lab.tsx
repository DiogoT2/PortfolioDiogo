import { motion, useDragControls } from "motion/react";
import { Move } from "lucide-react";

export default function Lab() {
    const dragControls = useDragControls();

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
                        The Lab <span className="text-emerald-500">🧪</span>
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        A sandbox for UI experiments, micro-interactions, and creative coding.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Experiment 1: Draggable Physics */}
                <div className="h-80 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 overflow-hidden relative flex items-center justify-center">
                    <div className="absolute top-6 left-6 text-sm font-mono text-zinc-500">01. spring_physics</div>

                    <motion.div
                        drag
                        dragControls={dragControls}
                        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                        dragElastic={0.2}
                        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                        whileHover={{ scale: 1.05 }}
                        className="w-32 h-32 bg-gradient-to-tr from-emerald-500 to-sky-500 rounded-3xl shadow-2xl flex items-center justify-center cursor-grab"
                    >
                        <Move className="text-white w-8 h-8 opacity-50 pointer-events-none" />
                    </motion.div>
                    <p className="absolute bottom-6 text-xs font-mono text-zinc-400 dark:text-zinc-500 pointer-events-none text-center w-full">Grab and throw element</p>
                </div>

                {/* Experiment 2: SVG Morph Animation */}
                <div className="h-80 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 overflow-hidden relative flex items-center justify-center group">
                    <div className="absolute top-6 left-6 text-sm font-mono text-zinc-500">02. svg_morph</div>

                    <motion.svg width="120" height="120" viewBox="0 0 100 100" className="overflow-visible">
                        <motion.path
                            d="M 50 10 C 20 10, 10 30, 10 50 C 10 70, 20 90, 50 90 C 80 90, 90 70, 90 50 C 90 30, 80 10, 50 10 Z"
                            fill="transparent"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="text-emerald-500"
                            initial={{ pathLength: 0, rotate: 0 }}
                            animate={{
                                pathLength: [0, 1, 0],
                                rotate: 360,
                                d: [
                                    "M 50 10 C 20 10, 10 30, 10 50 C 10 70, 20 90, 50 90 C 80 90, 90 70, 90 50 C 90 30, 80 10, 50 10 Z",
                                    "M 50 10 C 10 10, 10 90, 50 90 C 90 90, 90 10, 50 10 Z",
                                    "M 50 10 C 20 10, 10 30, 10 50 C 10 70, 20 90, 50 90 C 80 90, 90 70, 90 50 C 90 30, 80 10, 50 10 Z"
                                ]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.svg>
                </div>
            </div>
        </section>
    );
}
