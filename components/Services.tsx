"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Web Applications", desc: "Next.js & React systems.", tags: ["SaaS", "Internal Tools"] },
    { title: "Mobile Engineering", desc: "Native iOS & Android apps.", tags: ["Swift", "React Native"] },
    { title: "Custom Solutions", desc: "Enterprise level engineering.", tags: ["ERPs", "CRMs"] },
    { title: "Performance", desc: "Speed optimization & SEO.", tags: ["Core Web Vitals"] }
  ];

  return (
    <section id="services" className="py-24 md:py-48 bg-background">
      <div className="grid-container">
        <div className="mb-24">
          <span className="premium-pill">// Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-8 tracking-tighter uppercase">Everything Digital.<br/>One solution partner.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="bg-background p-8 md:p-10 flex flex-col min-h-[250px] md:min-h-[300px]"
            >
              <span className="font-mono text-sm opacity-20 mb-8 md:mb-auto">0{index + 1}</span>
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="opacity-40 text-sm leading-relaxed mb-10 md:mb-8 font-light">{service.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono border border-border px-2 py-0.5 rounded-full opacity-40 uppercase tracking-widest text-brand">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
