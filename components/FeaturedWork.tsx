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
    <section id="work" className="py-24 md:py-48 bg-zinc-950 text-white">
      <div className="grid-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest opacity-40">// Featured work</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tighter">Crafting digital<br/>masterpieces.</h2>
          </div>
          <p className="max-w-xs text-sm opacity-60 leading-relaxed italic">
            &quot;The details most teams skip are the details we care about most.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                   {/* Abstract SVG or Pattern */}
                   <div style={{ background: project.color, filter: 'blur(100px)' }} className="w-64 h-64 rounded-full" />
                </div>
                <div className="absolute inset-x-8 bottom-8 flex justify-between items-end z-10">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest block mb-2 opacity-60">{project.category}</span>
                    <h3 className="text-3xl font-bold tracking-tight">{project.name}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    →
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
