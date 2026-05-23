import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const colonnes = [
  { t: 'Pourquoi', d: "Parce que le miroir impose. Parce qu'il juge avant de révéler. Parce que vous méritez mieux que de vous voir pendant votre transformation." },
  { t: 'Comment', d: "Dans notre salle pastel et notre jardin d'hiver, vous vous installez, vous échangez, vous vous détendez. Sylvain et son équipe créent pour vous — pas avec vous comme spectatrice." },
  { t: 'Pourquoi ça change tout', d: "La révélation finale — ce moment où vous vous voyez pour la première fois — devient un vrai moment de magie. Les clientes disent n'avoir jamais vécu ça ailleurs." },
]

function BigWord({ word }: { word: string }) {
  return (
    <span className="block">
      {word.split('').map((c, i) => (
        <span
          key={i}
          className={cn(
            'inline-block transition-transform duration-300 hover:text-champagne',
            i % 2 === 0 ? 'hover:-rotate-3' : 'hover:rotate-3'
          )}
        >
          {c}
        </span>
      ))}
    </span>
  )
}

export function SansMiroirs() {
  return (
    <section id="sans-miroirs" className="relative overflow-hidden bg-creme py-24 md:py-36">
      <div aria-hidden className="wash-rose pointer-events-none absolute inset-0" />
      <div className="wrap-wide relative">
        <Reveal className="text-center">
          <p className="eyebrow text-champagne">— Le choix radical</p>
          <h2 className="mt-6 font-display italic text-encre" style={{ fontSize: 'clamp(3rem,9vw,7rem)', lineHeight: 0.9 }}>
            <BigWord word="Sans" />
            <BigWord word="miroir." />
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
          {colonnes.map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-encre">{c.t}</h3>
              <p className="mt-4 font-display text-[20px] italic leading-[1.6] text-encre/80">{c.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-20">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden bg-rose">
              <SmartImage src="/images/sans-miroirs/salon.jpg" alt="La salle pastel — 30 rue Feydeau, Paris 2e" fill sizes="100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 50%, transparent, rgba(196,168,130,0.12))' }} />
            </div>
            <figcaption className="mt-3 text-center font-sans text-[11px] italic tracking-wide text-encre/50">La salle pastel. 30 rue Feydeau, Paris 2e.</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
