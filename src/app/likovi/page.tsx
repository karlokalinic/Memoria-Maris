import { characterData } from '@/lib/data';
import LikoviGrid from './LikoviGrid';

export default function LikoviPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-20 page-enter pt-[72px]">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-primary chaotic-rotate-n2 text-shadow-custom">Dramatis Personae</h1>
        <p className="mt-3 text-lg md:text-xl text-white font-special chaotic-rotate-2">Glasovi koji tkaju priču o moru i duši.</p>
      </div>
      <LikoviGrid characters={characterData} />
    </div>
  );
}