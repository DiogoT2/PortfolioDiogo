import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Diogo is an exceptional developer who consistently delivers high-quality work. His keen eye for detail and problem-solving skills make him a valuable asset to any project.",
        author: "Sarah Jenkins",
        role: "Senior Product Manager",
    },
    {
        quote: "Working with Diogo was a seamless experience. He translated our complex requirements into an intuitive and beautiful user interface effortlessly.",
        author: "Michael Chen",
        role: "Lead Designer at CreativeStudio",
    },
    {
        quote: "Diogo has a rare combination of technical prowess and design sensibility. His contributions significantly elevated our platform's user experience.",
        author: "Emily Rodrigues",
        role: "Engineering Manager",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
            >
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
                    What People Say
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    I've had the pleasure of collaborating with some amazing people.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex flex-col h-full shadow-lg dark:shadow-none hover:shadow-xl transition-shadow relative overflow-hidden"
                    >
                        <Quote className="w-10 h-10 text-emerald-500/10 absolute top-6 right-6" />

                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 flex-grow relative z-10 italic">
                            "{testimonial.quote}"
                        </p>

                        <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800/60 relative z-10">
                            <p className="font-bold text-zinc-900 dark:text-zinc-50">{testimonial.author}</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{testimonial.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
