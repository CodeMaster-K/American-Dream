import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import contactBgImg from '@/assets/images/contact_bg.png';

export default function Contact() {
  const { toast } = useToast();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Our team will be in touch shortly.",
      duration: 5000,
    });
    (e.target as HTMLFormElement).reset();
  };

  const FloatingLabelInput = ({ label, id, type = "text", required = false }: any) => (
    <div className="relative mb-6">
      <Input 
        id={id}
        type={type}
        required={required}
        onFocus={() => setFocusedField(id)}
        onBlur={(e) => { if (!e.target.value) setFocusedField(null) }}
        className="peer bg-transparent border-0 border-b-2 border-white/20 rounded-none px-0 py-4 text-white focus-visible:ring-0 focus-visible:border-primary text-lg transition-colors h-14" 
      />
      <label 
        htmlFor={id}
        className={`absolute left-0 transition-all duration-300 pointer-events-none text-gray-400 font-light ${
          focusedField === id ? '-top-3 text-xs text-primary' : 'top-4 text-lg peer-valid:-top-3 peer-valid:text-xs'
        }`}
      >
        {label}
      </label>
    </div>
  );

  return (
    <section id="contact" className="py-32 relative min-h-screen flex flex-col justify-between">
      
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBgImg})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-white font-bold mb-6"
          >
            Ready to be part of something <span className="text-primary italic text-glow-gold">extraordinary?</span>
          </motion.h2>
        </div>

        {/* Global Connections */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 border-y border-white/10 py-6 max-w-4xl mx-auto"
        >
          <div className="text-xs text-gray-400 uppercase tracking-[0.3em] mb-4">Direct Connections</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white font-serif text-xl md:text-2xl">
            {['NYC', 'Newark', 'Philadelphia', 'Stamford', 'Providence', 'Albany'].map((city, i) => (
              <React.Fragment key={city}>
                <span>{city}</span>
                {i < 5 && <span className="text-primary/50">·</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 3 Big Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {[
            { id: "01", title: "Schedule a Tour", desc: "Experience the scale and luxury firsthand.", btn: "Book Tour" },
            { id: "02", title: "Leasing Inquiry", desc: "Find the perfect space for your concept.", btn: "Contact Leasing" },
            { id: "03", title: "Partnerships", desc: "Activate your brand in front of millions.", btn: "Explore Deals" }
          ].map((action, i) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 text-center rounded-sm hover:border-primary/50 transition-all card-hover-glow flex flex-col items-center"
            >
              <div className="text-primary/40 mb-6 text-5xl font-serif font-bold">{action.id}</div>
              <h3 className="text-white font-bold text-2xl mb-4">{action.title}</h3>
              <p className="text-gray-400 font-light mb-8 flex-1">{action.desc}</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs w-full">
                {action.btn}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-black/60 backdrop-blur-xl p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <h3 className="text-3xl font-serif text-white font-bold mb-10 text-center">Get in Touch</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <FloatingLabelInput id="name" label="Full Name" required />
              <FloatingLabelInput id="company" label="Company / Brand" required />
            </div>
            
            <FloatingLabelInput id="email" type="email" label="Email Address" required />

            <div className="relative mb-6 pt-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Area of Interest</label>
              <Select required>
                <SelectTrigger className="bg-transparent border-0 border-b-2 border-white/20 rounded-none px-0 h-12 text-white focus:ring-0 focus:border-primary text-lg">
                  <SelectValue placeholder="Select one..." />
                </SelectTrigger>
                <SelectContent className="bg-[#111] border-white/10 text-white">
                  <SelectItem value="retail" className="hover:bg-primary/20 focus:bg-primary/20 cursor-pointer py-3">Retail Leasing</SelectItem>
                  <SelectItem value="luxury" className="hover:bg-primary/20 focus:bg-primary/20 cursor-pointer py-3">Luxury Wing</SelectItem>
                  <SelectItem value="dining" className="hover:bg-primary/20 focus:bg-primary/20 cursor-pointer py-3">Dining Concept</SelectItem>
                  <SelectItem value="sponsorship" className="hover:bg-primary/20 focus:bg-primary/20 cursor-pointer py-3">Brand Sponsorship</SelectItem>
                  <SelectItem value="events" className="hover:bg-primary/20 focus:bg-primary/20 cursor-pointer py-3">Event Booking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative mb-10 pt-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Message (Optional)</label>
              <Textarea 
                className="bg-transparent border-0 border-b-2 border-white/20 rounded-none px-0 text-white focus-visible:ring-0 focus-visible:border-primary text-lg min-h-[80px] resize-none" 
              />
            </div>

            <Button 
              data-testid="button-submit-inquiry" 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase py-7 text-lg group relative overflow-hidden"
            >
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Submit Inquiry</span>
            </Button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-auto border-t border-white/10 pt-12 pb-8 relative z-10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-2xl font-serif font-bold tracking-widest text-white uppercase">
              AMERICAN<span className="text-primary text-glow-gold">DREAM</span>
            </div>
            
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={24} /></a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light border-t border-white/5 pt-8">
            <div>© 2025 American Dream. All rights reserved.</div>
            <div className="flex gap-6">
              <span>General: (201) 340-5000</span>
              <span>Leasing: (201) 340-2900</span>
            </div>
            <div>1 American Dream Way, East Rutherford, NJ 07073</div>
          </div>
        </div>
      </footer>
    </section>
  );
}