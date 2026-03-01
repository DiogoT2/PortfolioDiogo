import { motion } from "motion/react";

const skills = [
    "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "Express", "Docker", "Git", "Figma",
    "Python", "AWS", "Framer Motion", "GraphQL"
];

export default function SkillsMarquee() {
    return (
        <div className="relative py-12 flex overflow-hidden border-y border-zinc-200 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/10">
            {/* Gradient masks for smooth edge fading */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10" />

            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-12 px-6 items-center flex-nowrap min-w-max"
            >
                {/* Double the array for seamless infinite loop */}
                {[...skills, ...skills, ...skills].map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-6 text-2xl md:text-5xl font-display font-bold text-zinc-300 dark:text-zinc-800/80"
                    >
                        <span className="text-emerald-500/30 dark:text-emerald-400/20 text-3xl">✦</span>
                        {skill}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
