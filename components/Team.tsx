import React from 'react';
import Section from './Section';

const Team: React.FC = () => {
  return (
    <Section id="team" title="Équipe">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
           <img 
             src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="Équipe du bureau" 
             className="w-full h-auto shadow-md"
           />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-neutral-800 leading-relaxed mb-6">
            Notre équipe est composée d'architectes et de collaborateurs passionnés, aux compétences complémentaires.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Ensemble, nous partageons une culture du détail, du dialogue et de l'exigence. Nous favorisons un environnement de travail ouvert, propice à la créativité et à l'échange technique.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Team;