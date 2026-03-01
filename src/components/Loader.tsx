import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onComplete }: { onComplete: () => void; key?: string | number }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-6 origin-top"
        >
            <div className="w-full max-w-sm flex flex-col items-center gap-6">
                <div className="font-mono text-zinc-900 dark:text-zinc-50 font-bold text-2xl tracking-tighter">
                    <span className="text-zinc-400 dark:text-zinc-500">{"<"}</span>
                    DIOGO
                    <span className="text-zinc-400 dark:text-zinc-500">{"/>"}</span>
                </div>
                <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest flex justify-between w-full">
                    <span>Loading System</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>
            </div>
        </motion.div>
    );
}
