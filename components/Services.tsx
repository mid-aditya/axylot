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
    <section id="services" className="py-24 md:py-48 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="grid-container">
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="premium-pill"
          >
            // Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.015 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mt-8 tracking-tighter uppercase leading-[0.9] cursor-default transition-colors duration-200 hover:text-white/80"
          >
            Everything <span className="text-brand/20 transition-colors duration-200 hover:text-brand">Digital.</span><br/>
            One solution partner.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ backgroundColor: "rgba(250, 255, 0, 0.03)" }}
              className="group bg-background p-8 md:p-10 flex flex-col min-h-[300px] relative transition-all duration-200 cursor-pointer"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-brand opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ width: '0%', height: '0%' }} />
              
              <span className="font-mono text-xs opacity-20 mb-12 md:mb-auto group-hover:opacity-100 group-hover:text-brand transition-all duration-200">
                0{index + 1}
              </span>
              
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-200">
                {service.title}
              </h3>
              
              <p className="opacity-40 text-sm leading-relaxed mb-10 font-light group-hover:opacity-70 transition-opacity">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded-full opacity-40 uppercase tracking-widest group-hover:opacity-100 group-hover:border-brand/40 group-hover:text-brand transition-all duration-200">
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
