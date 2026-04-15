import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/images/hero_bg.png';
import heroOverlay from '@/assets/images/hero_overlay.png';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headline = "THE DESTINATION. THE PLATFORM. THE OPPORTUNITY.";

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)`, willChange: 'transform' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0 opacity-50 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroOverlay})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Scan Line */}
      <div className="absolute w-full h-[1px] bg-primary/20 z-0 top-0" style={{ animation: 'scan-line 10s linear infinite' }} />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 3 + 1.5;
          return (
            <div
              key={i}
              className="particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 5}s`,
                '--duration': `${Math.random() * 10 + 5}s`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">

        {/* Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {["EAST RUTHERFORD, NJ", "8 MI FROM NYC", "3M SQ FT", "40M VISITORS"].map((text, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-primary/80 uppercase"
              >
                {text}
                {i < 3 && <span className="ml-3 text-white/20">·</span>}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 sm:mb-10 tracking-tight leading-[1.05] max-w-5xl flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
          {headline.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className={`inline-block ${word === 'PLATFORM.' ? 'text-gradient-gold' : ''}`}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + wordIndex * 0.08 + charIndex * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Stat Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-12"
        >
          {[
            { v: "3M", l: "SQ FT" },
            { v: "40M", l: "VISITORS" },
            { v: "$5B", l: "INVESTMENT" },
          ].map((pill, i) => (
            <motion.div
              key={pill.l}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + i * 0.1, type: 'spring', stiffness: 280, damping: 22 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 flex items-center gap-2.5"
            >
              <span className="text-primary font-serif text-lg sm:text-xl font-bold">{pill.v}</span>
              <span className="text-white text-[10px] sm:text-xs uppercase tracking-widest">{pill.l}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none"
        >
          <Button
            data-testid="button-explore"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-8 py-6 text-sm sm:text-base w-full sm:w-auto relative overflow-hidden group"
            onClick={() => document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Explore the Property</span>
          </Button>
          <Button
            data-testid="button-schedule-tour"
            size="lg"
            variant="outline"
            className="border-white/25 hover:bg-white text-white hover:text-black font-bold tracking-widest uppercase rounded-sm px-8 py-6 text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm transition-all duration-300"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Tour
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
