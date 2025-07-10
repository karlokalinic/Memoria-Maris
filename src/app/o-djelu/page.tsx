import { Music, Github } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-black py-20 sm:py-28 page-enter pt-[72px]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-lato uppercase tracking-widest">O Djelu</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl font-cormorant">
            Memoria Maris: More Sjećanja
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-lato">
            "Cantata de Septem Perspectivae" je transmedijsko umjetničko djelo koje spaja suvremenu klasičnu glazbu s dubokim psihološkim istraživanjem, ukorijenjeno u bogatoj hrvatskoj pomorskoj baštini i folkloru. Strukturirana kroz devet činova, kantata nije samo priča, već i putovanje kroz sedam arhetipskih perspektiva koje borave u svima nama.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left card-grid">
            <div className="flex gap-x-6 items-start" style={{'--delay': '0ms'} as React.CSSProperties}>
                <div className="flex-none text-primary pt-1">
                    <Music className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white font-cormorant">Glazbena Inovacija</h3>
                    <p className="mt-2 text-gray-400 font-lato">
                        Skladba koristi hibridni pristup, kombinirajući tradicionalnu orkestraciju s elementima istarske ljestvice i klapskog pjevanja, te pionirsku upotrebu AI alata za generiranje tematskih motiva, stvarajući jedinstveni zvučni krajolik.
                    </p>
                </div>
            </div>
            <div className="flex gap-x-6 items-start" style={{'--delay': '100ms'} as React.CSSProperties}>
                <div className="flex-none text-primary pt-1">
                    <Github className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white font-cormorant">Psihološka Dubina</h3>
                    <p className="mt-2 text-gray-400 font-lato">
                        Struktura djela temelji se na WDEP modelu Realitetne terapije, gdje svaki čin predstavlja fazu psihološkog procesa – Želje, Djelovanje, Evaluacija i Planiranje. To nije samo priča, već i alat za introspekciju.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
