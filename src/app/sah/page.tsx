'use client';
import { chessData } from '@/lib/data';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function SahPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChar, setSelectedChar] = useState<(typeof chessData)[keyof typeof chessData] | null>(null);

    const openModal = (charData: (typeof chessData)[keyof typeof chessData]) => {
        setSelectedChar(charData);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-black py-20 sm:py-28 page-enter pt-[72px]">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-6xl font-cormorant text-primary chaotic-rotate-1 text-shadow-custom">Lica i Figure</h1>
                    <p className="mt-2 text-lg md:text-xl text-white font-special chaotic-rotate-n1">Kliknite na kartu da otkrijete dvostruki identitet.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.values(chessData).map((char, index) => (
                        <div 
                            key={index}
                            className={`mork-card p-6 ${index % 3 === 0 ? 'chaotic-rotate-2' : index % 3 === 1 ? 'chaotic-rotate-n1' : 'chaotic-rotate-1'}`}
                            onClick={() => openModal(char)}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-cormorant text-3xl md:text-4xl text-secondary">{char.operaName}</h3>
                                    <p className="text-primary mt-1 font-special">{char.chessPiece}</p>
                                </div>
                                <div className="text-6xl md:text-7xl text-primary opacity-80">{char.chessSymbol}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-black text-white border-4 border-secondary max-w-4xl w-[95%]">
                    {selectedChar && (
                        <>
                            <DialogHeader>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <DialogTitle className="font-cormorant text-4xl md:text-6xl text-secondary">{selectedChar.operaName}</DialogTitle>
                                        <p className="text-primary text-xl md:text-2xl font-special mt-2">{selectedChar.chessPiece}</p>
                                    </div>
                                    <div className="text-7xl md:text-8xl text-primary opacity-50">{selectedChar.chessSymbol}</div>
                                </div>
                            </DialogHeader>
                            <div className="my-6 border-t-2 border-b-2 border-primary/50 py-4">
                                <h4 className="font-cormorant text-xl md:text-2xl text-white mb-2">Opis lika u operi:</h4>
                                <p className="italic text-gray-300 font-lato text-sm md:text-base">"{selectedChar.operaDesc}"</p>
                            </div>
                            <div>
                                <h4 className="font-cormorant text-xl md:text-2xl text-white mb-2">Psihološka analiza figure:</h4>
                                <p className="leading-relaxed font-lato text-sm md:text-base">{selectedChar.analysis}</p>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}