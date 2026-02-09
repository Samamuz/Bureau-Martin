import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  bg?: 'white' | 'gray';
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', bg = 'white' }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${bg === 'gray' ? 'bg-neutral-100' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        {title && (
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-12 border-l-2 border-neutral-900 pl-4">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;