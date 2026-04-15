import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Leasing() {
  const paths = [
    {
      title: "Flagship Retail",
      size: "5,000 – 50,000 sq ft",
      traffic: "High",
      type: "Global Brands",
    },
    {
      title: "Luxury Boutique",
      size: "500 – 5,000 sq ft",
      traffic: "Premium",
      type: "High-End Fashion",
    },
    {
      title: "F&B / Restaurant",
      size: "1,000 – 15,000 sq ft",
      traffic: "Very High",
      type: "Dining Concepts",
    },
    {
      title: "Pop-Up & Experiential",
      size: "Flexible",
      traffic: "Targeted",
      type: "Short-Term / Activations",
    }
  ];

  return (
    <section id="leasing" className="py-32 bg-secondary relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Leasing Paths</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
              Find Your Space.
            </h3>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">
              Whether you need a massive multi-level flagship or a nimble three-month pop-up, we have configurable spaces to match your ambition.
            </p>
            <Button 
              data-testid="button-request-leasing"
              className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold w-full sm:w-auto"
            >
              Request Leasing Info
            </Button>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {paths.map((path, i) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card/50 border border-white/10 p-8 rounded-sm hover:bg-card hover:border-primary/50 transition-all group"
              >
                <h4 className="font-serif text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{path.title}</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-sm">Footprint</span>
                    <span className="text-gray-200 text-sm font-medium">{path.size}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-sm">Traffic</span>
                    <span className="text-gray-200 text-sm font-medium">{path.traffic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Ideal For</span>
                    <span className="text-gray-200 text-sm font-medium">{path.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
