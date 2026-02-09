import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';

const Sustainability: React.FC = () => {
  const points = [
    "Conception bioclimatique",
    "Matériaux locaux et durables",
    "Performance énergétique (Minergie, labels suisses)",
    "Pérennité des choix constructifs"
  ];

  return (
    <Section id="sustainability" bg="gray" className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
           <h2 className="text-3xl font-light mb-6">Durabilité</h2>
           <p className="text-neutral-600 mb-8 leading-relaxed">
             La durabilité est intégrée dès les premières esquisses. Ce n'est pas une option, mais une composante essentielle de notre responsabilité d'architecte.
           </p>
           <ul className="space-y-4">
             {points.map((point, idx) => (
               <li key={idx} className="flex items-center gap-3">
                 <span className="p-1 rounded-full bg-green-100 text-green-800">
                   <Check size={16} />
                 </span>
                 <span className="text-neutral-800 font-medium">{point}</span>
               </li>
             ))}
           </ul>
        </div>
        <div className="relative h-80 md:h-full min-h-[300px]">
           <img 
            src="https://images.unsplash.com/photo-1560762257-a6b4c5f3379f?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Détail architectural durable" 
            className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-xl"
           />
        </div>
      </div>
    </Section>
  );
};

export default Sustainability;