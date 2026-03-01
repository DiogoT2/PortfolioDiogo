import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, Copy, CheckCircle2, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "diogo@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll be in touch.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800/50"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl flex-1"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-zinc-50 font-display">
            Let's build something{" "}
            <span className="text-zinc-400 dark:text-zinc-500 italic">great</span> together.
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="flex items-center gap-4 mb-12">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-medium text-zinc-900 dark:text-zinc-50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              {email}
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-zinc-400 dark:text-zinc-500 group-hover:translate-x-2 transition-transform" />
            </a>
            <button
              onClick={handleCopy}
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <Copy className="w-6 h-6" />}
            </button>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:-translate-y-1 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:-translate-y-1 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] hover:-translate-y-1 transition-all">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[480px]"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 flex flex-col gap-6 shadow-xl dark:shadow-none"
          >
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Send a message</h3>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-50 transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-zinc-500 border-t-zinc-50 dark:border-zinc-300 dark:border-t-zinc-900 rounded-full" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
