"use client";


export default function ComparisonTable() {
  const columns = ["Traditional Agency", "Freelancer", "Axylot"];
  
  const rows = [
    { cat: "Who does the work", vals: ["Account Managers", "One person", "Senior Engineers"] },
    { cat: "Pricing model", vals: ["Project-based (high)", "Hourly (variable)", "One monthly fee"] },
    { cat: "Turnaround", vals: ["Months", "Unpredictable", "2-5 business days"] },
    { cat: "Communication", vals: ["Email/Tickets", "Direct", "Your Slack"] },
    { cat: "Commitment", vals: ["Long contracts", "Job by job", "Cancel anytime"] }
  ];

  return (
    <section className="py-24 md:py-48 bg-background border-t border-border">
      <div className="grid-container">
        <div className="mb-24">
          <span className="premium-pill">// Why axylot</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-8 tracking-tighter">Engineered different.</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono border-collapse">
            <thead>
              <tr className="border-b border-border/50">
                <th className="py-8 opacity-20 text-[10px] uppercase tracking-widest">Category</th>
                {columns.map(col => (
                  <th key={col} className={`py-8 text-[10px] uppercase tracking-widest px-8 ${col === "Axylot" ? "text-brand" : "opacity-20"}`}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/10 group">
                  <td className="py-8 opacity-60 text-sm group-hover:opacity-100 transition-opacity pr-8">{row.cat}</td>
                  {row.vals.map((val, idx) => (
                    <td key={idx} className={`py-8 px-8 text-sm ${idx === 2 ? "bg-white/5 font-bold" : "opacity-40"}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
