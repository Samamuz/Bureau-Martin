import React, { useState } from 'react';
import Section from './Section';
import { Project } from '../types';
import { ArrowRight, ImageOff } from 'lucide-react';

const projectData: Project[] = [
  {
    id: 1,
    title: "Habitation familiale",
    location: "Vaud",
    type: "Logement individuel",
    image: "https://plus.unsplash.com/premium_photo-1680100256127-e73d3f1f3376?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Rénovation d'une grange",
    location: "Valais",
    type: "Transformation & patrimoine",
    image: "https://images.unsplash.com/photo-1706606992688-64da9a186871?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Groupe scolaire",
    location: "Fribourg",
    type: "Bâtiment public",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Immeuble collectif",
    location: "Lausanne",
    type: "Logement collectif",
    image: "https://images.unsplash.com/photo-1552835376-89b8cdfacb4d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden aspect-[4/3] bg-neutral-100 mb-4 relative">
        {!imgError ? (
          <img 
            src={project.image} 
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 bg-neutral-100">
            <ImageOff size={32} className="mb-2" />
            <span className="text-xs uppercase tracking-wider">Image non disponible</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-end border-b border-neutral-200 pb-2">
        <div>
          <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-500 mt-1">
            {project.location} — {project.type}
          </p>
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-900">
           <ArrowRight size={20} />
        </span>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projets">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <button className="px-8 py-3 border border-neutral-900 text-neutral-900 uppercase text-xs font-semibold tracking-widest hover:bg-neutral-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2">
          Voir tous les projets
        </button>
      </div>
    </Section>
  );
};

export default Projects;