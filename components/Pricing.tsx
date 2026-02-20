"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-48 bg-background">
      <div className="grid-container">
        <div className="text-center mb-16 md:mb-24 px-4">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-40">// Transparent pricing</span>
          <h2 className="text-4xl md:text-7xl font-bold mt-4 tracking-tighter uppercase leading-[1.1]">Simple tiers. <br className="xs:hidden"/>No surprises.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Active Tier */}
          <div className="p-8 md:p-12 rounded-2xl border border-border bg-card flex flex-col hover:border-brand transition-colors">
            <div className="mb-10 md:mb-12">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-foreground text-background px-3 py-1 rounded-full">Active</span>
              <p className="mt-6 text-sm opacity-60 leading-relaxed">Perfect for ongoing development and consistent iterations.</p>
            </div>
            
            <div className="mb-8 md:mb-12">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">$8,500</span>
              <span className="text-sm opacity-40 font-mono"> / month</span>
            </div>

            <ul className="flex-1 flex flex-col gap-5 md:gap-6 mb-10 md:mb-12">
              {[
                "One request at a time",
                "2-5 day turnaround",
                "Unlimited revisions",
                "Direct Slack access",
                "Cancel anytime"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-4 text-sm">
                  <Check size={16} className="text-brand" />
                  <span className="opacity-70">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform">
              Send your first request
            </button>
          </div>

          {/* Embedded Tier */}
          <div className="p-8 md:p-12 rounded-2xl border border-brand bg-foreground text-background flex flex-col hover:shadow-[0_0_50px_rgba(250,255,0,0.15)] transition-all">
            <div className="mb-10 md:mb-12">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-brand text-black px-3 py-1 rounded-full">Embedded</span>
              <p className="mt-6 text-sm opacity-80 leading-relaxed">Your own elastic engineering team. Fast and high bandwidth.</p>
            </div>
            
            <div className="mb-8 md:mb-12">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">$15,000</span>
              <span className="text-sm opacity-60 font-mono"> / month</span>
            </div>

            <ul className="flex-1 flex flex-col gap-5 md:gap-6 mb-10 md:mb-12">
              {[
                "Two requests at a time",
                "Priority 1-3 day turnaround",
                "Everything in Active",
                "Weekly strategy calls",
                "Full-stack team access"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-4 text-sm">
                  <Check size={16} className="text-black" />
                  <span className="opacity-90">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-brand text-black font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform border border-brand">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
