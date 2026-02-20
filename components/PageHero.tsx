"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  pill: string;
}

export default function PageHero({ title, subtitle, pill }: PageHeroProps) {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVars = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background Grid Pattern - subtle variant */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20"></div>

      <div className="grid-container">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="max-w-5xl"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6 md:mb-10">
             <span className="h-px w-8 bg-brand"></span>
             <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-brand">{pill}</span>
          </motion.div>

          <h1 className="text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[0.95] md:leading-[0.9] font-bold tracking-tight uppercase mb-8 md:mb-12">
             <div className="overflow-hidden">
                <motion.span variants={itemVars} className="block" dangerouslySetInnerHTML={{ __html: title }} />
             </div>
          </h1>

          <motion.div variants={itemVars}>
            <p className="text-lg md:text-2xl leading-relaxed opacity-40 font-light max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
