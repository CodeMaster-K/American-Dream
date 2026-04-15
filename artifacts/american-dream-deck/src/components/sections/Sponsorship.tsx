import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Sponsorship() {
  const tiers = [
    {
      name: "Platinum Partner",
      desc: "Property-wide naming rights, dominant digital out-of-home media, and permanent activation space.",
      color: "border-gray-200"
    },
    {
      name: "Gold Partner",
      desc: "Category exclusivity, integrated campaign media, and prime weekend activation zones.",
      color: "border-[#C9A84C]"
    },
    {
      name: "Silver Partner",
      desc: "Targeted digital media campaigns and seasonal experiential pop-ups.",
      color: "border-gray-400"
    },
    {
      name: "Custom Activation",
      desc: "Tailored brand experiences ranging from 1-day stunts to 3-month pop-up shops.",
      color: "border-white/20"
    }
  ];

  return (
    <section id="sponsorship" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Sponsorship & Partnerships</h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Engage the Most Valuable Audience in Retail.
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 mt-8">
            <div><strong className="text-white text-xl">60%</strong> Ages 18-44</div>
            <div><strong className="text-white text-xl">$85K+</strong> Avg HHI</div>
            <div><strong className="text-white text-xl">40M</strong> Yearly Impressions</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-card p-8 rounded-sm border-t-4 ${tier.color} hover:-translate-y-2 transition-transform duration-300 shadow-xl`}
            >
              <h4 className="font-serif text-2xl font-bold text-white mb-4">{tier.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            data-testid="button-partnership"
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-black font-bold tracking-widest uppercase rounded-sm transition-all px-8"
          >
            Explore Partnership Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
