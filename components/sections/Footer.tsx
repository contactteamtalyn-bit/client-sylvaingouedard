import { AlertTriangle } from 'lucide-react'
import { DemoCTA } from '@/components/DemoModal'

export function Footer() {
  return (
    <footer className="bg-encre-profond pt-20 text-creme">
      <div className="wrap grid gap-12 pb-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-sans text-[14px] font-bold uppercase tracking-[0.14em]">Maison Sylvain Gouedard</p>
          <p className="mt-3 font-display text-[14px] italic text-champagne">Coiffeur Visagiste · Paris · Depuis 2005</p>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-creme/40">Le salon</p>
          <p className="mt-4 font-sans text-[14px] font-light leading-relaxed text-creme/75">
            30 rue Feydeau · 75002 Paris
            <br />
            01 42 50 64 48
            <br />
            Mardi → Samedi · 10h – 19h
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-creme/40">Réserver</p>
          <ul className="mt-4 space-y-2 font-sans text-[14px] font-light text-creme/75">
            <li>
              <a href="https://www.sylvain-gouedard.fr/" target="_blank" rel="noopener noreferrer" data-allow="true" className="link-underline">sylvain-gouedard.fr</a>
            </li>
            <li><DemoCTA className="link-underline font-sans text-[14px] font-light text-champagne">Prendre rendez-vous</DemoCTA></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-creme/10">
        <div className="wrap py-8">
          <div className="flex items-start gap-3 border border-champagne/50 bg-[#16130F] p-5">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-champagne" strokeWidth={1.6} />
            <div className="font-sans text-[12px] leading-relaxed text-creme/70">
              <p className="font-semibold uppercase tracking-[0.12em] text-creme/90">Maquette démonstration non finale</p>
              <p className="mt-1">
                Site créé par Maison Talyn — <span className="text-champagne">@maison.talyn</span>. Tous les contenus sont des
                placeholders. Contact pour publication :{' '}
                <a href="https://instagram.com/maison.talyn" target="_blank" rel="noopener noreferrer" data-allow="true" className="text-champagne underline">@maison.talyn</a>
              </p>
            </div>
          </div>
          <p className="mt-6 text-center font-sans text-[11px] tracking-[0.14em] text-creme/30">© {new Date().getFullYear()} Maison Sylvain Gouedard · Maquette Maison Talyn</p>
        </div>
      </div>
    </footer>
  )
}
