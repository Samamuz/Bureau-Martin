import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    
    // Scroll to top if href is just '#'
    if (!targetId) {
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
       return;
    }

    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset for fixed header (approx 85px)
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Prestations', href: '#services' },
    { name: 'Méthode', href: '#method' },
    { name: 'Contact', href: '#contact' },
  ];

  // Determine text color based on state
  // If at top (transparent) AND menu closed -> White text
  // If scrolled OR menu open -> Dark text
  const isTransparent = !scrolled && !isOpen;
  const textColorClass = isTransparent ? 'text-white' : 'text-neutral-900';
  const linkColorClass = isTransparent ? 'text-white/90 hover:text-white' : 'text-neutral-600 hover:text-neutral-900';
  
  // Background slide state
  const showBackground = scrolled || isOpen;

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-500 py-6"
    >
      {/* Sliding Background Layer */}
      <div 
        className={`absolute inset-0 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all duration-500 ease-in-out transform ${
          showBackground ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      />

      {/* Content Container (relative to sit on top of background) */}
      <div className="container relative mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className={`text-xl font-semibold tracking-tight uppercase transition-colors duration-500 ${textColorClass}`}
        >
          Bureau Martin
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-500 ${linkColorClass}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button with Animation */}
        <button 
          className={`md:hidden p-2 relative w-8 h-8 focus:outline-none transition-colors duration-500 ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
            <Menu size={24} />
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
            <X size={24} />
          </span>
        </button>
      </div>

      {/* Mobile Nav with Smooth Transition */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'max-h-[80vh] opacity-100 border-b border-neutral-200' : 'max-h-0 opacity-0 border-none'
        }`}
      >
        <div className="flex flex-col py-6 px-6 space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium py-2 border-b border-neutral-100 last:border-0 transform transition-all duration-500 ease-out ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;