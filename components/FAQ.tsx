"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What can I send you?",
    a: "Anything digital solutions. Mobile apps, CRM builds, backend integrations, e-commerce systems, internal tools. If it involves code and users, we build it."
  },
  {
    q: "How fast will I get my work?",
    a: "Most engineering requests ship in 3-5 business days. Larger systems are deliverable in 2-4 week sprints. We prioritize quality without sacrificing velocity."
  },
  {
    q: "Can I pause or cancel?",
    a: "Yes. Pause or cancel anytime. You only pay for active development cycles. No lock-ins, no corporate red tape."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-48 bg-background border-t border-border">
      <div className="grid-container">
        <div className="grid-layout">
          <div className="col-span-12 lg:col-span-4 sticky top-32 h-fit mb-16 lg:mb-0">
            <span className="premium-pill">// FAQ</span>
            <h2 className="text-4xl font-bold mt-8 tracking-tighter uppercase">Common questions.</h2>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col border-t border-border">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-12 flex justify-between items-center text-left hover:text-brand transition-colors group"
                  >
                    <span className="text-xl md:text-3xl font-bold tracking-tight pr-8">{faq.q}</span>
                    <div className="h-8 w-8 relative flex items-center justify-center opacity-40 group-hover:opacity-100">
                       <Plus className={`absolute transition-transform duration-300 ${openIndex === i ? "rotate-90 scale-0" : ""}`} size={24} />
                       <Minus className={`absolute transition-transform duration-300 ${openIndex === i ? "" : "rotate-90 scale-0"}`} size={24} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-12 opacity-40 text-lg md:text-xl leading-relaxed max-w-2xl font-light italic">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
