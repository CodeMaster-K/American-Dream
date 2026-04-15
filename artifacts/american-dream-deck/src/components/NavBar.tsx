import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Overview', href: '#why' },
    { name: 'Retail', href: '#retail' },
    { name: 'Luxury', href: '#luxury' },
    { name: 'Dining', href: '#dining' },
    { name: 'Entertainment', href: '#entertainment' },
    { name: 'Events', href: '#events' },
    { name: 'Sponsorship', href: '#sponsorship' },
    { name: 'Leasing', href: '#leasing' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, { threshold: 0.2 });
    
    links.forEach(link => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-primary/20 py-4 shadow-[0_4px_30px_rgba(201,168,76,0.05)]' : 'bg-transparent py-6'
      }`}
    >
      <div 
        className="absolute top-0 left-0 h-[2px] bg-primary z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollTo(e, '#hero')}
          className="text-2xl font-serif font-bold tracking-widest text-white uppercase flex items-center gap-2"
        >
          AMERICAN<span className="text-primary text-glow-gold">DREAM</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`text-xs xl:text-sm transition-colors uppercase tracking-widest relative flex items-center gap-2 ${
                activeSection === link.href ? 'text-primary font-bold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {activeSection === link.href && (
                <motion.div layoutId="navDot" className="w-1.5 h-1.5 rounded-full bg-primary absolute -left-3" />
              )}
              {link.name}
            </a>
          ))}
          <Button 
            data-testid="button-book-meeting"
            className="bg-primary hover:bg-primary/90 text-black font-bold tracking-wider uppercase rounded-sm glow-gold px-6 ml-2"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Meeting
          </Button>
        </nav>
        
        <button 
          className="lg:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[70px] bg-background/95 backdrop-blur-xl border-t border-white/10 z-40 flex flex-col items-center justify-center gap-6"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`text-lg transition-colors uppercase tracking-widest ${
                  activeSection === link.href ? 'text-primary font-bold' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-primary text-black font-bold tracking-wider uppercase mt-4 px-8 py-6 rounded-sm w-3/4 max-w-xs"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book a Meeting
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}