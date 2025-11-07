import React from 'react';
import { motion } from 'framer-motion';
import { Star, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Avant-Garde Fashion Editorial',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    tags: ['Art Direction', 'Web Design', 'Motion'],
  },
  {
    title: 'Futurist Product Launch',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop',
    tags: ['Brand', '3D', 'Landing'],
  },
  {
    title: 'Luxury Interior Studio',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop',
    tags: ['Portfolio', 'E-commerce', 'Strategy'],
  },
];

const WorkCard = ({ item }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group relative overflow-hidden rounded-2xl bg-neutral-900"
  >
    <img
      src={item.image}
      alt={item.title}
      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 backdrop-blur"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const WorkShowcase = () => {
  return (
    <section id="work" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
            <p className="mt-2 max-w-xl text-white/70">
              A curated collection highlighting high-impact projects across luxury,
              fashion, and technology.
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Rocket className="h-5 w-5 text-white/70" />
            <span className="text-sm text-white/70">Performance-first builds</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.title} item={p} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-white/70">
          <Star className="h-5 w-5" />
          <p className="text-sm">
            Want your brand to stand out? Let's craft a bespoke digital experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
