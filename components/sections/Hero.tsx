import { SmartImage } from '@/components/ui/SmartImage'
import { DemoCTA } from '@/components/DemoModal'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-creme pb-16 pt-28 md:pt-24">
      <div className="wrap-wide absolute inset-x-0 top-[84px] z-10 flex items-start justify-between gap-4 md:top-[96px]">
        <p className="animate-fade-up font-sans text-[11px] uppercase tracking-[0.22em] text-encre/50">
          Maison Sylvain Gouedard · Paris 2e · Depuis 2005
        </p>
        <span className="hidden shrink-0 animate-fade-up border border-champagne px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.16em] text-champagne sm:inline-block" style={{ animationDelay: '0.15s' }}>
          ★ Meilleur coiffeur visagiste de Paris
        </span>
      </div>

      <div className="wrap-wide grid w-full items-center gap-12 md:grid-cols-2 md:gap-10">
        {/* Texte */}
        <div>
          <h1 className="animate-fade-up font-display italic text-encre" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.6rem)', lineHeight: 0.96, maxWidth: 640 }}>
            <span className="block">Ici,</span>
            <span className="block">pas de miroir.</span>
            <span className="block" style={{ color: '#C4A882' }}>Juste vous.</span>
          </h1>
          <p className="mt-8 max-w-[480px] animate-fade-up font-sans text-[17px] font-light leading-relaxed text-encre/70" style={{ animationDelay: '0.2s' }}>
            Depuis 2005, Sylvain Gouedard a fait le choix de retirer tous les miroirs de son salon. Vous
            vous découvrirez uniquement à la fin — transformé, sublimé, à travers le regard de ceux qui
            vous aiment.
          </p>
          <span className="my-7 block h-px w-[60px] animate-fade-up bg-champagne" style={{ animationDelay: '0.3s' }} aria-hidden />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <DemoCTA ariaLabel="Prendre rendez-vous" className="bg-encre px-9 py-4 font-sans text-[14px] font-medium text-creme transition-colors duration-300 hover:bg-champagne hover:text-encre">
              Prendre rendez-vous
            </DemoCTA>
            <a href="#sans-miroirs" className="font-display text-[16px] italic text-champagne transition-transform duration-300 hover:translate-y-0.5">
              Découvrir notre philosophie ↓
            </a>
          </div>
        </div>

        {/* Portrait — une cliente révélée (illustre « Juste vous ») */}
        <div className="relative mx-auto w-full max-w-[420px] animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-rose">
            <SmartImage
              src="/images/hero/portrait.jpg"
              alt="Une cliente révélée — Maison Sylvain Gouedard"
              fill
              priority
              sizes="(max-width:768px) 100vw, 420px"
              className="object-cover"
              style={{ objectPosition: '50% 18%' }}
            />
            <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,26,23,0.30), transparent 42%)' }} />
            <span className="absolute bottom-5 left-0 right-0 text-center font-display text-[14px] italic text-creme" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}>
              Révélée, sans miroir.
            </span>
          </div>
          <svg viewBox="0 0 24 24" className="absolute -bottom-6 -right-2 h-10 w-10 text-encre" style={{ opacity: 0.08 }} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" />
          </svg>
        </div>
      </div>
    </section>
  )
}
