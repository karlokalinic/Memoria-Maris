import { characterData } from '@/lib/data';
import LikoviGrid from './LikoviGrid';

export default function LikoviPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-20 page-enter pt-[72px]">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-white">Dramatis Personae</h1>
        <p className="mt-3 text-base md:text-lg text-gray-400 font-lato">Glasovi koji tkaju priču o moru i duši.</p>
      </div>
      <LikoviGrid characters={characterData} />
    </div>
  );
}
