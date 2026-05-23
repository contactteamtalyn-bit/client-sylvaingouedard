import { Hero } from '@/components/sections/Hero'
import { Citation } from '@/components/sections/Citation'
import { SansMiroirs } from '@/components/sections/SansMiroirs'
import { LeVisagisme } from '@/components/sections/LeVisagisme'
import { Relooking } from '@/components/sections/Relooking'
import { LaSalle } from '@/components/sections/LaSalle'
import { Presse } from '@/components/sections/Presse'
import { Temoignages } from '@/components/sections/Temoignages'
import { Equipe } from '@/components/sections/Equipe'
import { Localisation } from '@/components/sections/Localisation'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Citation />
      <SansMiroirs />
      <LeVisagisme />
      <Relooking />
      <LaSalle />
      <Presse />
      <Temoignages />
      <Equipe />
      <Localisation />
      <BookingCTA />
      <Footer />
    </main>
  )
}
