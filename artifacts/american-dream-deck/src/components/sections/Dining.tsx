import React from 'react';
import { motion } from 'framer-motion';
import diningImg from '@/assets/images/dining.png';

export default function Dining() {
  const categories = [
    "Fine Dining",
    "Casual Concepts",
    "Quick Service",
    "International Food Hall",
    "Coffee & Dessert"
  ];

  return (
    <section id="dining" className="py-32 bg-gradient-to-br from-background to-[#1a1109] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:pl-10"
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Dining & Lifestyle</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight">
              A Culinary Journey.
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
              Over 100 dining concepts ranging from Michelin-starred chefs to beloved casual brands and vibrant food halls. Featuring "The Waterway" — a unique indoor/outdoor dining experience.
            </p>

            <ul className="space-y-4 mb-10">
              {categories.map((cat, i) => (
                <motion.li 
                  key={cat}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center text-gray-300 font-light text-lg"
                >
                  <span className="w-8 h-[1px] bg-primary mr-4" />
                  {cat}
                </motion.li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-sm cursor-pointer group">
              Explore Dining Leasing
              <span className="w-8 h-8 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                →
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm group">
              <img 
                src={diningImg} 
                alt="Fine Dining Restaurant" 
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
