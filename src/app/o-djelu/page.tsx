'use client'

import { Music, BrainCircuit } from 'lucide-react';
import { operaStructure } from '@/lib/data';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const AccordionItem = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <button
        className={`accordion-button font-cormorant text-xl w-full text-left py-2 font-semibold text-gray-300 hover:text-white transition-colors ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div className="accordion-content pl-4 border-l-2 border-primary text-gray-400">
        <p className="py-2 text-base leading-relaxed">{content}</p>
      </div>
    </div>
  );
};


export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAct, setSelectedAct] = useState<(typeof operaStructure.acts)[0] | null>(null);

  const openModal = (act: (typeof operaStructure.acts)[0]) => {
    setSelectedAct(act);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAct(null);
  }


  return (
    <div className="bg-black py-20 sm:py-28 page-enter pt-[72px]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-lato uppercase tracking-widest">O Djelu</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl font-cormorant">
            Memoria Maris: More Sjećanja
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-lato">
            "Cantata de Septem Perspectivae" je transmedijsko umjetničko djelo koje spaja suvremenu klasičnu glazbu s dubokim psihološkim istraživanjem, ukorijenjeno u bogatoj hrvatskoj pomorskoj baštini i folkloru. Strukturirana kroz devet činova, kantata nije samo priča, već i putovanje kroz sedam arhetipskih perspektiva koje borave u svima nama.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left card-grid">
            <div className="flex gap-x-6 items-start" style={{'--delay': '0ms'} as React.CSSProperties}>
                <div className="flex-none text-primary pt-1">
                    <Music className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white font-cormorant">Glazbena Inovacija</h3>
                    <p className="mt-2 text-gray-400 font-lato">
                        Skladba koristi hibridni pristup, kombinirajući tradicionalnu orkestraciju s elementima istarske ljestvice i klapskog pjevanja, te pionirsku upotrebu AI alata za generiranje tematskih motiva, stvarajući jedinstveni zvučni krajolik.
                    </p>
                </div>
            </div>
            <div className="flex gap-x-6 items-start" style={{'--delay': '100ms'} as React.CSSProperties}>
                <div className="flex-none text-primary pt-1">
                    <BrainCircuit className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white font-cormorant">Psihološka Dubina</h3>
                    <p className="mt-2 text-gray-400 font-lato">
                        Struktura djela temelji se na WDEP modelu Realitetne terapije, gdje svaki čin predstavlja fazu psihološkog procesa – Želje, Djelovanje, Evaluacija i Planiranje. To nije samo priča, već i alat za introspekciju.
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant text-white">Struktura Opere: Silazak u Devet Krugova</h2>
                <p className="mt-2 text-lg text-gray-400 font-lato">Svaki čin je istovremeno Stvaranje i Uništenje.</p>
            </div>
            <div className="flex flex-col items-center max-w-4xl mx-auto structure-diagram">
                {operaStructure.acts.map((act, index) => (
                    <React.Fragment key={act.id}>
                        <div 
                            className="glass-card w-full p-6 my-4 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => openModal(act)}
                             style={{'--delay': `${index * 100}ms`} as React.CSSProperties}
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="text-left flex-1">
                                    <h4 className="font-cormorant text-2xl text-primary">{act.title}</h4>
                                    <p className="italic text-gray-400 mt-1">"{act.paradox}"</p>
                                </div>
                                <div className="text-right text-sm flex flex-col h-full justify-between pl-4 border-l border-gray-700 ml-4">
                                    <div className="flex items-center justify-end text-[color:var(--heaven-color)] opacity-90">
                                        <span className="mr-2">{act.dan}</span>
                                        <span className="text-lg">▲</span>
                                    </div>
                                    <div className="flex items-center justify-end text-[color:var(--hell-color)] opacity-90 mt-2">
                                        <span className="mr-2">{act.krug}</span>
                                        <span className="text-lg">▼</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {index < operaStructure.connectors.length && (
                            <div className="diagram-connector w-full h-32 flex justify-center items-center" style={{'--delay': `${index * 100 + 50}ms`} as React.CSSProperties}>
                                <div className="text-gray-400 text-sm italic max-w-sm text-center">{operaStructure.connectors[index]}</div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-secondary/80 backdrop-blur-lg text-white border-primary/50 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAct && (
            <>
              <DialogHeader>
                <DialogTitle className="font-cormorant text-4xl md:text-5xl text-primary">{selectedAct.title}</DialogTitle>
                <DialogDescription asChild>
                    <div>
                        <div className="flex justify-between mt-2 mb-4 text-lg">
                            <p className="text-[color:var(--hell-color)] font-semibold">{selectedAct.krug}</p>
                            <p className="text-[color:var(--heaven-color)] font-semibold">{selectedAct.dan}</p>
                        </div>
                        <p className="italic text-gray-400 mt-4 mb-6 text-center text-base">"{selectedAct.paradox}"</p>
                    </div>
                </DialogDescription>
              </DialogHeader>
              <div className="border-t border-gray-700 pt-4">
                {selectedAct.scenes.map((scene, i) => (
                  <AccordionItem key={i} title={scene.title} content={scene.content} />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
