import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mic2, Tent, Presentation, Rocket, Star, Building2 } from 'lucide-react';
import eventsConcertImg from '@/assets/images/events_concert.png';
import eventsActivationImg from '@/assets/images/events_activation.png';
import eventsTheaterImg from '@/assets/images/events_theater.png';

export default function Events() {
  const eventTypes = [
    { icon: <Mic2 size={20} />, name: "Concerts & Live Music" },
    { icon: <Tent size={20} />, name: "Brand Activations" },
    { icon: <Building2 size={20} />, name: "Corporate Events" },
    { icon: <Rocket size={20} />, name: "Product Launches" },
    { icon: <Star size={20} />, name: "Celebrity Appearances" },
    { icon: <Presentation size={20} />, name: "Expo & Conventions" }
  ];

  return (
    <section id="events" className="relative py-32 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${eventsConcertImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:max-w-2xl"
          >
            <div className="gold-line" />
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Events & Platform</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white font-bold mb-8 leading-tight">
              A Global Stage.
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
              With over 500 events annually and 1M+ dedicated event attendees, American Dream is the premier destination for massive concerts, brand activations, and global product launches.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {eventTypes.map((type, i) => (
                <div key={type.name} className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="text-primary">{type.icon}</div>
                  <span className="text-gray-200 font-medium tracking-wide">{type.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 mb-12 border-l-2 border-primary/50 pl-6">
              <div>
                <div className="text-4xl font-bold text-white font-serif mb-1">1M+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Attendees</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white font-serif mb-1">500+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Yearly Events</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white font-serif mb-1">200+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Corporate Bookings</div>
              </div>
            </div>

            <Button 
              data-testid="button-book-event"
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-10 py-7 text-lg"
            >
              Book Your Event
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/10 group">
              <img src={eventsActivationImg} alt="Brand Activation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Main Atrium</div>
                <div className="text-white font-serif text-2xl">200,000 Sq Ft Activation Space</div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="relative aspect-square w-1/2 rounded-sm overflow-hidden border border-white/10 group">
                <img src={eventsTheaterImg} alt="Theater" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Performing Arts</div>
                  <div className="text-white font-serif text-xl">1,000 Seat Theater</div>
                </div>
              </div>
              
              <div className="w-1/2 bg-card/40 border border-white/10 p-6 rounded-sm backdrop-blur-md flex flex-col justify-center">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Past Partners</h4>
                <div className="space-y-4">
                  {['NBA', 'NFL', 'Live Nation', 'MTV', 'Ferrari', 'Samsung'].map(partner => (
                    <div key={partner} className="text-gray-400 font-serif text-lg">{partner}</div>
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