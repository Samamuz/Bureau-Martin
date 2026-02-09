import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'legal' | 'privacy' | null>(null);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  }, []);

  const openModal = (type: 'legal' | 'privacy') => {
    setActiveModal(type);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, closeModal]);

  return (
    <>
      <footer className="bg-neutral-900 text-neutral-400 py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © 2025 Bureau Martin — Tous droits réservés
          </div>
          <div className="flex gap-6 text-sm">
            <button 
              onClick={() => openModal('legal')} 
              className="hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Mentions légales
            </button>
            <button 
              onClick={() => openModal('privacy')} 
              className="hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Protection des données
            </button>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
            aria-hidden="true"
          ></div>
          
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={closeModal} 
              className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors p-2"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-light mb-8 text-neutral-900">
              {activeModal === 'legal' ? "Mentions légales" : "Protection des données"}
            </h2>
            
            <div className="text-neutral-600 space-y-6 text-sm leading-relaxed">
              {activeModal === 'legal' ? (
                <>
                  <div>
                    <h3 className="text-neutral-900 font-medium mb-1">Éditeur</h3>
                    <p>Bureau Martin<br/>Rue du Lac 12<br/>1000 Lausanne<br/>Suisse</p>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-medium mb-1">Contact</h3>
                    <p>info@bureau-martin.ch<br/>+41 21 000 00 00</p>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-medium mb-1">Droits d'auteur</h3>
                    <p>L'ensemble de ce site relève de la législation suisse et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    Nous attachons une grande importance à la protection de vos données personnelles. 
                    Ce site a été conçu pour minimiser la collecte de données.
                  </p>
                  <div>
                    <h3 className="text-neutral-900 font-medium mb-1">Cookies</h3>
                    <p>Ce site n'utilise pas de cookies de traçage publicitaire. Seuls des cookies techniques strictement nécessaires au fonctionnement peuvent être utilisés.</p>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 font-medium mb-1">Données transmises</h3>
                    <p>Les informations que vous nous transmettez via le formulaire de contact ou par email sont utilisées exclusivement pour traiter votre demande. Elles ne sont ni vendues ni transmises à des tiers.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;