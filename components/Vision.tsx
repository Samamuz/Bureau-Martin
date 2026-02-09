import React from 'react';
import Section from './Section';
import { Mountain, Leaf, LayoutTemplate, Layers } from 'lucide-react';

const Vision: React.FC = () => {
  const values = [
    {
      icon: <Mountain className="w-6 h-6" />,
      text: "Respect du paysage, du patrimoine et du tissu urbain existant"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      text: "Matériaux locaux, circuits courts, économie de moyens"
    },
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      text: "Qualité des espaces et du confort de vie"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      text: "Précision constructive et souci du détail"
    }
  ];

  return (
    <Section id="vision" bg="gray" title="Notre Vision">
      <div className="max-w-4xl">
        <p className="text-xl md:text-2xl font-light mb-12">
          L'architecture est un acte de responsabilité. Face aux enjeux climatiques, sociaux et culturels, 
          nous défendons une pratique consciente et engagée :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-neutral-800 mt-1">
                {value.icon}
              </div>
              <p className="font-medium text-neutral-700">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Vision;