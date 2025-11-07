import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl font-semibold sm:text-3xl">About Mai Wahdan — Luxentti</h2>
            <p className="mt-4 text-white/80">
              Luxentti is a luxury digital studio led by Mai Wahdan, dedicated to crafting
              premium, modern web experiences that merge aesthetics with performance.
              From strategy and brand systems to interactive product sites, we shape
              experiences that feel effortless, intentional, and alive.
            </p>
            <p className="mt-3 text-white/70">
              حلول رقمية مُصمّمة خصيصًا لمي وهدان — توازن بين الفخامة والابتكار، مع عناية
              فائقة بالتفاصيل والأداء.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div>
                <p className="font-medium text-white">Focus</p>
                <p>Luxury, Fashion, Tech</p>
              </div>
              <div>
                <p className="font-medium text-white">Expertise</p>
                <p>Web, Brand, Motion</p>
              </div>
              <div>
                <p className="font-medium text-white">Approach</p>
                <p>Strategy → Design → Build</p>
              </div>
              <div>
                <p className="font-medium text-white">Results</p>
                <p>Premium, performant, lasting</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/10 to-blue-500/20 p-1">
              <div className="rounded-2xl bg-neutral-900 p-6">
                <p className="text-sm text-white/80">
                  "We design with intention and build with precision. Every interaction
                  should feel as delightful as it is functional."
                </p>
                <p className="mt-4 text-sm font-medium text-white">— Mai Wahdan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
