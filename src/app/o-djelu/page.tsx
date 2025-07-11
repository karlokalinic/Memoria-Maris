'use client'

import { operaStructure } from '@/lib/data';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import OperaStructure from './OperaStructure';


export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAct, setSelectedAct] = useState<(typeof operaStructure.acts)[0] | null>(null);

  const openModal = (act: (typeof operaStructure.acts)[0]) => {
    setSelectedAct(act);
    setIsModalOpen(true);
  }

  return (
    <div className="bg-black py-20 sm:py-28 page-enter pt-[72px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base font-special leading-7 text-secondary uppercase tracking-widest chaotic-rotate-1">O Djelu</h2>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-6xl font-cormorant chaotic-rotate-n2">
            Memoria Maris: More Sjećanja
          </h1>
          <p className="mt-6 text-base md:text-lg leading-8 text-white font-lato chaotic-rotate-1">
            "Cantata de Septem Perspectivae" je transmedijsko umjetničko djelo koje spaja suvremenu klasičnu glazbu s dubokim psihološkim istraživanjem, ukorijenjeno u bogatoj hrvatskoj pomorskoj baštini i folkloru. Strukturirana kroz devet činova, kantata nije samo priča, već i putovanje kroz sedam arhetipskih perspektiva koje borave u svima nama.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="mork-card chaotic-rotate-2">
                <h3 className="text-2xl font-semibold text-secondary font-cormorant">Glazbena Inovacija</h3>
                <p className="mt-2 text-gray-300 font-lato text-sm md:text-base">
                    Skladba koristi hibridni pristup, kombinirajući tradicionalnu orkestraciju s elementima istarske ljestvice i klapskog pjevanja, te pionirsku upotrebu AI alata za generiranje tematskih motiva, stvarajući jedinstveni zvučni krajolik.
                </p>
            </div>
            <div className="mork-card chaotic-rotate-n1">
                <h3 className="text-2xl font-semibold text-secondary font-cormorant">Psihološka Dubina</h3>
                <p className="mt-2 text-gray-300 font-lato text-sm md:text-base">
                    Struktura djela temelji se na WDEP modelu Realitetne terapije, gdje svaki čin predstavlja fazu psihološkog procesa – Želje, Djelovanje, Evaluacija i Planiranje. To nije samo priča, već i alat za introspekciju.
                </p>
            </div>
        </div>

        <div className="mt-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-cormorant text-primary chaotic-rotate-1">Struktura Opere: Silazak i Stvaranje</h2>
                <p className="mt-2 text-base md:text-lg text-white font-lato chaotic-rotate-n2">Svaki čin je istovremeno korak dublje u psihu i korak bliže novom svitanju.</p>
            </div>
            <OperaStructure acts={operaStructure.acts} connectors={operaStructure.connectors} onActClick={openModal} />
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-black text-white border-4 border-secondary max-w-4xl w-[95%] max-h-[90vh] overflow-y-auto">
          {selectedAct && (
            <>
              <DialogHeader>
                <DialogTitle className="font-cormorant text-3xl md:text-5xl text-secondary">{selectedAct.title}</DialogTitle>
                <DialogDescription asChild>
                    <div>
                        <div className="flex justify-between mt-2 mb-4 text-base md:text-lg font-special">
                            <p className="text-primary">{selectedAct.dan}</p>
                            <p className="text-secondary">{selectedAct.krug}</p>
                        </div>
                        <p className="italic text-gray-300 mt-4 mb-6 text-center text-sm md:text-base font-lato">"{selectedAct.paradox}"</p>
                    </div>
                </DialogDescription>
              </DialogHeader>
              <div className="border-t-2 border-primary/50 pt-4">
                 <Accordion type="single" collapsible className="w-full">
                    {selectedAct.scenes.map((scene, i) => (
                      <AccordionItem value={`item-${i}`} key={i} className="border-b-2 border-primary/30">
                        <AccordionTrigger className="font-cormorant text-xl md:text-2xl text-white hover:text-secondary transition-colors">
                            {scene.title}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 border-l-2 border-secondary text-gray-300 font-lato">
                           <p className="py-2 text-sm md:text-base leading-relaxed">{scene.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
