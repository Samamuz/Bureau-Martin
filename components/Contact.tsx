import React, { useState } from 'react';
import Section from './Section';
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulation d'envoi API
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <Section id="contact" bg="gray" title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        
        {/* Contact Info & Map */}
        <div className="flex flex-col h-full">
          <div className="mb-10">
            <h3 className="text-3xl font-light mb-6">Un projet en tête ?</h3>
            <p className="text-neutral-600 mb-10 leading-relaxed">
              Que ce soit pour une étude de faisabilité, une rénovation ou un nouveau bâtiment, 
              nous serions ravis d'en discuter autour d'un premier rendez-vous.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <MapPin className="text-neutral-900 mt-1" />
                 <div>
                   <strong className="block text-neutral-900">Bureau Martin</strong>
                   <span className="text-neutral-600">Rue du Lac 12, 1000 Lausanne</span>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <Phone className="text-neutral-900" />
                 <span className="text-neutral-600">+41 21 000 00 00</span>
               </div>
               <div className="flex items-center gap-4">
                 <Mail className="text-neutral-900" />
                 <a href="mailto:info@bureau-martin.ch" className="text-neutral-600 hover:text-neutral-900 hover:underline">
                   info@bureau-martin.ch
                 </a>
               </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full flex-grow min-h-[250px] lg:min-h-0 relative bg-neutral-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-sm border border-neutral-200">
            <iframe 
              width="100%" 
              height="100%" 
              className="absolute inset-0 w-full h-full"
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.620,46.515,6.650,46.530&amp;layer=mapnik&amp;marker=46.521,6.635"
              title="Carte de localisation"
            ></iframe>
            <a 
              href="https://www.openstreetmap.org/?mlat=46.521&amp;mlon=6.635#map=15/46.5210/6.6350" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Voir sur OpenStreetMap"
            ></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg min-h-[480px] flex flex-col justify-center h-full">
          {formStatus === 'success' ? (
            <div className="text-center py-12 animate-in fade-in duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-800 rounded-full mb-6">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-medium text-neutral-900 mb-2">Message envoyé</h4>
              <p className="text-neutral-600">
                Merci de nous avoir contactés. <br/>
                Nous reviendrons vers vous dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-sm font-semibold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Nom complet
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-300 px-3 py-3 focus:outline-none focus:border-neutral-900 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-300 px-3 py-3 focus:outline-none focus:border-neutral-900 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Type de projet
                </label>
                <select 
                  id="type"
                  className="w-full bg-neutral-50 border-b border-neutral-300 px-3 py-3 focus:outline-none focus:border-neutral-900 transition-colors text-neutral-700"
                >
                  <option>Nouvelle construction</option>
                  <option>Rénovation / Transformation</option>
                  <option>Étude de faisabilité</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-neutral-50 border-b border-neutral-300 px-3 py-3 focus:outline-none focus:border-neutral-900 transition-colors"
                  placeholder="Parlez-nous de votre projet..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-neutral-900 text-white font-medium py-4 uppercase tracking-widest text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Envoi en cours...
                  </>
                ) : (
                  'Envoyer le message'
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </Section>
  );
};

export default Contact;