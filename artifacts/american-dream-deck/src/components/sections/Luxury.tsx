import React from 'react';
import { motion } from 'framer-motion';
import luxuryImg from '@/assets/images/luxury.png';

export default function Luxury() {
  return (
    <section id="luxury" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">The Collections</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              The Luxury Wing
            </h3>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              The only luxury destination in the tri-state area that pairs world-class brands with 40 million annual footsteps.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-video w-full max-w-6xl mx-auto overflow-hidden rounded-sm group"
          >
            <img 
              src={luxuryImg} 
              alt="Luxury Retail Interior" 
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.1] brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
            
            {/* Elegant overlay frame */}
            <div className="absolute inset-6 border border-white/20 pointer-events-none transition-all duration-700 group-hover:inset-4" />
          </motion.div>

          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Hermès', 'Tiffany & Co.', 'Louis Vuitton', 'Saint Laurent'].map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                className="py-6 border-t border-b border-white/5 hover:border-primary/50 transition-colors"
              >
                <span className="font-serif text-xl md:text-2xl text-gray-300">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
