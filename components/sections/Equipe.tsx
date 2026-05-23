import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const piliers = [
  { k: '01', t: "L'écoute", d: 'Avant le geste, la conversation. On apprend qui vous êtes, votre vie, vos envies.' },
  { k: '02', t: 'Le visagisme', d: 'Chaque paire de mains est formée par Sylvain à la même école : lire un visage avant de le toucher.' },
  { k: '03', t: 'La bienveillance', d: 'Aucun jugement, aucun miroir. Juste l’envie sincère de vous révéler.' },
]

export function Equipe() {
  return (
    <section id="equipe" className="bg-creme py-24 md:py-32">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Image d'ambiance — atelier, aucun visage nominatif */}
          <Reveal variant="curtain" className="md:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden border border-champagne/40 bg-rose">
              <SmartImage
                src="/images/sans-miroirs/salle-02.jpg"
                alt="L&apos;atelier — Maison Sylvain Gouedard"
                fill
                sizes="(max-width:768px) 100vw, 58vw"
                className="object-cover"
                style={{ filter: 'sepia(0.05) saturate(0.97)' }}
              />
              <span className="absolute -left-3 top-6 inline-block border border-champagne bg-creme px-4 py-2 font-display text-[15px] italic text-champagne" style={{ transform: 'rotate(-7deg)' }}>
                Hair Couture
              </span>
            </div>
          </Reveal>

          {/* Texte collectif — AUCUN nom de membre (cf. règle Talyn) */}
          <div className="md:col-span-5">
            <Reveal><p className="eyebrow text-champagne">La maison</p></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display italic text-encre" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', lineHeight: 1.02 }}>
                Des mains <em className="not-italic">qui savent.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 font-sans text-[17px] font-light leading-[1.8] text-encre/75">
                Derrière chaque transformation, un collectif discret — exigeant, sensible, fidèle. Tous formés
                par Sylvain Gouedard à la même exigence : celle du visagisme et de l&apos;écoute.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 font-display text-[19px] italic leading-[1.5] text-encre/70">
                «&nbsp;Notre métier, c&apos;est de vous révéler à vous-même.&nbsp;»
              </p>
              <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.16em] text-champagne">
                — Sylvain Gouedard, fondateur
              </p>
            </Reveal>
          </div>
        </div>

        {/* Piliers — comble l'espace, rythme l'éditorial */}
        <div className="mt-16 grid gap-px overflow-hidden border border-encre/10 bg-encre/10 md:mt-20 md:grid-cols-3">
          {piliers.map((p, i) => (
            <Reveal key={p.k} delay={i * 100}>
              <div className="flex h-full flex-col bg-creme p-8 md:p-10">
                <span className="font-display text-[26px] italic text-champagne">{p.k}</span>
                <h3 className="mt-4 font-display text-[24px] text-encre">{p.t}</h3>
                <p className="mt-3 font-sans text-[15px] font-light leading-relaxed text-encre/70">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
