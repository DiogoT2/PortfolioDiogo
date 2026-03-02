import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import ArticleModal, { Article } from "./ArticleModal";
import { useSound } from "./SoundContext";

const articles: Article[] = [
    {
        id: "optimizing-react",
        title: "How I Optimized My React App by 40%",
        excerpt: "Deep diving into React 19 concurrent features, lazy loading, and why useMemo isn't always the answer.",
        date: "Mar 02, 2026",
        readTime: "5 min read",
        content: (
            <>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium mb-8">Performance isn't an afterthought; it's a feature. In this post, I detail how I significantly improved the Time to Interactive (TTI) of my portfolio.</p>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">1. The Problem with Eager Loading</h3>
                <p>Initially, all my heavy animated components (like the 3D Tilt Cards) were bundled into the main JS chunk. This meant users had to download megabytes of JS before seeing anything.</p>

                <div className="my-8 p-6 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 font-mono text-sm overflow-x-auto text-zinc-800 dark:text-zinc-300">
                    <code>
            // Bad<br />
                        import Projects from "./Projects";<br /><br />
            // Good<br />
                        const Projects = lazy(() =&gt; import("./Projects"));
                    </code>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">2. Framer Motion and layoutId</h3>
                <p>Animating layout shifts can be expensive. By using <code>layoutId</code> carefully, I avoided reflows and allowed the browser's GPU to handle the heavy lifting via transforms.</p>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-10 mb-4">Conclusion</h3>
                <p>By heavily relying on code splitting and strictly controlling re-renders, the lighthouse score jumped from 72 to 99.</p>
            </>
        )
    },
    {
        id: "design-engineering",
        title: "Bridging Design and Engineering",
        excerpt: "Why the best developers are those who understand typography, spacing, and micro-interactions.",
        date: "Feb 15, 2026",
        readTime: "4 min read",
        content: (
            <>
                <p>The gap between a Figma file and a working React component is where magic happens (or falls apart).</p>
                <p className="mt-4">When a developer understands the *why* behind a designer's decision—why this easing curve, why this specific grey—the end product elevates from functional to emotional.</p>
                <blockquote className="my-8 pl-6 border-l-2 border-emerald-500 italic text-xl text-zinc-600 dark:text-zinc-400">
                    "Design is not just what it looks like and feels like. Design is how it works."
                </blockquote>
                <p>I spend as much time tweaking spring physics in Framer Motion as I do structuring standard SQL queries. That attention to detail is what defines premium web experiences today.</p>
            </>
        )
    }
];

export default function Blog() {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const { playClick, playPop } = useSound();

    return (
        <section id="writing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16"
            >
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
                    Writing
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
                    Thoughts on software engineering, design, and building products.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <AnimatePresence>
                    {articles.map((article, index) => (
                        <motion.div
                            layoutId={`article-${article.id}`}
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => {
                                playClick();
                                setSelectedArticle(article);
                            }}
                            className="group cursor-pointer p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                                <span>{article.date}</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <span>{article.readTime}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-emerald-500 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <ArticleModal
                article={selectedArticle}
                onClose={() => {
                    playPop();
                    setSelectedArticle(null);
                }}
            />
        </section>
    );
}
