import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-neutral-950 py-8 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Luxentti — Crafted with care.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
