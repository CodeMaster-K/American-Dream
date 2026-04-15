import React from 'react';
import { motion } from 'framer-motion';
import themeParkImg from '@/assets/images/themepark.png';
import waterParkImg from '@/assets/images/waterpark.png';
import skiSlopeImg from '@/assets/images/skislope.png';

const attractions = [
  {
    title: "Nickelodeon Universe",
    desc: "8 million sq ft indoor theme park — the largest in the Western Hemisphere.",
    img: themeParkImg
  },
  {
    title: "DreamWorks Water Park",
    desc: "The largest indoor water park in North America featuring massive wave pools.",
    img: waterParkImg
  },
  {
    title: "Big Snow",
    desc: "The only indoor real-snow ski slope in North America, open 365 days a year.",
    img: skiSlopeImg
  }
];

const secondaryAttractions = [
  "SEA LIFE Aquarium",
  "Legoland Discovery Center",
  "NHL-size Ice Rink",
  "Sky Slope",
  "Mirror Maze",
  "Mini Golf"
];

export default function Entertainment() {
  return (
    <section id="entertainment" className="py-32 bg-secondary relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Attractions & Entertainment</h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            When you're here, you don't just shop. You live an experience.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {attractions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative h-[400px] rounded-sm overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Hover glow border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-serif text-2xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-white/10 pt-12"
        >
          <div className="text-center mb-8 text-sm text-gray-400 uppercase tracking-widest">Also Featuring</div>
          <div className="flex flex-wrap justify-center gap-4">
            {secondaryAttractions.map((attr) => (
              <span key={attr} className="px-6 py-2 border border-white/10 rounded-full text-white text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                {attr}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
