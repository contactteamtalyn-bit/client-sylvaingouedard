import { Sparkles, Wand2, Scissors } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

const offres = [
  { Icon: Sparkles, title: 'Coaching Image', badge: 'Demi-journée · journée', desc: "Colorimétrie personnalisée, bilan de style, shopping accompagné. Vous repartez avec votre nuancier personnel et un cahier de style unique.", bg: 'bg-rose', cta: 'Découvrir le coaching' },
  { Icon: Wand2, title: 'Relooking Complet', badge: 'Transformation totale', desc: "Coupe visagisme + couleur + coaching image + maquillage. La journée la plus importante de votre style. Les clientes disent : « je renaissais ».", bg: 'bg-sauge', cta: 'Réserver mon relooking', feature: true },
  { Icon: Scissors, title: 'Espace Barbier Privé', badge: 'Pour lui', desc: "Un espace dédié aux hommes les plus exigeants. Même philosophie, même bienveillance, même qualité Hair Couture.", bg: 'bg-creme', cta: "Découvrir l'espace" },
]

export function Relooking() {
  return (
    <section id="relooking" className="bg-creme py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-champagne">Aller plus loin</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display italic text-encre" style={{ fontSize: 'clamp(2.6rem,5vw,4.5rem)', lineHeight: 1.0 }}>
              Se réinventer, <em className="not-italic">complètement.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[520px] font-sans text-[17px] font-light leading-relaxed text-encre/65">
              Au-delà de la coupe, Sylvain accompagne une transformation globale — coiffure, image,
              confiance en soi.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {offres.map((o, i) => (
            <Reveal key={o.title} delay={i * 110}>
              <article className={`flex h-full flex-col p-8 md:p-9 ${o.bg} ${o.feature ? 'lg:-mt-4 lg:pb-12' : ''}`}>
                <o.Icon size={34} className="text-champagne" strokeWidth={1.4} />
                <h3 className="mt-6 font-display text-[28px] italic text-encre">{o.title}</h3>
                <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-champagne">{o.badge}</p>
                <p className="mt-4 flex-1 font-sans text-[15px] font-light leading-relaxed text-encre/75">{o.desc}</p>
                <DemoCTA ariaLabel={o.cta} className="link-underline mt-7 self-start font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-encre">
                  {o.cta} →
                </DemoCTA>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
