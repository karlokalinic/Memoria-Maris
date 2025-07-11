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
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4" style={{'--progress': pathProgress} as React.CSSProperties}>
            
            {/* Left Side Path (Hell) */}
            <div className="absolute top-0 left-[calc(50%-14rem)] md:left-[calc(50%-16rem)] w-px h-full bg-secondary/30">
                <div className="absolute w-full h-full bg-secondary" style={{ transform: `scaleY(${pathProgress})`, transformOrigin: 'top' }}></div>
            </div>
             <div className="absolute top-16 left-[calc(50%-14rem)] md:left-[calc(50%-16rem)] -translate-x-1/2 z-20 text-center">
                <div className="relative -top-16 text-center">
                    <HellIcon />
                    <span className="font-cormorant text-secondary text-lg mt-2 block">Silazak</span>
                </div>
            </div>

            {/* Right Side Path (Creation) */}
            <div className="absolute top-0 right-[calc(50%-14rem)] md:right-[calc(50%-16rem)] w-px h-full bg-primary/30">
                 <div className="absolute w-full h-full bg-primary" style={{ transform: `scaleY(${pathProgress})`, transformOrigin: 'bottom' }}></div>
            </div>
            <div className="absolute bottom-16 right-[calc(50%-14rem)] md:right-[calc(50%-16rem)] translate-x-1/2 z-20 text-center">
                <div className="relative -bottom-16 text-center">
                    <CreationIcon />
                    <span className="font-cormorant text-primary text-lg mt-2 block">Stvaranje</span>
                </div>
            </div>


            {acts.map((act, index) => (
                <React.Fragment key={act.id}>
                    <div className="relative flex justify-center items-center my-16 md:my-8" style={{minHeight: '150px'}}>
                        
                        {/* Left Side Dot (Hell) */}
                        <div className="absolute left-[calc(50%-14rem)] md:left-[calc(50%-16rem)] -translate-x-1/2 flex items-center z-10">
                            <div className="w-6 h-6 rounded-full bg-black border-2 border-secondary"></div>
                        </div>

                        {/* Right Side Dot (Creation) */}
                        <div className="absolute right-[calc(50%-14rem)] md:right-[calc(50%-16rem)] translate-x-1/2 flex items-center z-10">
                             <div className="w-6 h-6 rounded-full bg-black border-2 border-primary"></div>
                        </div>

                        {/* Center Card */}
                        <div 
                            className="mork-card w-full max-w-md my-2 relative z-10 cursor-pointer"
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