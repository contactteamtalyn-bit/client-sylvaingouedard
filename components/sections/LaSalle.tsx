import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const photos = ['salle-01', 'salle-02', 'salle-03']

export function LaSalle() {
  return (
    <section id="salle" className="bg-encre py-24 text-creme md:py-32">
      <div className="wrap-wide">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><p className="eyebrow text-champagne">— L&apos;écrin</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display italic" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', lineHeight: 1.08 }}>
              La salle pastel. <em className="not-italic">Le jardin d&apos;hiver.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-[500px] font-sans text-[17px] font-light leading-relaxed text-champagne/70">
              Deux espaces pensés pour que vous oubliiez le monde du dehors. Pas de miroir. Pas de bruit.
              Juste le temps de vous.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p} delay={(i % 3) * 90}>
              <div className="group relative aspect-[4/5] overflow-hidden bg-[#2a2521]">
                <SmartImage src={`/images/sans-miroirs/${p}.jpg`} alt="La salle pastel — Maison Sylvain Gouedard" fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'sepia(0.06) saturate(0.95)' }} />
                <span className="absolute bottom-3 left-3 font-sans text-[11px] italic text-creme opacity-0 transition-opacity duration-400 group-hover:opacity-70" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
                  30 rue Feydeau
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
