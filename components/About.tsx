import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="À Propos">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h3 className="text-3xl md:text-4xl font-light leading-tight text-neutral-900 mb-6">
            Une architecture sobre, fonctionnelle et durable.
          </h3>
        </div>
        <div className="space-y-6 text-neutral-600 leading-relaxed">
          <p>
            Fondé en Suisse, notre bureau d'architecture accompagne des maîtres d'ouvrage privés et publics 
            dans la conception et la réalisation de projets sur mesure. Nous croyons en une architecture 
            capable de traverser le temps.
          </p>
          <p>
            Notre approche repose sur l'écoute, le dialogue et une compréhension fine des usages. 
            <strong className="text-neutral-900 font-semibold block mt-4 mb-2">
              Pas de signature formelle imposée : chaque projet est une réponse unique à un lieu, un programme et un budget.
            </strong>
          </p>
          <p>
            Nous participons régulièrement à des concours d'architecture, convaincus qu'ils sont un 
            moteur d'innovation et de qualité architecturale.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;