import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import eventsImg from '@/assets/images/events.png';

export default function Events() {
  return (
    <section id="events" className="relative py-32 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url(${eventsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Events & Platform</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white font-bold mb-8 leading-tight">
              A Global Stage.
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
              With over 500 events annually and 1M+ dedicated event attendees, American Dream is the premier destination for concerts, brand activations, and global product launches.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              {['Concerts', 'Brand Activations', 'Corporate Events', 'Product Launches', 'Celebrity Appearances', 'Conventions'].map((type, i) => (
                <div key={type} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-gray-300 text-sm tracking-wide">{type}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 mb-12">
              <div>
                <div className="text-3xl font-bold text-white font-serif mb-1">1,000+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Seat Theater</div>
              </div>
              <div className="w-[1px] h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white font-serif mb-1">500+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Annual Events</div>
              </div>
            </div>

            <Button 
              data-testid="button-book-event"
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-8"
            >
              Book Your Event
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
