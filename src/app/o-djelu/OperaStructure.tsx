'use client';
import React, { useRef, useEffect, useState } from 'react';
import { operaStructure } from '@/lib/data';
import { cn } from '@/lib/utils';

type Act = (typeof operaStructure.acts)[0];
interface OperaStructureProps {
  acts: Act[];
  connectors: string[];
  onActClick: (act: Act) => void;
}

const HellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--secondary))" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-secondary-foreground">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
        <path d="m15 9-6 6"/>
        <path d="m9 9 6 6"/>
    </svg>
);

const CreationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--primary))" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary-foreground">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
        <path d="m15 9-6 6"/>
        <path d="m9 9 6 6"/>
    </svg>
);

export default function OperaStructure({ acts, connectors, onActClick }: OperaStructureProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pathProgress, setPathProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top, height } = containerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                const start = viewportHeight;
                const end = -height;
                
                const progress = (start - top) / (start - end);
                setPathProgress(Math.max(0, Math.min(1, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16" style={{'--progress': pathProgress} as React.CSSProperties}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 md:gap-x-16">
                
                {/* Left Column (Hell) */}
                <div className="relative flex justify-end pt-24">
                     <div className="absolute top-0 right-0 text-right z-20">
                        <span className="font-cormorant text-secondary text-lg block">Silazak</span>
                        <div className="flex justify-end"><HellIcon /></div>
                    </div>
                    <div className="relative w-px h-full bg-secondary/30">
                        <div className="absolute w-full h-full bg-secondary" style={{ transform: `scaleY(${pathProgress})`, transformOrigin: 'top' }}></div>
                    </div>
                </div>

                {/* Center Column (Acts) */}
                <div>
                    {acts.map((act, index) => (
                        <React.Fragment key={act.id}>
                            <div className="relative flex justify-center items-center my-12 md:my-8" style={{minHeight: '150px'}}>
                                <div 
                                    className="mork-card w-full max-w-md my-2 relative z-10 cursor-pointer"
                                    onClick={() => onActClick(act)}
                                >
                                    <div className="flex justify-between items-start w-full min-h-[120px]">
                                        <div className="text-left flex-1 pr-4 flex flex-col">
                                            <h4 className="font-cormorant text-xl md:text-2xl text-white">{act.title}</h4>
                                            <div className="relative mt-2 flex-grow">
                                                <p className="italic text-gray-400 font-lato text-sm md:text-base line-clamp-2">
                                                    "{act.paradox}"
                                                </p>
                                                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                                            </div>
                                        </div>
                                        <div className="text-right text-xs sm:text-sm flex flex-col pl-4 border-l-2 border-primary/50">
                                            <p className="text-yellow-300">{act.dan}</p>
                                            <p className="text-pink-400 mt-1">{act.krug}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-0 -translate-x-[calc(100%_+_2rem)] md:-translate-x-[calc(100%_+_4rem)] flex items-center z-20">
                                    <div className="w-6 h-6 rounded-full bg-black border-2 border-secondary"></div>
                                </div>
                                <div className="absolute right-0 translate-x-[calc(100%_+_2rem)] md:translate-x-[calc(100%_+_4rem)] flex items-center z-20">
                                     <div className="w-6 h-6 rounded-full bg-black border-2 border-primary"></div>
                                </div>
                            </div>
                             {index < connectors.length && (
                                <div className="my-4 text-center text-gray-400 font-connector italic max-w-sm mx-auto text-base">
                                   {connectors[index]}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Right Column (Creation) */}
                <div className="relative flex justify-start pb-24">
                     <div className="absolute bottom-0 left-0 text-left z-20">
                        <div className="flex justify-start"><CreationIcon /></div>
                        <span className="font-cormorant text-primary text-lg mt-2 block">Stvaranje</span>
                    </div>
                    <div className="relative w-px h-full bg-primary/30">
                         <div className="absolute w-full h-full bg-primary" style={{ transform: `scaleY(${pathProgress})`, transformOrigin: 'bottom' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
