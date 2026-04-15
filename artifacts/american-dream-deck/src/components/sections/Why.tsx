import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import whyAerialImg from '@/assets/images/why_aerial.png';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const stepTime = Math.max(Math.floor((duration * 1000) / 60), 16);
    const increment = Math.ceil(end / 60) || 1;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const formatted = count >= 1000000 ? (count / 1000000).toLocaleString() : count.toLocaleString();
  return <span ref={ref}>{formatted}{suffix}</span>;
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
    <section id="why" className="relative py-16 md:py-32 overflow-hidden bg-black noise-overlay">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${whyAerialImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-0" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-14 sm:mb-24"
        >
          <div className="gold-line mx-auto" />
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-6 sm:mb-8">Why American Dream</h2>
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-bold text-glow-gold">
            This isn't a mall.<br />
            It's a city unto itself.
          </p>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-gray-400 font-light tracking-wide max-w-3xl mx-auto">
            The commercial and entertainment capital of the Northeast.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16 sm:mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-8 rounded-sm card-hover-glow relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
              <div className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 flex items-baseline flex-wrap gap-x-1">
                {stat.prefix && <span className="text-2xl sm:text-4xl text-primary">{stat.prefix}</span>}
                <span className="group-hover:text-primary transition-colors duration-300">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Market Reach Bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-center font-serif text-2xl sm:text-3xl text-white font-bold mb-8 sm:mb-10">Unmatched Market Reach</h3>
          <div className="space-y-6 sm:space-y-8">
            {[
              { label: "30 Min Drive", pop: "20M People", width: "40%" },
              { label: "1 Hour Drive", pop: "45M People", width: "70%" },
              { label: "2 Hour Drive", pop: "80M People", width: "100%" },
            ].map((bar, i) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs sm:text-sm uppercase tracking-widest text-gray-300 mb-2">
                  <span>{bar.label}</span>
                  <span className="text-primary font-bold">{bar.pop}</span>
                </div>
                <div className="h-2 sm:h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: bar.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
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
