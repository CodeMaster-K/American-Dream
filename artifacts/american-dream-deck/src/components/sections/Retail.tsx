import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import retailImg from '@/assets/images/retail.png';

export default function Retail() {
  return (
    <section id="retail" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:pr-10"
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Retail</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight">
              The country's most diverse & high-traffic retail environment.
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
              From flagship flagships to emerging digital-native brands making their physical debut, American Dream offers 450+ retail spaces designed for discovery.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-serif text-white mb-1">450+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Retail Tenants</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-serif text-white mb-1">50+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">First-to-Market Concepts</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-serif text-white mb-1">3M</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Sq Ft Total Retail</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-serif text-white mb-1">12+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Anchor Stores</div>
              </div>
            </div>

            <Button 
              data-testid="button-retail-leasing"
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary hover:text-black font-bold tracking-widest uppercase rounded-sm transition-all"
            >
              View Leasing Opportunities
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] overflow-hidden rounded-sm group">
              <img 
                src={retailImg} 
                alt="Retail Corridor" 
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating stat card */}
              <div className="absolute bottom-8 left-8 right-8 bg-card/80 backdrop-blur-md border border-white/10 p-6 rounded-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-300 uppercase tracking-widest">Foot Traffic</span>
                  <span className="text-primary font-bold">110K / Day avg</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary w-3/4 h-full rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
