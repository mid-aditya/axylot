"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVars = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 pt-40 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-x-0 bottom-0 top-0 -z-10 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      
      <div className="grid-container w-full">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-8 md:gap-12"
        >
          <motion.div variants={itemVars} className="flex items-center gap-4">
             <div className="h-px w-12 bg-brand"></div>
             <span className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-brand">Digital Engineering Studio</span>
          </motion.div>

          <h1 className="flex flex-col text-[14vw] sm:text-[10vw] leading-[0.85] font-bold tracking-[-0.04em] uppercase">
            <div className="overflow-hidden">
              <motion.span variants={itemVars} className="block">Websites</motion.span>
            </div>
            <div className="overflow-hidden flex items-baseline gap-4 sm:gap-8">
              <motion.span variants={itemVars} className="block text-brand">&</motion.span>
              <motion.span variants={itemVars} className="block">Apps</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={itemVars} className="block italic font-light lowercase text-white/20">that grow.</motion.span>
            </div>
          </h1>

          <div className="grid grid-cols-12 gap-y-12 md:gap-6 mt-12 md:mt-16 items-start">
            <motion.div variants={itemVars} className="col-span-12 lg:col-span-6">
              <p className="text-lg md:text-2xl leading-[1.4] opacity-50 font-light max-w-xl">
                axylot is an elite engineering team dedicated to crafting digital products that push boundaries. Focused on speed, built for scale, and designed for conversion.
              </p>
            </motion.div>
            
            <motion.div variants={itemVars} className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col gap-10 md:gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Current Focus / 01</span>
                <span className="text-2xl md:text-4xl font-bold uppercase">Scalable Core Systems</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Current Focus / 02</span>
                <span className="text-2xl md:text-4xl font-bold uppercase">Dynamic Web Experiences</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Strip */}
      <div className="grid-container w-full mt-24 md:mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10"
        >
          {[
            { label: "Client Market Cap", value: "$10B+" },
            { label: "Community Reach", value: "2M+" },
            { label: "Digital Products", value: "40+" },
            { label: "Senior Engineer", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 py-8 md:py-12 border-r border-white/10 last:border-r-0 pl-1 md:pl-0">
               <span className="text-xl sm:text-3xl font-bold uppercase tracking-tighter">{stat.value}</span>
               <span className="text-[9px] uppercase tracking-widest opacity-30 leading-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-[5%] bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 hidden xl:block"></div>
    </section>
  );
}
