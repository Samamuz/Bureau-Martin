import React from 'react';
import Section from './Section';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Architecture",
      items: ["Études de faisabilité", "Avant-projet et projet d'exécution", "Demandes d'autorisation", "Direction architecturale"]
    },
    {
      title: "Urbanisme & territoire",
      items: ["Études urbaines", "Concours d'architecture", "Développement de sites"]
    },
    {
      title: "Transformation & rénovation",
      items: ["Rénovation énergétique", "Transformation de bâtiments existants", "Valorisation du patrimoine"]
    },
    {
      title: "Suivi de chantier",
      items: ["Appels d'offres", "Coordination des intervenants", "Suivi des coûts, délais et qualité"]
    }
  ];

  const domains = [
    "Logements individuels et collectifs",
    "Bâtiments publics",
    "Bureaux et bâtiments administratifs",
    "Équipements culturels et scolaires",
    "Architecture alpine et rurale"
  ];

  return (
    <Section id="services" bg="gray" title="Prestations">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-6 shadow-sm border-t-4 border-neutral-900">
            <h3 className="text-lg font-bold mb-4">{service.title}</h3>
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="text-sm text-neutral-600 flex items-start">
                  <span className="mr-2 text-neutral-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
            {service.title.includes("Transformation") && (
              <p className="mt-4 text-xs italic text-neutral-500 border-l-2 border-neutral-300 pl-2">
                Ex. : transformer une grange en habitation tout en préservant son caractère
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-200 pt-16">
        <h3 className="text-xl md:text-2xl font-light mb-8 text-center">Domaines d'intervention</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {domains.map((domain, idx) => (
            <span key={idx} className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-full text-sm font-medium">
              {domain}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;