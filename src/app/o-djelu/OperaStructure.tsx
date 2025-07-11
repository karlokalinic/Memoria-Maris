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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 2a10 10 0 1 0-10 10"/>
        <path d="M12 2a10 10 0 1 1-10 10"/>
        <path d="M12 2a10 10 0 1 1 10 10"/>
        <path d="M2 12a10 10 0 1 0 10-10"/>
        <path d="M2 12a10 10 0 1 1 10-10"/>
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
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto px-12" style={{'--progress': pathProgress} as React.CSSProperties}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            
            <div className="absolute top-0 left-4 md:left-8 h-full">
                <svg width="100%" height="100%" viewBox="0 0 2 1800" preserveAspectRatio="none" className="absolute top-0 left-0 w-2 h-full">
                    <path d="M 1 0 V 1800" stroke="hsl(var(--secondary) / 0.3)" strokeWidth="2" strokeDasharray="10 10" />
                    <path d="M 1 0 V 1800" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray={`${1800}`} strokeDashoffset={`${1800 * (1 - pathProgress)}`} />
                </svg>
                 <div className="absolute top-8 left-0 flex flex-col items-start gap-2">
                    <HellIcon />
                    <span className="font-cormorant text-secondary text-lg">Silazak</span>
                </div>
            </div>
            
            <div className="absolute top-0 right-4 md:right-8 h-full">
                 <svg width="100%" height="100%" viewBox="0 0 2 1800" preserveAspectRatio="none" className="absolute top-0 right-0 w-2 h-full">
                    <path d="M 1 1800 V 0" stroke="hsl(var(--primary) / 0.3)" strokeWidth="2" strokeDasharray="10 10" />
                    <path d="M 1 1800 V 0" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray={`${1800}`} strokeDashoffset={`${1800 * (1 - pathProgress)}`}/>
                </svg>
                 <div className="absolute bottom-8 right-0 flex flex-col items-end gap-2">
                    <CreationIcon />
                    <span className="font-cormorant text-primary text-lg">Stvaranje</span>
                </div>
            </div>


            {acts.map((act, index) => (
                <React.Fragment key={act.id}>
                    <div className="relative flex justify-center items-center my-16 md:my-8" style={{minHeight: '150px'}}>
                        {/* Left Side (Hell) */}
                        <div className="absolute left-4 md:left-8 flex items-center">
                            <div className="w-6 h-6 rounded-full bg-black border-2 border-secondary z-10"></div>
                        </div>

                        {/* Right Side (Creation) */}
                        <div className="absolute right-4 md:right-8 flex items-center">
                             <div className="w-6 h-6 rounded-full bg-black border-2 border-primary z-10"></div>
                        </div>

                        {/* Center Card */}
                        <div 
                            className="mork-card w-full max-w-md my-2 relative z-10"
                            onClick={() => onActClick(act)}
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="text-left flex-1 pr-4">
                                    <h4 className="font-cormorant text-xl md:text-2xl text-white">{act.title}</h4>
                                    <p className="italic text-gray-400 mt-1 text-sm md:text-base font-lato">"{act.paradox}"</p>
                                </div>
                                <div className="text-right text-xs sm:text-sm flex flex-col pl-4 border-l-2 border-primary/50">
                                    <p className="text-yellow-300">{act.dan}</p>
                                    <p className="text-pink-400 mt-1">{act.krug}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {index < connectors.length && (
                        <div className="my-4 text-center text-gray-400 font-special italic max-w-sm mx-auto">
                           {connectors[index]}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
