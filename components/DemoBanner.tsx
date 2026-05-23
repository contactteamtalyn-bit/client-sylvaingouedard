export function DemoBanner() {
  return (
    <a
      href="https://instagram.com/maison.talyn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 top-0 z-[70] flex h-11 items-center justify-center border-b border-champagne bg-encre px-3 text-creme transition-colors hover:bg-[#272320] md:h-9"
    >
      <span className="text-center font-sans text-[10px] uppercase leading-none tracking-[0.16em] sm:text-[11px]">
        Maquette démo · Réalisée par Maison Talyn pour Maison Sylvain Gouedard · Non finalisée ·{' '}
        <span className="text-champagne">@maison.talyn</span>
      </span>
    </a>
  )
}
