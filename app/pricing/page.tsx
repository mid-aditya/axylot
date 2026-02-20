import ComparisonTable from "@/components/ComparisonTable";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        pill="// Investment"
        title='Direct <br/><span class="italic text-brand">Partnerships.</span>'
        subtitle="Scale your team with elite senior talent. Zero overhead, maximum output. Monthly bandwidth subscriptions built for growth."
      />

      <Pricing />
      <div className="py-24 bg-card">
        <ComparisonTable />
      </div>

      <div className="py-16 md:py-24 border-t border-border px-6">
         <div className="grid-container text-center max-w-xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-tighter">Ready to scale your product?</h3>
            <button className="w-full sm:w-auto bg-brand text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform text-xs">
               Book a 15-min call
            </button>
         </div>
      </div>
    </div>
  );
}
