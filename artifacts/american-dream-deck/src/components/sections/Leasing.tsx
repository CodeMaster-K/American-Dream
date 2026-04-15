import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Leasing() {
  const categories = [
    { num: "01", title: "Flagship Retail", sqft: "5K - 50K", term: "10 YR", rent: "$$$" },
    { num: "02", title: "Luxury Boutique", sqft: "500 - 5K", term: "5-10 YR", rent: "$$$$" },
    { num: "03", title: "F&B Concept", sqft: "1K - 15K", term: "10 YR", rent: "$$" },
    { num: "04", title: "Experiential Pop-Up", sqft: "Flexible", term: "1-12 MO", rent: "Variable" },
    { num: "05", title: "Entertainment", sqft: "20K+", term: "15 YR", rent: "$$" },
  ];

  return (
    <section id="leasing" className="py-16 md:py-32 bg-secondary relative border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/8 to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-24"
        >
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Leasing & Real Estate</h2>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-5 leading-tight">
            Find Your Space.
          </h3>
          <p className="text-gray-300 text-base sm:text-xl font-light mb-6 sm:mb-8 leading-relaxed">
            Whether you need a massive multi-level flagship or a nimble three-month pop-up, we have configurable spaces to match your ambition.
          </p>
          <div className="inline-block bg-white/5 border border-primary/30 px-5 py-3 rounded-full text-primary font-bold text-xs sm:text-sm tracking-wide">
            Average sales-to-rent ratio exceeds industry benchmarks by 3x
          </div>
        </motion.div>

        {/* Leasing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-16 sm:mb-32">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card/40 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-sm hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col justify-between min-h-[240px] sm:min-h-[280px] card-hover-glow"
            >
              {/* Background number */}
              <div className="absolute -right-3 -bottom-8 text-[100px] sm:text-[130px] font-serif font-bold text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none select-none leading-none">
                {cat.num}
              </div>

              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 group-hover:text-primary transition-colors">{cat.title}</h4>
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Target Sq Ft</span>
                    <span className="text-gray-200 text-sm font-medium">{cat.sqft}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Typ. Term</span>
                    <span className="text-gray-200 text-sm font-medium">{cat.term}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Investment</span>
                    <span className="text-primary text-sm font-bold">{cat.rent}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Inquire <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leasing Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-14 sm:mb-24"
        >
          <h4 className="text-center text-white font-serif text-2xl sm:text-3xl mb-10 sm:mb-12">The Leasing Process</h4>

          {/* Mobile: vertical steps */}
          <div className="flex flex-col sm:hidden gap-0">
            {[
              { num: "1", title: "Inquiry", desc: "Submit your space requirements" },
              { num: "2", title: "Discovery Call", desc: "Meet with our leasing team" },
              { num: "3", title: "Space Tour", desc: "Experience the property firsthand" },
              { num: "4", title: "Offer & Terms", desc: "Finalize your agreement" },
            ].map((step, i) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold text-sm shadow-[0_0_12px_rgba(201,168,76,0.3)]">
                    {step.num}
                  </div>
                  {i < 3 && <div className="w-[2px] h-10 bg-primary/30 mt-1" />}
                </div>
                <div className="pt-1 pb-10">
                  <div className="text-white font-bold tracking-wide">{step.title}</div>
                  <div className="text-gray-500 text-sm mt-1">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden sm:flex relative justify-between items-start gap-0">
            {/* Connecting line */}
            <div className="absolute top-5 left-12 right-12 h-[2px] bg-white/10 z-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-primary"
              />
            </div>

            {[
              { num: "1", title: "Inquiry" },
              { num: "2", title: "Discovery Call" },
              { num: "3", title: "Space Tour" },
              { num: "4", title: "Offer & Terms" },
            ].map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center bg-secondary px-4 sm:px-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold mb-3 sm:mb-4 shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                  {step.num}
                </div>
                <div className="text-white font-bold tracking-wide text-sm sm:text-base text-center">{step.title}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            data-testid="button-schedule-leasing-tour"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-sm glow-gold px-8 sm:px-10 py-6 text-sm sm:text-base w-full sm:w-auto"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Tour
          </Button>
          <Button
            data-testid="button-download-guide"
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white text-white hover:text-black font-bold tracking-widest uppercase rounded-sm px-8 sm:px-10 py-6 text-sm sm:text-base w-full sm:w-auto transition-colors"
          >
            Download Guide
          </Button>
        </div>
      </div>
    </section>
  );
}
