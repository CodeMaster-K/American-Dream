import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/images/hero_bg.png';
import heroOverlay from '@/assets/images/hero_overlay.png';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' });
  };

  const headline = "THE DESTINATION. THE PLATFORM. THE OPPORTUNITY.";

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        {/* Layered Overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div 
          className="absolute inset-0 opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroOverlay})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Animated Scan Line */}
      <div className="absolute w-full h-[1px] bg-primary/30 z-0 top-0" style={{ animation: 'scan-line 10s linear infinite' }} />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.random() * 4 + 2;
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
      <div className="absolute inset-0 bg-grid z-0 opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/80 uppercase">
            {["EAST RUTHERFORD, NJ", "8 MI FROM NYC", "3M SQ FT", "40M VISITORS"].map((text, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.2) }}
              >
                {text} {i < 3 && <span className="mx-2 text-white/30">·</span>}
              </motion.span>
            ))}
          </span>
        </motion.div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight leading-tight max-w-6xl mx-auto flex flex-wrap justify-center gap-x-4">
          {headline.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className={`inline-block ${word === 'PLATFORM.' ? 'text-gradient-gold' : ''}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + (wordIndex * 0.1) + (charIndex * 0.03),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {[
            { v: "3M", l: "SQ FT" },
            { v: "40M", l: "VISITORS" },
            { v: "$5B", l: "INVESTMENT" }
          ].map((pill, i) => (
            <motion.div 
              key={pill.l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 2 + (i * 0.1) }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 flex items-center gap-3"
            >
              <span className="text-primary font-serif text-xl font-bold">{pill.v}</span>
              <span className="text-white text-xs uppercase tracking-widest">{pill.l}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            data-testid="button-explore"
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-8 py-7 text-lg w-full sm:w-auto relative overflow-hidden group"
            onClick={scrollToNext}
          >
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Explore the Property</span>
          </Button>
          <Button 
            data-testid="button-schedule-tour"
            size="lg" 
            variant="outline" 
            className="border-white/20 hover:bg-white text-white hover:text-black font-bold tracking-widest uppercase rounded-sm px-8 py-7 text-lg w-full sm:w-auto backdrop-blur-sm transition-all duration-300"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Tour
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/50 hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}