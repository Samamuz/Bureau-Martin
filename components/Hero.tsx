import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image with Overlay - Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.5}px, 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Architecture Background" 
          className="w-full h-full object-cover"
          loading="eager" // Important for LCP (Largest Contentful Paint)
        />
        <div className="absolute inset-0 bg-neutral-900/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-white max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          Une architecture <br />
          <span className="font-semibold">qui dure.</span>
        </h1>
        <p className="text-lg md:text-xl md:max-w-2xl font-light text-neutral-200 mb-10 leading-relaxed">
          Depuis la Suisse, nous concevons des espaces sobres, fonctionnels et ancrés dans le territoire. 
          De l'idée à la réalisation, avec rigueur et sensibilité.
        </p>
        <a 
          href="#projects" 
          onClick={handleScrollToProjects}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-medium text-sm tracking-wide uppercase hover:bg-neutral-200 transition-colors"
        >
          Voir nos projets
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <ArrowDown size={24} className="opacity-70" />
      </div>
    </section>
  );
};

export default Hero;