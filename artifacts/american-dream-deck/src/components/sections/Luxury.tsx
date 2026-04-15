import React from 'react';
import { motion } from 'framer-motion';
import luxuryInteriorImg from '@/assets/images/luxury_interior.png';
import luxuryHallImg from '@/assets/images/luxury_hall.png';

export default function Luxury() {
  const luxuryBrands = [
    'Hermès', 'Louis Vuitton', 'Tiffany & Co.', 'Saint Laurent',
    'Gucci', 'Dior', 'Valentino', 'Burberry',
    'Salvatore Ferragamo', 'Rolex', 'Swarovski',
  ];

  return (
    <section id="luxury" className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="gold-line" />
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">The Collections</h2>
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-8 leading-tight">
              The Luxury Wing
            </h3>

            <div className="pl-5 border-l border-primary/40 mb-10">
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-300 italic leading-relaxed">
                "The only address in the New York Metropolitan area where true luxury meets true scale."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {[
                { v: "200+", l: "Premium Brands" },
                { v: "#1", l: "Sales per Sq Ft in Tri-State" },
                { v: "$8K+", l: "Avg Transaction" },
                { v: "60%", l: "International Mix" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-serif text-white mb-1">{stat.v}</div>
                  <div className="text-xs text-primary uppercase tracking-widest">{stat.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            {/* Mobile: single image stack */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Main image */}
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-white/10">
                <div className="absolute inset-4 border border-primary/20 z-20 pointer-events-none rounded-sm" />
                <img
                  src={luxuryInteriorImg}
                  alt="Luxury Interior"
                  className="w-full h-full object-cover brightness-75"
                />
              </div>
              {/* Overlay image — hidden on small screens to prevent overflow */}
              <div className="hidden sm:block absolute -bottom-12 -left-10 lg:-bottom-16 lg:-left-16 w-1/2 aspect-square rounded-sm overflow-hidden border-4 border-[#0a0a0a] shadow-2xl z-10">
                <img
                  src={luxuryHallImg}
                  alt="Luxury Hall"
                  className="w-full h-full object-cover brightness-90"
                />
              </div>
              {/* On mobile, show second image below the first */}
              <div className="sm:hidden mt-4 w-2/3 aspect-square rounded-sm overflow-hidden">
                <img
                  src={luxuryHallImg}
                  alt="Luxury Hall"
                  className="w-full h-full object-cover brightness-90"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 sm:mt-28 lg:mt-36"
        >
          <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8 max-w-5xl mx-auto">
            {luxuryBrands.map((brand) => (
              <div
                key={brand}
                className="font-serif text-lg sm:text-xl md:text-2xl text-gray-500 hover:text-white transition-colors cursor-pointer relative group"
              >
                {brand}
                <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
