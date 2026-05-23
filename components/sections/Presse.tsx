import { Reveal } from '@/components/ui/Reveal'

const noms = ['Cosmopolitan', 'Psychologies', 'Do It In Paris', 'Laura Flessel', 'Group 3C Radio']

const cards = [
  { source: 'Cosmopolitan', quote: 'Élu meilleur coiffeur visagiste de Paris.' },
  { source: 'Psychologies', quote: "L'expert du relooking en France." },
  { source: 'Laura Flessel', quote: 'Recommandé par la Ministre des Sports.' },
]

export function Presse() {
  return (
    <section className="overflow-hidden bg-creme py-24 md:py-32">
      <div className="wrap">
        <Reveal><p className="eyebrow text-champagne">Ils en parlent</p></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display italic text-encre" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', lineHeight: 1.05 }}>
            La presse <em className="not-italic">l&apos;a remarqué.</em>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden border-y border-encre/10 py-6">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center">
              {noms.map((n) => (
                <span key={n} className="mx-7 font-display text-[22px] italic text-encre/55 md:text-[26px]">
                  {n} <span className="text-champagne not-italic">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="wrap mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.source} delay={i * 110}>
            <div className="flex h-full flex-col border border-champagne/50 bg-white p-8">
              <span className="font-display text-[24px] italic text-encre">{c.source}</span>
              <span className="mt-3 block h-px w-10 bg-champagne" aria-hidden />
              <p className="mt-4 font-sans text-[15px] font-light leading-relaxed text-encre/70">{c.quote}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
