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
    img: waterParkImg,
  },
  {
    title: "Big Snow",
    desc: "The only indoor real-snow ski slope in North America, offering authentic alpine experiences 365 days a year.",
    img: skiSlopeImg,
  },
  {
    title: "SEA LIFE Aquarium",
    desc: "A spectacular underwater world featuring a 360-degree ocean tunnel and thousands of marine creatures.",
    img: aquariumImg,
  },
];

const secondaryAttractions = [
  { name: "Legoland Discovery Center", icon: <Map size={28} /> },
  { name: "NHL-size Ice Rink", icon: <Award size={28} /> },
  { name: "Mirror Maze", icon: <Star size={28} /> },
  { name: "Mini Golf", icon: <Ticket size={28} /> },
];

export default function Entertainment() {
  return (
    <section id="entertainment" className="py-16 md:py-32 bg-[#080808] relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-14 sm:mb-20"
        >
          <div className="gold-line mx-auto" />
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Attractions & Entertainment</h2>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 sm:mb-8">
            You don't just shop.<br />
            <span className="text-glow-gold text-primary italic">You live an experience.</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            {[
              { v: "8", l: "Major Attractions" },
              { v: "6M", l: "Annual Visitors" },
              { v: "1M", l: "Sq Ft Space" },
            ].map((stat) => (
              <div key={stat.l} className="px-4 sm:px-6 py-2 border-l border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white font-serif">{stat.v}</div>
                <div className="text-xs uppercase tracking-widest text-primary">{stat.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Attraction — responsive aspect ratio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative rounded-sm overflow-hidden mb-6 sm:mb-8 group cursor-pointer"
        >
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full relative">
            <img
              src={themeParkImg}
              alt="Nickelodeon Universe"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10 md:p-12 w-full">
              <div className="flex justify-between items-end">
                <div className="max-w-2xl">
                  <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">Nickelodeon Universe</h4>
                  <p className="text-gray-200 text-sm sm:text-lg hidden sm:block">
                    8 acres of indoor theme park thrills — the largest in the Western Hemisphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Attraction Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {mainAttractions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-[3/4] sm:aspect-auto sm:h-80 md:h-[420px] rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8">
                <h4 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed hidden sm:block">{item.desc}</p>
                <div className="mt-3 text-primary text-xs font-bold uppercase tracking-widest hidden sm:block">Learn More</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Attractions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {secondaryAttractions.map((attr, i) => (
            <motion.div
              key={attr.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="bg-card/30 border border-white/5 p-4 sm:p-6 rounded-sm flex flex-col items-center justify-center text-center group hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="text-gray-500 mb-3 group-hover:text-primary transition-colors">{attr.icon}</div>
              <h5 className="text-white font-bold text-xs sm:text-sm tracking-wide">{attr.name}</h5>
            </motion.div>
          ))}
        </div>

        {/* Mega Stat Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary px-6 sm:px-8 py-10 sm:py-12 rounded-sm text-center shadow-[0_0_50px_rgba(201,168,76,0.2)]"
        >
          <p className="text-black font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-4xl mx-auto">
            THE ONLY PROPERTY IN THE US WITH AN INDOOR THEME PARK, WATER PARK, AND SKI SLOPE — <span className="italic">SIMULTANEOUSLY.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
