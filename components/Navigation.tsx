'use client'

import { useEffect, useState } from 'react'
import { useDemoModal } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Sans miroir', href: '#sans-miroirs' },
  { label: 'Le visagisme', href: '#visagisme' },
  { label: 'Relooking', href: '#relooking' },
  { label: "L'équipe", href: '#equipe' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { open } = useDemoModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-11 z-[65] transition-all duration-500 md:top-9',
        scrolled ? 'border-b border-encre/10 bg-creme/90 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="wrap-wide flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-[19px] italic text-encre">
          <span className="hidden sm:inline">Maison Sylvain Gouedard</span>
          <span className="sm:hidden">M·S·G</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="link-underline font-sans text-[12px] uppercase tracking-[0.14em] text-encre/70 transition-colors hover:text-encre">
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={open}
          className="bg-encre px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-creme transition-colors hover:bg-champagne hover:text-encre md:text-[12px]"
        >
          Rendez-vous
        </button>
      </nav>
    </header>
  )
}
