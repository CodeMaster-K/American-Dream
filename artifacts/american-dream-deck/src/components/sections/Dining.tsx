import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Wine, Coffee, Pizza, Globe } from 'lucide-react';
import diningWaterwayImg from '@/assets/images/dining_waterway.png';
import diningFoodhallImg from '@/assets/images/dining_foodhall.png';

export default function Dining() {
  const categories = [
    { icon: <Wine size={24} />, name: "Fine Dining", desc: "Award-winning chef-driven experiences" },
    { icon: <Utensils size={24} />, name: "The Waterway", desc: "Unique indoor canal-side dining" },
    { icon: <Globe size={24} />, name: "International Food Hall", desc: "Cuisines from 20+ countries" },
    { icon: <Pizza size={24} />, name: "Quick Concepts", desc: "Fast-casual favorites & grab-and-go" },
    { icon: <Coffee size={24} />, name: "Coffee & Dessert", desc: "Artisan cafes and dessert destinations" }
  ];

  return (
    <section id="dining" className="py-32 bg-background relative overflow-hidden">
      {/* Top Hero Section for Dining */}
      <div className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-sm overflow-hidden aspect-[21/9] w-full group"
        >
          <img 
            src={diningWaterwayImg} 
            alt="The Waterway Dining" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Dining & Lifestyle</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white font-bold mb-4 leading-tight text-glow-gold">
              A Culinary Journey.
            </h3>
            <p className="text-xl text-gray-300 font-light">
              Over 100 dining concepts ranging from Michelin-starred chefs to vibrant international food halls.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { v: "100+", l: "Restaurants" },
                { v: "20+", l: "Global Cuisines" },
                { v: "$180M", l: "Annual Food Revenue" },
                { v: "4.2", l: "Stars Avg Rating" }
              ].map((stat, i) => (
                <div key={stat.l} className="border-t border-white/10 pt-4">
                  <div className="text-4xl font-serif text-white mb-1">{stat.v}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.l}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-6">Key Destinations</h4>
              <ul className="space-y-4">
                {['The Waterway (Indoor Canal Dining)', 'Chocolate World', 'Asian Food Market', 'Nosh Food Hall Concept'].map(item => (
                  <li key={item} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src={diningFoodhallImg} 
                alt="Modern Food Hall" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-primary/20 pointer-events-none rounded-sm" />
            </div>
          </motion.div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/40 border border-white/5 p-6 rounded-sm hover:bg-card hover:border-primary/50 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                {cat.icon}
              </div>
              <h4 className="font-serif text-xl text-white font-bold mb-3">{cat.name}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}