import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useEffect } from "react";

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    content: React.ReactNode;
}

interface ArticleModalProps {
    article: Article | null;
    onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
    // Lock body scroll when open
    useEffect(() => {
        if (article) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [article]);

    return (
        <AnimatePresence>
            {article && (
                <div className="fixed inset-0 z-[300] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-zinc-950/20 dark:bg-zinc-950/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full h-full md:h-[90vh] md:max-w-4xl bg-white dark:bg-zinc-900 md:rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                    >
                        {/* Header / Nav */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-10">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors font-medium text-sm"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto p-6 md:p-12 scrollbar-none flex-grow">
                            <div className="max-w-2xl mx-auto">
                                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-6">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                                </div>

                                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8 leading-tight">
                                    {article.title}
                                </h1>

                                <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6">
                                    {article.content}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
