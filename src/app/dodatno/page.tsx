export default function DodatnoPage() {
    return (
        <div className="page-enter pt-[72px] bg-black text-white">
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="chaotic-rotate-n2">
                        <h2 className="text-4xl md:text-6xl font-cormorant text-secondary text-shadow-custom">Manifest Tragedije</h2>
                        <p className="text-base md:text-lg mt-4 leading-relaxed text-gray-200 font-lato">
                            Opera <span className="text-primary font-bold">"Slana Krv"</span> nije samo priča; ona je psihomahija, bitka za dušu postavljena na pozornicu Jadrana. Šah nije samo igra; on je, kako navodi izvještaj "Kraljevska Igra kao Unutarnji Kozmos", mapa ljudske psihe.
                        </p>
                        <p className="text-base md:text-lg mt-4 leading-relaxed text-gray-200 font-lato">
                            Ova analiza spaja ta dva svijeta. Svaki lik u operi je arhetip, a svaki arhetip ima svoju figuru na šahovskoj ploči. Njihove borbe, strasti i padovi su potezi u vječnoj igri između svjesnog i nesvjesnog, reda i kaosa, sudbine i slobodne volje.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12 chaotic-rotate-2">
                        <h2 className="text-4xl md:text-5xl font-cormorant text-primary">Stručna Analiza</h2>
                        <p className="mt-2 text-base md:text-lg text-gray-300 font-special">Književni i glazbeni temelji tragedije.</p>
                    </div>
                    <div className="space-y-12">
                        <div className="mork-card p-6 md:p-8 chaotic-rotate-1">
                            <h3 className="font-cormorant text-2xl md:text-3xl mb-4 text-secondary">Književna Perspektiva</h3>
                            <p className="leading-relaxed text-gray-200 font-lato text-sm md:text-base">Libreto "Slane Krvi" je postdramsko djelo koje se oslanja na brehtijanski teatar i intertekstualnost. Pripovjedač, koji lomi "četvrti zid", funkcionira kao Verfremdungseffekt, tjerajući publiku na kritičku distancu umjesto puke emocionalne identifikacije. Korištenje Danteovog "Pakla" i biblijske "Knjige Postanka" nije samo citat, već strukturni princip koji stvara temeljnu dijalektičku napetost: svaki kreativni čin (Stvaranje) istovremeno je korak prema propasti (Pakao). Likovi nisu realistični pojedinci, već jungovski arhetipovi (Sjena, Anima, Persona) uhvaćeni u klopku vlastite prirode i društvenih očekivanja.</p>
                        </div>
                        <div className="mork-card p-6 md:p-8 chaotic-rotate-n2 border-secondary">
                            <h3 className="font-cormorant text-2xl md:text-3xl mb-4 text-secondary">Glazbena Perspektiva</h3>
                            <p className="leading-relaxed text-gray-200 font-lato text-sm md:text-base">Glazba bi morala odražavati ovu psihološku slojevitost. Očekuje se primjena <span className="text-primary font-bold">lajtmotiva</span> za svakog lika/arhetip, koji se glazbeno transformiraju ovisno o stanju psihe. Za Čudovište, kao što je navedeno, nužna je primjena <span className="text-primary font-bold">sonorizma</span> i aleatorike (po uzoru na Pendereckog), stvarajući zvučnu maglu koja je više fizički osjećaj nego melodija. Sirena bi zahtijevala ekstremne <span className="text-primary font-bold">kolorature</span> koje prelaze iz anđeoske ljepote u histerični krik. Gusarev bariton bio bi herojski, ali s konstantnom disonancom u harmoniji koja odražava njegov unutarnji rascjep. Orkestracija bi trebala biti dinamična: od komornih, intimnih trenutaka (Mjesec) do monumentalnih tutti dionica koje predstavljaju More ili Oluju.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 text-center">
                <div className="container mx-auto px-6 max-w-4xl chaotic-rotate-1">
                    <h2 className="text-4xl md:text-5xl font-cormorant text-primary">Pouka Tragedije</h2>
                    <p className="text-lg md:text-xl mt-6 leading-relaxed text-gray-200 font-lato">
                        Konačna istina opere, izrečena kroz Pripovjedača, leži u paradoksu Realitetne terapije: ne postoji izdaja od strane vanjskog svijeta. More ne izdaje, Oluja ne mrzi. Osjećaj izdaje je bol koja nastaje iz našeg vlastitog, nerealnog očekivanja da možemo kontrolirati druge i svijet oko sebe. Gusar nije žrtva sudbine; on je žrtva vlastite slike o sebi koju nije mogao ispuniti.
                    </p>
                    <p className="text-xl md:text-2xl mt-8 leading-relaxed text-secondary font-bold font-special chaotic-rotate-n2">
                        Sloboda ne leži u pobjedi na ploči, već u spoznaji da sami biramo pravila igre koju igramo unutar sebe.
                    </p>
                </div>
            </section>
        </div>
    );
}