'use client'

import { useRef } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function BookingCTA() {
  const blobRef = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent) {
    const el = e.currentTarget as HTMLElement
    const blob = blobRef.current
    if (!blob) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    blob.style.left = `${x}%`
    blob.style.top = `${y}%`
  }

  return (
    <section
      onMouseMove={onMove}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-encre py-24 text-center"
    >
      {/* silhouette floue qui suit lentement la souris */}
      <div
        ref={blobRef}
        aria-hidden
        className="pointer-events-none absolute h-[40vh] w-[28vh] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: '50%',
          top: '45%',
          transition: 'left 3s cubic-bezier(0.16,1,0.3,1), top 3s cubic-bezier(0.16,1,0.3,1)',
          borderRadius: '50% 50% 48% 52% / 60% 60% 40% 40%',
          background: 'radial-gradient(50% 50% at 50% 40%, rgba(196,168,130,0.10), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="wrap relative z-[2]">
        <Reveal><p className="eyebrow text-champagne">Votre moment</p></Reveal>
        <Reveal delay={90}>
          <h2 className="mx-auto mt-6 max-w-5xl font-display italic text-creme" style={{ fontSize: 'clamp(2.6rem,7vw,5.6rem)', lineHeight: 1 }}>
            Prête à vous
            <br />
            <em style={{ color: '#C4A882' }}>découvrir&nbsp;?</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-[480px] font-sans text-[18px] font-light leading-relaxed text-champagne/70">
            Pas de miroir. Juste la magie. 30 rue Feydeau, Paris 2e.
          </p>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <DemoCTA ariaLabel="Réserver ma transformation" className="bg-champagne px-11 py-[18px] font-sans text-[14px] font-semibold uppercase tracking-[0.12em] text-encre transition-colors duration-300 hover:bg-creme">
              Réserver ma transformation
            </DemoCTA>
            <a href="tel:+33142506448" data-allow="true" className="link-underline font-sans text-[14px] font-light text-creme/60 transition-colors hover:text-creme">
              Appeler · 01 42 50 64 48
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
