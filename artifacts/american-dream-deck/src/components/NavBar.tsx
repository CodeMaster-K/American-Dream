import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Overview', href: '#overview' },
    { name: 'Retail', href: '#retail' },
    { name: 'Luxury', href: '#luxury' },
    { name: 'Dining', href: '#dining' },
    { name: 'Entertainment', href: '#entertainment' },
    { name: 'Events', href: '#events' },
    { name: 'Leasing', href: '#leasing' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollTo(e, '#hero')}
          className="text-2xl font-serif font-bold tracking-widest text-white uppercase flex items-center gap-2"
        >
          American<span className="text-primary">Dream</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button 
            data-testid="button-book-meeting"
            className="bg-primary hover:bg-primary/90 text-black font-semibold tracking-wider uppercase rounded-sm glow-gold px-6"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Meeting
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
