import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-800/50"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Let's build something{" "}
            <span className="text-zinc-500 italic">great</span> together.
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-medium hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            hello@example.com
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-zinc-500 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-auto"
        >
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col gap-6">
            <h3 className="text-xl font-bold tracking-tight">Connect</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-50 transition-colors text-lg"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-50 transition-colors text-lg"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-50 transition-colors text-lg"
              >
                Twitter
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
