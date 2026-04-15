import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import sponsorshipActivationImg from '@/assets/images/sponsorship_activation.png';

export default function Sponsorship() {
  const tiers = [
    {
      name: "Platinum",
      desc: "Property-wide naming rights, dominant digital out-of-home media, and permanent activation space.",
      style: "bg-[#0a0a0a] border-white/20 hover:border-white",
      text: "text-white",
      desc_text: "text-gray-300",
    },
    {
      name: "Gold",
      desc: "Category exclusivity, integrated campaign media, and prime weekend activation zones.",
      style: "bg-gradient-to-br from-[#8B6914] to-[#C9A84C] border-transparent",
      text: "text-black",
      desc_text: "text-black/75",
    },
    {
      name: "Silver",
      desc: "Targeted digital media campaigns and seasonal experiential pop-ups.",
      style: "bg-card border-white/10 hover:border-gray-400",
      text: "text-gray-200",
      desc_text: "text-gray-400",
    },
    {
      name: "Custom",
      desc: "Tailored brand experiences ranging from 1-day stunts to 3-month pop-up shops.",
      style: "bg-transparent border-dashed border-white/20 hover:border-primary",
      text: "text-white",
      desc_text: "text-gray-400",
    },
  ];

  return (
    <section id="sponsorship" className="py-16 md:py-32 bg-background relative overflow-hidden">

      {/* Header Image Fade */}
      <div className="absolute top-0 left-0 w-full h-64 sm:h-96 z-0 pointer-events-none">
        <img
          src={sponsorshipActivationImg}
          alt="Brand Activation"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-16 sm:mb-24 mt-8 sm:mt-12"
        >
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Sponsorship</h2>
          <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-bold mb-5 leading-tight">
            Engage the Most Valuable Audience in Retail.
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 font-light max-w-3xl mx-auto">
            40 million annual impressions. A captive audience with extraordinary purchasing power.
          </p>
        </motion.div>

        {/* Audience Stats */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mb-16 sm:mb-24">
          {[
            { v: "60%", label: "Ages 18-44", desc: "A highly coveted millennial and Gen Z demographic driving culture and consumption." },
            { v: "$85K+", label: "Average HHI", desc: "Affluent shoppers traveling from the wealthiest zip codes in the tri-state area." },
            { v: "85%", label: "1-Hour Drive", desc: "Unprecedented density of population combined with immense tourist traffic." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card/50 border border-white/5 p-6 sm:p-8 rounded-sm text-center"
            >
              <div className="text-4xl sm:text-5xl font-serif text-white font-bold mb-2">{item.v}</div>
              <div className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">{item.label}</div>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partnership Tiers */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mb-14 sm:mb-20">
          <h4 className="text-white font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">Partnership Opportunities</h4>
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${tier.style} border p-6 sm:p-8 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 transition-all duration-300`}
            >
              <div className={`w-full sm:w-36 text-xl sm:text-2xl font-bold font-serif flex-shrink-0 ${tier.text}`}>{tier.name}</div>
              <div className={`flex-1 text-base sm:text-lg font-light ${tier.desc_text}`}>{tier.desc}</div>
              <span className={`hidden sm:block text-xl flex-shrink-0 ${tier.text}`}>→</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            data-testid="button-request-media-kit"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-8 sm:px-10 py-6 text-sm sm:text-base w-full sm:w-auto"
          >
            Request Media Kit
          </Button>
        </div>
      </div>
    </section>
  );
}
