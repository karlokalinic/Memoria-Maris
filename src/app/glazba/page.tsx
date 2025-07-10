'use client';

import { musicTracks } from '@/lib/data';
import { PlayCircle, PauseCircle, Download } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

export default function GlazbaPage() {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const audioRefs = useRef<{[key: string]: HTMLAudioElement | null}>({});

  useEffect(() => {
    // cleanup refs on unmount
    return () => {
      Object.values(audioRefs.current).forEach(audioEl => {
        if (audioEl) {
          audioEl.pause();
        }
      });
    }
  }, []);

  const togglePlay = (trackFile: string) => {
    // Pause other players
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
            <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-white">Glazba</h1>
            <p className="mt-3 text-base md:text-lg text-gray-400 font-lato">Poslušajte i preuzmite zvučni zapis kantate.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-lg shadow-xl music-list">
            <ul className="divide-y divide-gray-700">
                {musicTracks.map((track, index) => (
                    <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 gap-4 hover:bg-gray-800/60 transition-colors duration-300" style={{'--delay': `${index * 50}ms`} as React.CSSProperties}>
                        <div className="flex items-center space-x-4">
                            <button onClick={() => togglePlay(track.file)} className="text-primary focus:outline-none transition-transform duration-200 hover:scale-110 flex-shrink-0">
                                {activePlayer === track.file ? <PauseCircle size={32} /> : <PlayCircle size={32} />}
                            </button>
                            <div>
                                <p className="text-white text-base md:text-lg font-semibold font-lato">{track.title}</p>
                                <p className="text-gray-400 text-sm">{track.duration}</p>
                            </div>
                        </div>
                        <a 
                            href={track.file} 
                            download 
                            className="flex items-center self-end sm:self-center gap-2 border-2 border-primary text-primary rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                        >
                            <Download size={14} />
                            <span>Preuzmi</span>
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
