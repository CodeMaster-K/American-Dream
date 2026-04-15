import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import sponsorshipActivationImg from '@/assets/images/sponsorship_activation.png';

export default function Sponsorship() {
  const tiers = [
    {
      name: "Platinum",
      desc: "Property-wide naming rights, dominant digital out-of-home media, and permanent activation space.",
      style: "bg-[#0a0a0a] border-white/20 hover:border-white shadow-2xl",
      text: "text-white"
    },
    {
      name: "Gold",
      desc: "Category exclusivity, integrated campaign media, and prime weekend activation zones.",
      style: "bg-gradient-to-br from-[#8B6914] to-[#C9A84C] border-transparent",
      text: "text-black"
    },
    {
      name: "Silver",
      desc: "Targeted digital media campaigns and seasonal experiential pop-ups.",
      style: "bg-card border-white/10 hover:border-gray-400",
      text: "text-gray-200"
    },
    {
      name: "Custom",
      desc: "Tailored brand experiences ranging from 1-day stunts to 3-month pop-up shops.",
      style: "bg-transparent border-dashed border-white/20 hover:border-primary",
      text: "text-white"
    }
  ];

  return (
    <section id="sponsorship" className="py-32 bg-background relative overflow-hidden">
      
      {/* Header Image */}
      <div className="absolute top-0 left-0 w-full h-96 z-0">
        <img 
          src={sponsorshipActivationImg} 
          alt="Brand Activation" 
          className="w-full h-full object-cover opacity-20 mask-image:linear-gradient(to_bottom,black,transparent)"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-24 mt-10"
        >
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Sponsorship</h2>
          <h3 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6">
            Engage the Most Valuable Audience in Retail.
          </h3>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            40 million annual impressions. A captive audience with extraordinary purchasing power.
          </p>
        </motion.div>

        {/* Visual Audience Data */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-white/5 p-8 rounded-sm text-center relative overflow-hidden"
          >
            {/* CSS Arc */}
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full border-[16px] border-primary/20 border-t-primary border-r-primary opacity-50 rotate-45" />
            
            <div className="text-5xl font-serif text-white font-bold mb-2">60%</div>
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Ages 18-44</div>
            <p className="text-gray-400 text-sm">A highly coveted millennial and Gen Z demographic driving culture and consumption.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card/50 border border-white/5 p-8 rounded-sm text-center relative overflow-hidden"
          >
            <div className="text-5xl font-serif text-white font-bold mb-2">$85K+</div>
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Average HHI</div>
            <p className="text-gray-400 text-sm">Affluent shoppers traveling from the wealthiest zip codes in the tri-state area.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-white/5 p-8 rounded-sm text-center relative overflow-hidden"
          >
            <div className="text-5xl font-serif text-white font-bold mb-2">85%</div>
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">1-Hour Drive</div>
            <p className="text-gray-400 text-sm">Unprecedented density of population combined with immense tourist traffic.</p>
          </motion.div>
        </div>

        {/* Horizontal Partnership Tiers */}
        <div className="max-w-5xl mx-auto space-y-6 mb-20">
          <h4 className="text-white font-serif text-3xl mb-8">Partnership Opportunities</h4>
          
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`${tier.style} border p-8 rounded-sm flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-300`}
            >
              <div className={`w-48 text-2xl font-bold font-serif ${tier.text}`}>{tier.name}</div>
              <div className={`flex-1 ${tier.name === 'Gold' ? 'text-black/80' : 'text-gray-300'} text-lg font-light`}>
                {tier.desc}
              </div>
              <div className="hidden md:block">
                <span className={`text-xl ${tier.text}`}>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            data-testid="button-request-media-kit"
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-10 py-7 text-lg"
          >
            Request Media Kit
          </Button>
        </div>
      </div>
    </section>
  );
}