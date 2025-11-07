import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-neutral-950/90 backdrop-blur py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8">
          {/* Top divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Brand and mission */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-lg font-semibold tracking-wide">Luxentti — Mai Wahdan</p>
              <p className="mt-1 text-sm text-white/70">
                Luxury digital studio crafting premium, high‑performance experiences. استوديو رقمي
                فاخر يوازن بين الجمال والدقة.
              </p>
            </div>

            {/* Quick links */}
            <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a
                href="https://www.instagram.com/luxentti?igsh=YjZzM25mNjkyY2R3"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </nav>
          </div>

          {/* Contact row */}
          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
            <div className="flex flex-col gap-1 text-sm text-white/70">
              <a href="mailto:hello@luxentti.studio" className="hover:text-white">hello@luxentti.studio</a>
              <a href="tel:+15550001234" className="hover:text-white">+1 (555) 000-1234</a>
            </div>
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Luxentti. All rights reserved — كافة الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
