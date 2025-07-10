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

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedChar(null);
    }

    return (
        <div className="bg-black bg-opacity-20 chessboard-bg py-20 sm:py-28 page-enter pt-[72px]">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-cormorant text-white">Lica i Figure</h1>
                    <p className="mt-2 text-base md:text-lg text-gray-400 font-lato">Kliknite na kartu da otkrijete dvostruki identitet.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 card-grid">
                    {Object.values(chessData).map((char, index) => (
                        <div 
                            key={index}
                            className="glass-card p-6 rounded-lg cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary"
                            style={{'--delay': `${index * 100}ms`} as React.CSSProperties}
                            onClick={() => openModal(char)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-cormorant text-2xl md:text-3xl text-white">{char.operaName}</h3>
                                <div className="text-4xl md:text-5xl text-primary">{char.chessSymbol}</div>
                            </div>
                            <p className="text-gray-400 mt-2 font-lato text-sm md:text-base">{char.chessPiece}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-secondary/80 backdrop-blur-lg text-white border-primary/50 max-w-4xl w-[95%]">
                    {selectedChar && (
                        <>
                            <DialogHeader>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <DialogTitle className="font-cormorant text-3xl md:text-5xl text-white">{selectedChar.operaName}</DialogTitle>
                                        <p className="text-primary text-xl md:text-2xl font-semibold font-lato">{selectedChar.chessPiece}</p>
                                    </div>
                                    <div className="text-5xl md:text-7xl text-primary opacity-50">{selectedChar.chessSymbol}</div>
                                </div>
                            </DialogHeader>
                            <div className="my-6 border-t border-b border-gray-700 py-4">
                                <h4 className="font-cormorant text-lg md:text-xl text-gray-300 mb-2">Opis lika u operi:</h4>
                                <p className="italic text-gray-400 font-lato text-sm md:text-base">"{selectedChar.operaDesc}"</p>
                            </div>
                            <div>
                                <h4 className="font-cormorant text-lg md:text-xl text-gray-300 mb-2">Psihološka analiza figure:</h4>
                                <p className="leading-relaxed font-lato text-sm md:text-base">{selectedChar.analysis}</p>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
