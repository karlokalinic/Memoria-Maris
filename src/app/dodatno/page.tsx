export default function DodatnoPage() {
    return (
        <div className="page-enter pt-[72px]">
            <section className="py-20 md:py-28 bg-black">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="analysis-section" style={{ '--delay': '0ms' } as React.CSSProperties}>
                        <h2 className="text-4xl md:text-5xl font-cormorant text-white">Manifest Tragedije</h2>
                        <p className="text-base md:text-lg mt-4 leading-relaxed text-gray-300 font-lato">
                            Opera <span className="text-primary font-semibold">"Slana Krv"</span> nije samo priča; ona je psihomahija, bitka za dušu postavljena na pozornicu Jadrana. Šah nije samo igra; on je, kako navodi izvještaj "Kraljevska Igra kao Unutarnji Kozmos", mapa ljudske psihe.
                        </p>
                        <p className="text-base md:text-lg mt-4 leading-relaxed text-gray-300 font-lato">
                            Ova analiza spaja ta dva svijeta. Svaki lik u operi je arhetip, a svaki arhetip ima svoju figuru na šahovskoj ploči. Njihove borbe, strasti i padovi su potezi u vječnoj igri između svjesnog i nesvjesnog, reda i kaosa, sudbine i slobodne volje.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-secondary/20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12 analysis-section" style={{ '--delay': '100ms' } as React.CSSProperties}>
                        <h2 className="text-4xl md:text-5xl font-cormorant text-white">Stručna Analiza</h2>
                        <p className="mt-2 text-base md:text-lg text-gray-400 font-lato">Književni i glazbeni temelji tragedije.</p>
                    </div>
                    <div className="space-y-8">
                        <div className="glass-card p-6 md:p-8 rounded-lg analysis-section" style={{ '--delay': '200ms' } as React.CSSProperties}>
                            <h3 className="font-cormorant text-2xl md:text-3xl mb-4 text-white">Književna Perspektiva</h3>
                            <p className="leading-relaxed text-gray-300 font-lato text-sm md:text-base">Libreto "Slane Krvi" je postdramsko djelo koje se oslanja na brehtijanski teatar i intertekstualnost. Pripovjedač, koji lomi "četvrti zid", funkcionira kao Verfremdungseffekt, tjerajući publiku na kritičku distancu umjesto puke emocionalne identifikacije. Korištenje Danteovog "Pakla" i biblijske "Knjige Postanka" nije samo citat, već strukturni princip koji stvara temeljnu dijalektičku napetost: svaki kreativni čin (Stvaranje) istovremeno je korak prema propasti (Pakao). Likovi nisu realistični pojedinci, već jungovski arhetipovi (Sjena, Anima, Persona) uhvaćeni u klopku vlastite prirode i društvenih očekivanja.</p>
                        </div>
                        <div className="glass-card p-6 md:p-8 rounded-lg analysis-section" style={{ '--delay': '300ms' } as React.CSSProperties}>
                            <h3 className="font-cormorant text-2xl md:text-3xl mb-4 text-white">Glazbena Perspektiva</h3>
                            <p className="leading-relaxed text-gray-300 font-lato text-sm md:text-base">Glazba bi morala odražavati ovu psihološku slojevitost. Očekuje se primjena <span className="text-primary">lajtmotiva</span> za svakog lika/arhetip, koji se glazbeno transformiraju ovisno o stanju psihe. Za Čudovište, kao što je navedeno, nužna je primjena <span className="text-primary">sonorizma</span> i aleatorike (po uzoru na Pendereckog), stvarajući zvučnu maglu koja je više fizički osjećaj nego melodija. Sirena bi zahtijevala ekstremne <span className="text-primary">kolorature</span> koje prelaze iz anđeoske ljepote u histerični krik. Gusarev bariton bio bi herojski, ali s konstantnom disonancom u harmoniji koja odražava njegov unutarnji rascjep. Orkestracija bi trebala biti dinamična: od komornih, intimnih trenutaka (Mjesec) do monumentalnih tutti dionica koje predstavljaju More ili Oluju.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 text-center bg-black">
                <div className="container mx-auto px-6 max-w-4xl analysis-section" style={{ '--delay': '400ms' } as React.CSSProperties}>
                    <h2 className="text-4xl md:text-5xl font-cormorant text-white">Pouka Tragedije</h2>
                    <p className="text-lg md:text-xl mt-6 leading-relaxed text-gray-300 font-lato">
                        Konačna istina opere, izrečena kroz Pripovjedača, leži u paradoksu Realitetne terapije: ne postoji izdaja od strane vanjskog svijeta. More ne izdaje, Oluja ne mrzi. Osjećaj izdaje je bol koja nastaje iz našeg vlastitog, nerealnog očekivanja da možemo kontrolirati druge i svijet oko sebe. Gusar nije žrtva sudbine; on je žrtva vlastite slike o sebi koju nije mogao ispuniti.
                    </p>
                    <p className="text-lg md:text-xl mt-4 leading-relaxed text-primary font-semibold font-lato">
                        Sloboda ne leži u pobjedi na ploči, već u spoznaji da sami biramo pravila igre koju igramo unutar sebe.
                    </p>
                </div>
            </section>
        </div>
    );
}
