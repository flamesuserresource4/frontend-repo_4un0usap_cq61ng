import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Top Navigation inside hero for a clean, immersive start */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500" />
            <span className="text-lg font-semibold tracking-wide">Luxentti — Mai Wahdan</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#work" className="text-sm text-white/80 transition hover:text-white">Work</a>
            <a href="#about" className="text-sm text-white/80 transition hover:text-white">About</a>
            <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
            <a
              href="https://www.instagram.com/luxentti?igsh=YjZzM25mNjkyY2R3"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/80 transition hover:text-white"
            >
              Instagram
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* 3D Spline Scene as immersive background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for better text contrast; non-blocking for interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Luxury digital studio led by Mai Wahdan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
          >
            Luxentti crafts premium, modern websites blending interaction, performance, and aesthetic clarity.
            حلول رقمية مخصصة تجمع بين الإبداع والدقة — خصيصًا لعلامتك.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#work"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Explore Work
            </a>
            <a
              href="https://www.instagram.com/luxentti?igsh=YjZzM25mNjkyY2R3"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Instagram
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Collaborate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
