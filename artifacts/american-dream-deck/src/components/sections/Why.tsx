import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import whyAerialImg from '@/assets/images/why_aerial.png';

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
    { value: 3000000, suffix: '+', label: 'Square Feet of Space', prefix: '' },
    { value: 40, suffix: 'M+', label: 'Annual Visitors', prefix: '' },
    { value: 450, suffix: '+', label: 'Brands & Tenants', prefix: '' },
    { value: 100, suffix: '+', label: 'Dining Options', prefix: '' },
    { value: 5, suffix: 'B', label: 'Investment', prefix: '$' },
    { value: 1, suffix: '', label: 'Destination in NY Metro', prefix: '#' },
  ];

  return (
    <section id="why" className="relative py-32 overflow-hidden bg-black noise-overlay">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url(${whyAerialImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <div className="gold-line mx-auto" />
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-8">Why American Dream</h2>
          <p className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-bold text-glow-gold">
            This isn't a mall.<br />
            It's a city unto itself.
          </p>
          <p className="mt-8 text-xl text-gray-400 font-light tracking-wide max-w-3xl mx-auto">
            The commercial and entertainment capital of the Northeast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-sm card-hover-glow relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 flex items-baseline">
                {stat.prefix && <span className="text-4xl text-primary mr-1">{stat.prefix}</span>}
                <span className="group-hover:text-primary transition-colors duration-300">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-center font-serif text-3xl text-white font-bold mb-10">Unmatched Market Reach</h3>
          <div className="space-y-8">
            {[
              { label: "30 Min Drive", pop: "20M People", width: "40%" },
              { label: "1 Hour Drive", pop: "45M People", width: "70%" },
              { label: "2 Hour Drive", pop: "80M People", width: "100%" }
            ].map((bar, i) => (
              <div key={bar.label}>
                <div className="flex justify-between text-sm uppercase tracking-widest text-gray-300 mb-2">
                  <span>{bar.label}</span>
                  <span className="text-primary font-bold">{bar.pop}</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: bar.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                    className="h-full bg-primary progress-shine"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}