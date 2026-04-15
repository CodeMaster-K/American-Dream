import React from 'react';
import { motion } from 'framer-motion';
import { Map, Ticket, Award, Star } from 'lucide-react';
import themeParkImg from '@/assets/images/entertainment_themepark.png';
import waterParkImg from '@/assets/images/entertainment_waterpark.png';
import skiSlopeImg from '@/assets/images/entertainment_ski.png';
import aquariumImg from '@/assets/images/entertainment_aquarium.png';

const mainAttractions = [
  {
    title: "DreamWorks Water Park",
    desc: "The largest indoor water park in North America featuring massive wave pools and tropical climate year-round.",
    img: waterParkImg
  },
  {
    title: "Big Snow",
    desc: "The only indoor real-snow ski slope in North America, offering authentic alpine experiences 365 days a year.",
    img: skiSlopeImg
  },
  {
    title: "SEA LIFE Aquarium",
    desc: "A spectacular underwater world featuring a 360-degree ocean tunnel and thousands of marine creatures.",
    img: aquariumImg
  }
];

const secondaryAttractions = [
  { name: "Legoland Discovery Center", icon: <Map size={32} /> },
  { name: "NHL-size Ice Rink", icon: <Award size={32} /> },
  { name: "Mirror Maze", icon: <Star size={32} /> },
  { name: "Mini Golf", icon: <Ticket size={32} /> }
];

export default function Entertainment() {
  return (
    <section id="entertainment" className="py-32 bg-[#080808] relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <div className="gold-line mx-auto" />
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Attractions & Entertainment</h2>
          <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-8">
            You don't just shop.<br />
            <span className="text-glow-gold text-primary italic">You live an experience.</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { v: "8", l: "Major Attractions" },
              { v: "6M", l: "Annual Visitors" },
              { v: "1M", l: "Sq Ft Space" }
            ].map(stat => (
              <div key={stat.l} className="px-6 py-2 border-l border-white/20">
                <div className="text-3xl font-bold text-white font-serif">{stat.v}</div>
                <div className="text-xs uppercase tracking-widest text-primary">{stat.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Attraction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative aspect-[21/9] rounded-sm overflow-hidden mb-8 group cursor-pointer"
        >
          <img 
            src={themeParkImg} 
            alt="Nickelodeon Universe" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex justify-between items-end">
              <div className="max-w-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Nickelodeon Universe</h4>
                <p className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  8 acres of indoor theme park thrills — the largest in the Western Hemisphere.
                </p>
              </div>
              <div className="hidden md:flex text-primary font-bold tracking-widest uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center gap-2">
                Explore <span className="text-xl">→</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {mainAttractions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative h-[450px] rounded-sm overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-serif text-3xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
                <div className="mt-4 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Attractions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {secondaryAttractions.map((attr, i) => (
            <motion.div
              key={attr.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
              className="bg-card/30 border border-white/5 p-6 rounded-sm flex flex-col items-center justify-center text-center group hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="text-gray-500 mb-4 group-hover:text-primary transition-colors">{attr.icon}</div>
              <h5 className="text-white font-bold text-sm tracking-wide">{attr.name}</h5>
            </motion.div>
          ))}
        </div>

        {/* Mega Stat */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary px-8 py-12 rounded-sm text-center shadow-[0_0_50px_rgba(201,168,76,0.2)]"
        >
          <p className="text-black font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-4xl mx-auto">
            THE ONLY PROPERTY IN THE US WITH AN INDOOR THEME PARK, WATER PARK, AND SKI SLOPE — <span className="italic">SIMULTANEOUSLY.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}