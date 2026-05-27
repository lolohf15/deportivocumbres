"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-club.jpg"
        alt="Club Deportivo Cumbres"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Overlay — subtle, preserves the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-lime origin-left"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-lime text-xs font-semibold tracking-[0.35em] uppercase mb-5">
            Fundado en 1977 · Monterrey, Nuevo León
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-5">
            Club Deportivo
            <br />
            Cumbres
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-lg leading-relaxed">
            Tradición deportiva, instalaciones premium<br className="hidden sm:block" /> y comunidad familiar desde 1977.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
