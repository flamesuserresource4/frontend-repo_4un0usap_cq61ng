import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — your request was received. We will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Start a Project</h2>
            <p className="mt-3 max-w-lg text-white/70">
              Share a bit about your goals, timeline, and scope. We'll craft a plan
              to elevate your brand's digital presence.
            </p>

            <div className="mt-6 space-y-3 text-white/70">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@luxentti.studio</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 000-1234</p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-neutral-950 p-6 shadow-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Your name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-white/20 focus:ring"
                  placeholder="Mai Wahdan"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-white/20 focus:ring"
                  placeholder="you@brand.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Project details</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-white/20 focus:ring"
                  placeholder="Website scope, timeline, budget, and vision..."
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                <Send className="h-4 w-4" /> Send request
              </button>
              {status && <p className="text-xs text-white/60">{status}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
