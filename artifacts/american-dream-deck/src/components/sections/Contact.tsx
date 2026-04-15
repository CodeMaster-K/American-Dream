import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Our team will be in touch shortly.",
      duration: 5000,
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl text-white font-bold mb-6"
          >
            Ready to be part of something <span className="text-primary italic">extraordinary?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            "Schedule a Property Tour",
            "Submit a Leasing Inquiry",
            "Discuss a Partnership"
          ].map((action, i) => (
            <motion.div
              key={action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/30 border border-white/10 p-6 text-center rounded-sm hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="text-primary mb-4 text-2xl font-serif">{i + 1}</div>
              <h3 className="text-white font-bold">{action}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-sm border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Name</label>
                <Input required className="bg-background/50 border-white/10 focus-visible:ring-primary text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Company</label>
                <Input required className="bg-background/50 border-white/10 focus-visible:ring-primary text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
              <Input type="email" required className="bg-background/50 border-white/10 focus-visible:ring-primary text-white" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400">Interest</label>
              <Select required>
                <SelectTrigger className="bg-background/50 border-white/10 text-white w-full">
                  <SelectValue placeholder="Select Area of Interest" />
                </SelectTrigger>
                <SelectContent className="bg-card border-white/10">
                  <SelectItem value="retail" className="text-white hover:bg-white/10">Retail Leasing</SelectItem>
                  <SelectItem value="luxury" className="text-white hover:bg-white/10">Luxury Wing</SelectItem>
                  <SelectItem value="dining" className="text-white hover:bg-white/10">Dining Concept</SelectItem>
                  <SelectItem value="sponsorship" className="text-white hover:bg-white/10">Brand Sponsorship</SelectItem>
                  <SelectItem value="events" className="text-white hover:bg-white/10">Event Booking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400">Message (Optional)</label>
              <Textarea className="bg-background/50 border-white/10 focus-visible:ring-primary text-white min-h-[100px]" />
            </div>

            <Button data-testid="button-submit-inquiry" type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase py-6">
              Submit Inquiry
            </Button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-32 border-t border-white/10 pt-12 pb-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-serif font-bold tracking-widest text-white uppercase">
            American<span className="text-primary">Dream</span>
          </div>
          <div className="text-sm text-gray-500 font-light">
            1 American Dream Way, East Rutherford, NJ 07073
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">Leasing: (201) 340-2900</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
