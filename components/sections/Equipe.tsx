import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const autres = [
  { img: 'jerome', name: 'Jérôme', role: 'Coiffeur visagiste' },
  { img: 'equipe', name: "L'équipe", role: 'Formée par Sylvain' },
]

export function Equipe() {
  return (
    <section id="equipe" className="bg-creme py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-champagne">L&apos;équipe</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display italic text-encre" style={{ fontSize: 'clamp(2.6rem,5vw,4.5rem)', lineHeight: 1.0 }}>
              Des mains <em className="not-italic">qui savent.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Sylvain */}
          <Reveal variant="curtain" className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden border border-champagne/40 bg-rose sm:aspect-[3/2]">
              <SmartImage src="/images/equipe/sylvain.jpg" alt="Sylvain Gouedard, fondateur" fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover" />
            </div>
            <h3 className="mt-6 font-display text-[34px] text-encre">Sylvain Gouedard</h3>
            <p className="mt-1 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-champagne">Fondateur · Coiffeur visagiste · Expert relooking</p>
            <p className="mt-4 max-w-md font-display text-[18px] italic text-encre/75">«&nbsp;Mon métier, c&apos;est de vous révéler à vous-même.&nbsp;»</p>
          </Reveal>

          {/* Équipe */}
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-5 md:grid-cols-1">
            {autres.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className="flex items-center gap-5">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-champagne/40 bg-rose">
                    <SmartImage src={`/images/equipe/${m.img}.jpg`} alt={m.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-display text-[24px] text-encre">{m.name}</h4>
                    <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.14em] text-champagne">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
