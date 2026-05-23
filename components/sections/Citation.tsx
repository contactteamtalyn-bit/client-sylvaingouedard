import { Reveal } from '@/components/ui/Reveal'

export function Citation() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-encre px-6 py-24 text-center">
      <Reveal className="mx-auto max-w-4xl">
        <span className="mx-auto mb-8 block h-px w-[30px] bg-champagne" aria-hidden />
        <p className="font-display italic text-creme" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 1.3 }}>
          «&nbsp;Certaines rencontres nous donnent
          <br />
          l&apos;impression de renaître…&nbsp;»
        </p>
        <p className="mt-8 font-sans text-[13px] font-light tracking-wide text-champagne/80">
          — Charles Pépin, philosophe · citation chère à Sylvain Gouedard
        </p>
        <span className="mx-auto mt-8 block h-px w-[30px] bg-champagne" aria-hidden />
      </Reveal>
    </section>
  )
}
