import React from 'react';
import Section from './Section';
import { MethodStep } from '../types';

const Method: React.FC = () => {
  const steps: MethodStep[] = [
    { number: "01", title: "Analyse", description: "Compréhension du site, du programme et des contraintes" },
    { number: "02", title: "Concept", description: "Définition d'une idée forte et cohérente" },
    { number: "03", title: "Développement", description: "Traduction technique et réglementaire du projet" },
    { number: "04", title: "Réalisation", description: "Suivi rigoureux jusqu'à la livraison" }
  ];

  return (
    <Section id="method" title="Méthode de travail">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="relative group">
            <div className="text-6xl font-bold text-neutral-100 absolute -top-4 -left-2 z-0 group-hover:text-neutral-200 transition-colors">
              {step.number}
            </div>
            <div className="relative z-10 pt-8 pl-4">
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed border-l border-neutral-300 pl-3">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-16 text-center text-neutral-500 italic">
        Nous privilégions une collaboration étroite avec les ingénieurs, artisans et autorités locales.
      </p>
    </Section>
  );
};

export default Method;