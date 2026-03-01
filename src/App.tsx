import { lazy, Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import ThemeToggle from "./components/ThemeToggle";
import Loader from "./components/Loader";
import SkillsMarquee from "./components/SkillsMarquee";
import BackToTop from "./components/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { Toaster } from "sonner";

// Lazy-loaded components for better initial load performance (Code splitting)
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <div className={`min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-200 transition-colors duration-300 ${loading ? 'overflow-hidden max-h-screen' : ''}`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <ErrorBoundary>
          <Suspense fallback={<div className="h-[20vh] flex items-center justify-center font-mono text-zinc-500">Loading section...</div>}>
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ThemeToggle />
      <BackToTop />
      <Toaster position="bottom-right" theme="system" />
    </div>
  );
}
