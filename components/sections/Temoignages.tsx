import { Reveal } from '@/components/ui/Reveal'

const avis = [
  { text: "Dans un décor cosy et proche du fantastique, j'ai vécu un moment plein d'émotions et de partages.", name: 'Cliente Google', rot: '-1deg' },
  { text: "J'ai passé 4h ensoleillées et déconnectée du monde. Fantastique endroit, à la fois élégant, raffiné et plein de simplicité.", name: 'Cliente Google', rot: '1deg' },
  { text: "Sylvain a su cerner rapidement ma personnalité et mes envies. Je suis encore impressionnée par son talent.", name: 'Delphine', rot: '-0.5deg' },
]

export function Temoignages() {
  return (
    <section className="bg-rose-clair py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-champagne">659 voix</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display italic text-encre" style={{ fontSize: 'clamp(2.6rem,5vw,4.5rem)', lineHeight: 1.0 }}>
              Ce qu&apos;elles <em className="not-italic">ont vécu.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={i} delay={i * 110}>
              <figure
                className="flex h-full flex-col bg-creme p-8 md:[transform:rotate(var(--rot))]"
                style={{ ['--rot' as string]: a.rot, boxShadow: '0 20px 44px -24px rgba(30,26,23,0.35)' }}
              >
                <span aria-hidden className="font-display italic leading-[0.5] text-champagne" style={{ fontSize: '5.5rem' }}>«</span>
                <blockquote className="-mt-2 font-sans text-[16px] font-light italic leading-[1.7] text-encre/85">{a.text}</blockquote>
                <span className="my-5 block h-px w-[40px] bg-champagne" aria-hidden />
                <figcaption className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-encre">{a.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
