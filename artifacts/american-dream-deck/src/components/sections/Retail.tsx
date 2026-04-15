import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import retailCorridorImg from '@/assets/images/retail_corridor.png';
import retailFlagshipImg from '@/assets/images/retail_flagship.png';

export default function Retail() {
  const brands = [
    "Nike", "Zara", "H&M", "Uniqlo", "Apple", "Samsung", "Lego", "Sephora",
    "Victoria's Secret", "Forever 21", "Bath & Body Works", "Foot Locker",
    "GameStop", "Coach", "Tory Burch", "Kate Spade", "Steve Madden",
    "Pandora", "Kay Jewelers",
  ];

  return (
    <section id="retail" className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-16 sm:mb-20">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="gold-line" />
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Retail</h2>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-6 sm:mb-8 leading-tight">
              The country's most diverse <span className="text-primary">&amp;</span> high-traffic retail environment.
            </h3>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              From monumental flagships to emerging digital-native brands making their physical debut, American Dream offers 450+ retail spaces designed for discovery and scale.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-10">
              {[
                { v: "450+", l: "Retail Tenants" },
                { v: "50+", l: "First-to-Market" },
                { v: "3M", l: "Sq Ft Retail Space" },
                { v: "12+", l: "Anchor Stores" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary/40 pl-4 hover:border-primary transition-colors">
                  <div className="text-3xl sm:text-4xl font-serif text-white mb-1">{s.v}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>

            <Button
              data-testid="button-retail-leasing"
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-black font-bold tracking-widest uppercase rounded-sm transition-all px-8 py-5 text-sm"
            >
              View Leasing Opportunities
            </Button>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            {/* On mobile/tablet: stacked images without absolute overlap */}
            <div className="flex flex-col sm:flex-row lg:block gap-4 sm:gap-6">
              {/* Primary image */}
              <div className="relative w-full sm:w-3/5 lg:w-3/4 lg:ml-auto aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group">
                <img
                  src={retailCorridorImg}
                  alt="Retail Corridor"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
              </div>
              {/* Secondary image */}
              <div className="relative w-full sm:w-2/5 lg:w-2/3 aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group shadow-2xl lg:absolute lg:bottom-0 lg:-left-4">
                <img
                  src={retailFlagshipImg}
                  alt="Flagship Store"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 border border-primary/30 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tenant Mix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-sm mb-16 sm:mb-20"
        >
          <h4 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-8 text-center">Tenant Mix</h4>
          <div className="space-y-5">
            {[
              { name: "Apparel & Fashion", pct: 35 },
              { name: "Dining & Food", pct: 25 },
              { name: "Entertainment", pct: 15 },
              { name: "Electronics & Tech", pct: 15 },
              { name: "Specialty & Other", pct: 10 },
            ].map((cat, i) => (
              <div key={cat.name} className="flex items-center gap-3 sm:gap-4">
                <div className="w-32 sm:w-48 text-xs sm:text-sm text-gray-300 uppercase tracking-wider flex-shrink-0">{cat.name}</div>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-primary progress-shine"
                  />
                </div>
                <div className="w-10 text-right text-primary font-bold text-sm flex-shrink-0">{cat.pct}%</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Brand Ticker */}
        <div className="relative w-full overflow-hidden flex items-center h-16 border-y border-white/5 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex whitespace-nowrap animate-ticker">
            {[0, 1].map((d) => (
              <span key={d} className="text-xl sm:text-2xl md:text-3xl font-serif text-white flex items-center gap-12 px-8">
                {brands.map((brand, i) => (
                  <span key={`${d}-${i}`} className={i % 2 === 0 ? 'font-bold' : 'font-light'}>
                    {brand}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
