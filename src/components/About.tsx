import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const experienceData = [
  {
    year: "2024",
    role: "Junior Software Engineer",
    company: "Tech Solutions Inc.",
    description: "Developing scalable web applications using React and Node.js. Improved performance by 30%."
  },
  {
    year: "2023",
    role: "Frontend Intern",
    company: "Creative Studio",
    description: "Built interactive UI components and collaborated with designers to implement pixel-perfect layouts."
  },
  {
    year: "2022",
    role: "Computer Science Degree",
    company: "University of Technology",
    description: "Graduated with honors, specialized in software engineering and web technologies."
  }
];

function Timeline() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl overflow-hidden bg-white/50 dark:bg-zinc-900/20 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer border-none outline-none"
      >
        <span className="font-semibold text-zinc-900 dark:text-zinc-50 font-display text-lg">My Journey</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800/50">
              <div className="relative border-l border-zinc-300 dark:border-zinc-800 py-2 ml-3">
                {experienceData.map((item, index) => (
                  <div key={index} className="mb-8 pl-6 relative last:mb-0">
                    <div className="absolute w-3 h-3 bg-white dark:bg-zinc-950 border-2 border-emerald-500 rounded-full -left-[6.5px] top-1.5" />
                    <div className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mb-1">{item.year}</div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 font-display">{item.role}</h4>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{item.company}</div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-zinc-900 dark:text-zinc-50">
            Bridging the gap between{" "}
            <span className="text-zinc-500 italic">design</span> and{" "}
            <span className="text-zinc-500 italic">engineering</span>.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            I'm a junior developer with a strong foundation in modern web
            technologies. I love turning complex problems into simple,
            beautiful, and intuitive designs. When I'm not coding, you'll find
            me exploring new technologies, contributing to open-source, or
            reading about software architecture.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            My journey started with a curiosity for how things work on the
            internet, which quickly evolved into a passion for building robust
            applications from the ground up.
          </p>

          <Timeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl dark:shadow-none">
            <div className="flex items-center px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 dark:bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 dark:bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 dark:bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="mx-auto text-xs font-mono text-zinc-500 dark:text-zinc-500">diogo@portfolio:~</div>
            </div>
            <div className="p-6 font-mono text-sm text-zinc-600 dark:text-zinc-400 flex flex-col gap-4">
              <div>
                <span className="text-emerald-500 dark:text-emerald-400">➜</span> <span className="text-blue-500 dark:text-blue-400">~</span> whoami
                <br />
                <span className="text-zinc-800 dark:text-zinc-300">Diogo Trincheiras</span>
              </div>
              <div>
                <span className="text-emerald-500 dark:text-emerald-400">➜</span> <span className="text-blue-500 dark:text-blue-400">~</span> cat skills.json
                <br />
                <pre className="text-zinc-800 dark:text-zinc-300 mt-2 bg-white dark:bg-zinc-900/50 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/50 overflow-x-auto shadow-inner">
                  {`{
  "frontend": ["React", "Next.js", "Tailwind CSS"],
  "backend": ["Node.js", "Express", "PostgreSQL"],
  "languages": ["TypeScript", "JavaScript", "Python"],
  "tools": ["Git", "Docker", "Vercel", "AWS"]
}`}
                </pre>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 dark:text-emerald-400">➜</span> <span className="text-blue-500 dark:text-blue-400">~</span>
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
