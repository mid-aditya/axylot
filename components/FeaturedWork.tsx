"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Nebula CRM",
    category: "Custom System / SaaS",
    image: "/p1.jpg", // Placeholder
    color: "#ff75a0"
  },
  {
    name: "Aura Mobile",
    category: "Mobile App / Fintech",
    image: "/p2.jpg", // Placeholder
    color: "#833ab4"
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-48 bg-background text-white">
      <div className="grid-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 text-brand">// Featured work</span>
            <h2 className="text-4xl md:text-7xl font-bold mt-6 tracking-tighter leading-[0.9] uppercase">Crafting digital<br/>masterpieces.</h2>
          </div>
          <p className="max-w-xs text-sm opacity-40 leading-relaxed font-light italic">
            &quot;The details most teams skip are the details we care about most.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-sm bg-card border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   {/* Abstract Glow */}
                   <div style={{ background: project.color, filter: 'blur(120px)' }} className="w-48 h-48 md:w-64 md:h-64 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
                </div>
                <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 flex justify-between items-end z-10">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] block mb-2 opacity-30">{project.category}</span>
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">{project.name}</h3>
                  </div>
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:text-black group-hover:border-brand transition-all duration-300">
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="font-mono text-sm border-b border-white/20 pb-1 hover:border-accent transition-all">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}
