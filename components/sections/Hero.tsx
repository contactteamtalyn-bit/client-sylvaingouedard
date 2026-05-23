'use client'

import { useRef } from 'react'
import { DemoCTA } from '@/components/DemoModal'

export function Hero() {
  const ovalRef = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent) {
    const box = e.currentTarget as HTMLElement
    const oval = ovalRef.current
    if (!oval) return
    const r = box.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height
    oval.style.transform = `translate(${-dx * 26}px, ${-dy * 26}px)`
  }
  function onLeave() {
    if (ovalRef.current) ovalRef.current.style.transform = 'translate(0,0)'
  }

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
          <h1 className="animate-fade-up font-display italic text-encre" style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)', lineHeight: 0.92, maxWidth: 720 }}>
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

        {/* Pseudo-miroir interactif */}
        <div className="relative mx-auto w-full max-w-[420px] animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div onMouseMove={onMove} onMouseLeave={onLeave} className="relative aspect-[4/5] w-full overflow-hidden" style={{ background: '#EDE8E2' }}>
            <div
              ref={ovalRef}
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[58%] w-[44%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out"
              style={{
                borderRadius: '50% 50% 48% 52% / 60% 60% 40% 40%',
                background: 'radial-gradient(50% 50% at 50% 40%, rgba(30,26,23,0.18), rgba(30,26,23,0.05) 70%, transparent)',
                filter: 'blur(18px)',
              }}
            />
            <span className="absolute bottom-5 left-0 right-0 text-center font-display text-[14px] italic text-encre/45">
              Ce n&apos;est pas un miroir.
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
