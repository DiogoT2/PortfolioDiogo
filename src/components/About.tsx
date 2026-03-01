import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Bridging the gap between{" "}
            <span className="text-zinc-500 italic">design</span> and{" "}
            <span className="text-zinc-500 italic">engineering</span>.
          </h2>
          <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
            I'm a junior developer with a strong foundation in modern web
            technologies. I love turning complex problems into simple,
            beautiful, and intuitive designs. When I'm not coding, you'll find
            me exploring new technologies, contributing to open-source, or
            reading about software architecture.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed">
            My journey started with a curiosity for how things work on the
            internet, which quickly evolved into a passion for building robust
            applications from the ground up.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
            <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="mx-auto text-xs font-mono text-zinc-500">diogo@portfolio:~</div>
            </div>
            <div className="p-6 font-mono text-sm text-zinc-400 flex flex-col gap-4">
              <div>
                <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> whoami
                <br />
                <span className="text-zinc-300">Diogo Trincheiras</span>
              </div>
              <div>
                <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> cat skills.json
                <br />
                <pre className="text-zinc-300 mt-2 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/50 overflow-x-auto">
{`{
  "frontend": ["React", "Next.js", "Tailwind CSS"],
  "backend": ["Node.js", "Express", "PostgreSQL"],
  "languages": ["TypeScript", "JavaScript", "Python"],
  "tools": ["Git", "Docker", "Vercel", "AWS"]
}`}
                </pre>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> 
                <motion.div 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="w-2 h-4 bg-zinc-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
