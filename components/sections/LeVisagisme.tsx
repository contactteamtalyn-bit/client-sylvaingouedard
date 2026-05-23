import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

export function LeVisagisme() {
  return (
    <section id="visagisme" className="bg-rose-clair py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Reveal><p className="eyebrow text-champagne">— Le cœur du métier</p></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display italic text-encre" style={{ fontSize: 'clamp(2.6rem,5vw,4.5rem)', lineHeight: 1.0 }}>
              L&apos;art du <em className="not-italic">visagisme.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-7 max-w-xl font-sans text-[17px] font-light leading-[1.8] text-encre/75">
              Le visagisme, c&apos;est comprendre votre visage avant de toucher vos cheveux. Sa forme, vos
              proportions, votre personnalité, votre mode de vie. Sylvain a formé toute son équipe à cette
              lecture — fine, précise, bienveillante.
            </p>
          </Reveal>
          <Reveal delay={190}>
            <p className="mt-5 max-w-xl font-sans text-[17px] font-light leading-[1.8] text-encre/75">
              Ici, on ne vous demande pas quelle coupe vous voulez. On vous dit ce qui vous sublimera.
              Nuancier personnalisé, cahier de style unique en France — des outils créés par Sylvain pour
              que vous repartiez autonome et sûre de vous.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <span className="my-8 block h-px w-[60px] bg-champagne" aria-hidden />
            <p className="font-sans text-[13px] tracking-wide text-encre/60">4,7★ · 659 avis Google · Depuis 2005</p>
          </Reveal>
        </div>

        <Reveal variant="curtain" className="md:col-span-6">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-champagne/40 bg-rose">
              <SmartImage src="/images/equipe/sylvain.jpg" alt="Sylvain Gouedard, coiffeur visagiste" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
            <span className="absolute -left-3 top-6 inline-block border border-champagne bg-creme px-4 py-2 font-display text-[16px] italic text-champagne" style={{ transform: 'rotate(-8deg)' }}>
              Hair Couture
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
