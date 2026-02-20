"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const IMG_SRC = "data:image/png;base64,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";
    const CHARS = "{}[]()<>/|$#@%&*+=;:.,0123456789abcdefABCDEF?!~^";
    let particles: Particle[] = [];
    let mx = -9999, my = -9999;
    let rafId: number;
    let built = false;

    class Particle {
      x: number; y: number;
      char: string;
      baseColor: [number, number, number, number];
      currentR: number; currentG: number; currentB: number; currentA: number;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        // Fixed char — never changes
        this.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        this.size = 6 + Math.random() * 4;

        // Base yellow color
        const r = Math.random();
        if (r < 0.6) {
          this.baseColor = [250, 255, 0, 0.4 + Math.random() * 0.5];
        } else if (r < 0.85) {
          this.baseColor = [250, 255, 0, 0.1 + Math.random() * 0.2];
        } else {
          this.baseColor = [255, 255, 255, 0.05 + Math.random() * 0.1];
        }

        [this.currentR, this.currentG, this.currentB, this.currentA] = this.baseColor;
      }

      update(mx: number, my: number) {
        const dx = this.x - mx, dy = this.y - my;
        const distSq = dx * dx + dy * dy;
        const R = 110;

        if (distSq < R * R) {
          // Lerp → white based on proximity (faster reaction)
          const dist = Math.sqrt(distSq);
          const t = (1 - dist / R) * 0.25; 
          this.currentR += (255 - this.currentR) * t;
          this.currentG += (255 - this.currentG) * t;
          this.currentB += (255 - this.currentB) * t;
          this.currentA += (1   - this.currentA) * t;
        } else {
          // Lerp back to base (faster return)
          const s = 0.12; 
          this.currentR += (this.baseColor[0] - this.currentR) * s;
          this.currentG += (this.baseColor[1] - this.currentG) * s;
          this.currentB += (this.baseColor[2] - this.currentB) * s;
          this.currentA += (this.baseColor[3] - this.currentA) * s;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.size}px monospace`;
        ctx.fillStyle = `rgba(${Math.round(this.currentR)},${Math.round(this.currentG)},${Math.round(this.currentB)},${this.currentA.toFixed(3)})`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    const buildParticles = (W: number, H: number) => {
      particles = [];
      if (W === 0 || H === 0) return;

      const off = document.createElement("canvas");
      off.width = W; off.height = H;
      const oc = off.getContext("2d", { willReadFrequently: true });
      if (!oc) return;

      const img = new Image();
      img.onload = () => {
        const size = Math.min(W, H) * 0.90;
        const drawX = (W - size) / 2;
        const drawY = (H - size) / 2;
        oc.drawImage(img, drawX, drawY, size, size);

        const imgData = oc.getImageData(0, 0, W, H);
        const data = imgData.data;
        const spacing = 9;

        for (let y = 0; y < H; y += spacing) {
          for (let x = 0; x < W; x += spacing) {
            const idx = (y * W + x) * 4;
            // mask is white-on-transparent PNG — check alpha channel
            if (data[idx + 3] > 128) particles.push(new Particle(x, y));
          }
        }
        built = false;
      };
      img.src = IMG_SRC;
    };

    const resize = () => {
      if (built) return;
      built = true;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles(rect.width, rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const p of particles) { p.update(mx, my); p.draw(ctx); }
      rafId = requestAnimationFrame(animate);
    };

    const ro = new ResizeObserver(() => { built = false; resize(); });
    ro.observe(canvas);

    resize();
    animate();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ro.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-24 pt-40 overflow-hidden">

      <div className="grid-container w-full relative z-10">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVars} className="flex items-center gap-4">
            <div className="h-px w-12 bg-brand" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-brand">
              Digital Engineering Studio
            </span>
          </motion.div>

          {/* ── Headline + Gecko responsive container ─────────────────────── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-8 sm:gap-0">

            {/* Headline */}
            <h1 className="flex flex-col text-[12vw] sm:text-[8vw] lg:text-[7.5vw] leading-[0.85] font-bold tracking-[-0.04em] uppercase sm:shrink-0 self-start sm:self-center">
              <div className="overflow-hidden">
                <motion.span variants={itemVars} className="block">
                  Websites
                </motion.span>
              </div>
              <div className="overflow-hidden flex items-baseline gap-4 sm:gap-8">
                <motion.span variants={itemVars} className="block text-brand">
                  &amp;
                </motion.span>
                <motion.span variants={itemVars} className="block">
                  Apps
                </motion.span>
              </div>
            </h1>

            {/* Gecko canvas — responsive sizing */}
            <motion.div
              variants={itemVars}
              className="shrink-0 w-full sm:w-auto"
              style={{
                width:  "clamp(240px, 35vw, 550px)",
                height: "clamp(240px, 35vw, 550px)",
              }}
            >
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ opacity: 0.85 }}
              />
            </motion.div>
          </div>

          {/* Description + focus columns */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-6 mt-4 md:mt-6 items-start">
            <motion.div variants={itemVars} className="col-span-12 lg:col-span-6">
              <p className="text-lg md:text-2xl leading-[1.4] opacity-50 font-light max-w-xl">
                axylot is an elite engineering team dedicated to crafting
                digital products that push boundaries. Focused on speed, built
                for scale, and designed for conversion.
              </p>
            </motion.div>

            <motion.div
              variants={itemVars}
              className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col gap-10 md:gap-8"
            >
              {[
                { index: "01", label: "Scalable Core Systems" },
                { index: "02", label: "Dynamic Web Experiences" },
              ].map(({ index, label }) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
                    Current Focus / {index}
                  </span>
                  <span className="text-2xl md:text-4xl font-bold uppercase group-hover:text-brand transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}