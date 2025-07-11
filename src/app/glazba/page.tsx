'use client';

import { musicTracks } from '@/lib/data';
import React, { useState, useRef, useEffect } from 'react';

export default function GlazbaPage() {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const audioRefs = useRef<{[key: string]: HTMLAudioElement | null}>({});

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audioEl => {
        if (audioEl) {
          audioEl.pause();
        }
      });
    }
  }, []);

  const togglePlay = (trackFile: string) => {
    Object.entries(audioRefs.current).forEach(([key, audioEl]) => {
      if (key !== trackFile && audioEl && !audioEl.paused) {
        audioEl.pause();
      }
    });
    
    const audio = audioRefs.current[trackFile];
    if (audio) {
      if (audio.paused) {
        audio.play().then(() => {
          setActivePlayer(trackFile);
        });
      } else {
        audio.pause();
        setActivePlayer(null);
      }
    }
  };

  const handleEnded = (trackFile: string) => {
    if (activePlayer === trackFile) {
        setActivePlayer(null);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-20 page-enter pt-[72px]">
        <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-primary chaotic-rotate-n1 text-shadow-custom">Glazba</h1>
            <p className="mt-3 text-lg md:text-xl text-white font-special chaotic-rotate-1">Poslušajte i preuzmite zvučni zapis kantate.</p>
        </div>
        <div className="max-w-4xl mx-auto mork-card border-secondary">
            <ul className="divide-y-2 divide-primary/50">
                {musicTracks.map((track, index) => (
                    <li key={index} className={`flex flex-col sm:flex-row items-center justify-between p-4 gap-4 transition-colors duration-300 ${index % 2 === 0 ? 'chaotic-rotate-1' : 'chaotic-rotate-n2'}`}>
                        <div className="flex items-center space-x-4">
                            <button onClick={() => togglePlay(track.file)} className="text-secondary focus:outline-none text-5xl font-cormorant transition-transform duration-200 hover:scale-125">
                                {activePlayer === track.file ? 'II' : '>'}
                            </button>
                            <div>
                                <p className="text-white text-lg md:text-xl font-special">{track.title}</p>
                                <p className="text-gray-400 text-sm font-lato">{track.duration}</p>
                            </div>
                        </div>
                        <a 
                            href={track.file} 
                            download 
                            className="mork-button !py-1 !px-4 !text-sm self-end sm:self-center"
                        >
                            Preuzmi
                        </a>
                        <audio 
                          ref={el => audioRefs.current[track.file] = el}
                          src={track.file}
                          onEnded={() => handleEnded(track.file)}
                          onPause={() => handleEnded(track.file)}
                          preload="metadata"
                        ></audio>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
