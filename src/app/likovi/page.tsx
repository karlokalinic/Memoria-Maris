import LikoviGrid from './LikoviGrid';
import { characterData } from '@/lib/data';

export default function LikoviPage() {
  return (
    <div className="container mx-auto px-6 py-20 page-enter pt-[72px]">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-cormorant font-bold text-white">Dramatis Personae</h1>
        <p className="mt-3 text-lg text-gray-400 font-lato">Glasovi koji tkaju priču o moru i duši.</p>
      </div>
      <LikoviGrid characters={characterData} />
    </div>
  );
}
