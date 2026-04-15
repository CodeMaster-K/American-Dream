import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration * 1000 / end));
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 50) || 1;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  // Format large numbers
  const formattedCount = count >= 1000000 
    ? (count / 1000000).toLocaleString() 
    : count.toLocaleString();

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
};

export default function Why() {
  const stats = [
    { value: 3000000, suffix: '+', label: 'Square Feet of Space', id: 'sqft' },
    { value: 40, suffix: 'M+', label: 'Annual Visitors', id: 'visitors' },
    { value: 450, suffix: '+', label: 'Brands & Tenants', id: 'brands' },
    { value: 100, suffix: '+', label: 'Dining Options', id: 'dining' },
    { value: 5, suffix: 'B', label: 'Investment', prefix: '$', id: 'investment' },
    { value: 1, suffix: '', label: 'Destination in NY Metro', prefix: '#', id: 'rank' },
  ];

  return (
    <section id="why" className="py-32 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Why American Dream</h2>
          <p className="font-serif text-3xl md:text-5xl text-white leading-tight font-bold">
            This isn't a mall. It's a city unto itself — the commercial and entertainment capital of the Northeast.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-5xl mx-auto mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center border-l border-white/10 pl-6"
            >
              <div className="font-serif text-5xl md:text-6xl font-bold text-white mb-2 flex justify-center items-baseline">
                {stat.prefix && <span className="text-3xl text-primary mr-1">{stat.prefix}</span>}
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-white/5 rounded-lg p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-2xl"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-serif text-white font-bold mb-4">The Center of Everything</h3>
            <p className="text-gray-300 leading-relaxed">
              Located just 8 miles from Manhattan with direct NJ Transit access. We serve a primary market of 20 million people within a 30-mile radius, making it the most accessible mega-destination in the world.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8<span className="text-sm text-primary">mi</span></div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">To NYC</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
