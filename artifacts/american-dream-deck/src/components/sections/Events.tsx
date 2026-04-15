import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mic2, Tent, Presentation, Rocket, Star, Building2 } from 'lucide-react';
import eventsConcertImg from '@/assets/images/events_concert.png';
import eventsActivationImg from '@/assets/images/events_activation.png';
import eventsTheaterImg from '@/assets/images/events_theater.png';

export default function Events() {
  const eventTypes = [
    { icon: <Mic2 size={18} />, name: "Concerts & Live Music" },
    { icon: <Tent size={18} />, name: "Brand Activations" },
    { icon: <Building2 size={18} />, name: "Corporate Events" },
    { icon: <Rocket size={18} />, name: "Product Launches" },
    { icon: <Star size={18} />, name: "Celebrity Appearances" },
    { icon: <Presentation size={18} />, name: "Expo & Conventions" },
  ];

  return (
    <section id="events" className="relative py-16 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity bg-cover bg-center"
        style={{ backgroundImage: `url(${eventsConcertImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 z-0" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="gold-line" />
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Events & Platform</h2>
            <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-bold mb-6 sm:mb-8 leading-tight">
              A Global Stage.
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
              With over 500 events annually and 1M+ dedicated event attendees, American Dream is the premier destination for massive concerts, brand activations, and global product launches.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10">
              {eventTypes.map((type) => (
                <div key={type.name} className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 sm:p-4 rounded-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="text-primary flex-shrink-0">{type.icon}</div>
                  <span className="text-gray-200 text-sm font-medium tracking-wide">{type.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-8 sm:gap-x-12 mb-10 border-l-2 border-primary/50 pl-5">
              {[
                { v: "1M+", l: "Attendees" },
                { v: "500+", l: "Yearly Events" },
                { v: "200+", l: "Corporate Bookings" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-serif mb-1">{s.v}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </div>

            <Button
              data-testid="button-book-event"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-8 sm:px-10 py-6 text-sm sm:text-base w-full sm:w-auto"
            >
              Book Your Event
            </Button>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-4 sm:gap-6"
          >
            {/* Main activation image */}
            <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-white/10 group">
              <img src={eventsActivationImg} alt="Brand Activation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Main Atrium</div>
                <div className="text-white font-serif text-lg sm:text-2xl">200,000 Sq Ft Activation Space</div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex gap-4 sm:gap-6">
              <div className="relative aspect-square w-1/2 rounded-sm overflow-hidden border border-white/10 group flex-shrink-0">
                <img src={eventsTheaterImg} alt="Theater" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5">
                  <div className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5 sm:mb-1">Performing Arts</div>
                  <div className="text-white font-serif text-base sm:text-xl">1,000 Seat Theater</div>
                </div>
              </div>

              <div className="w-1/2 bg-card/40 border border-white/10 p-4 sm:p-6 rounded-sm backdrop-blur-md flex flex-col justify-center">
                <h4 className="text-white font-bold mb-3 sm:mb-4 uppercase tracking-widest text-xs sm:text-sm">Past Partners</h4>
                <div className="space-y-2 sm:space-y-4">
                  {['NBA', 'NFL', 'Live Nation', 'MTV', 'Ferrari', 'Samsung'].map(partner => (
                    <div key={partner} className="text-gray-400 font-serif text-base sm:text-lg">{partner}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
