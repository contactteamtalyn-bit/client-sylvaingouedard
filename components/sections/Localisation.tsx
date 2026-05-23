import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function Localisation() {
  return (
    <section id="contact" className="bg-sauge py-24 md:py-32">
      <div className="wrap grid items-stretch gap-10 md:grid-cols-2 md:gap-14">
        {/* Carte */}
        <Reveal variant="curtain">
          <div className="relative h-full min-h-[320px] overflow-hidden border border-encre/15">
            <iframe
              title="Maison Sylvain Gouedard — 30 rue Feydeau, Paris 2e"
              src="https://www.google.com/maps?q=30+Rue+Feydeau+75002+Paris&output=embed"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, filter: 'sepia(0.25) saturate(0.9) contrast(0.95)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        {/* Infos */}
        <div className="flex flex-col justify-center">
          <Reveal><p className="eyebrow text-encre/60">— Nous trouver</p></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 font-display italic text-encre" style={{ fontSize: 'clamp(2.6rem,5vw,4.5rem)', lineHeight: 0.98 }}>
              30, rue <em className="not-italic">Feydeau.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div className="mt-8 space-y-5 font-sans text-[15px] font-light leading-relaxed text-encre/80">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-encre/50">Adresse</p>
                <p className="mt-1">30 rue Feydeau · 75002 Paris · Quartier Bourse</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-encre/50">Horaires</p>
                <p className="mt-1">Lundi : fermé · Mardi → Samedi : 10h – 19h</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-encre/50">Contact</p>
                <p className="mt-1">01 42 50 64 48 · sylvain-gouedard.fr</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={190}>
            <DemoCTA ariaLabel="Prendre rendez-vous" className="mt-9 inline-block self-start bg-encre px-8 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-creme transition-colors hover:bg-champagne hover:text-encre">
              Prendre rendez-vous →
            </DemoCTA>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
