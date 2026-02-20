"use client";

const COLUMNS = Array.from({ length: 13 }, (_, i) => i);

export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[40] opacity-[0.03]">
      <div className="grid-container h-full">
        <div className="grid-layout h-full">
          {COLUMNS.map((i) => (
            <div key={i} className="h-full w-px bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
}
