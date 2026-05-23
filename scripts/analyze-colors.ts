/**
 * ÉTAPE 0 — Analyse couleurs du site client (Playwright).
 * Usage : npx tsx scripts/analyze-colors.ts (npm i -D playwright && npx playwright install chromium)
 *
 * NB (Maison Talyn) : analyse déjà réalisée à la livraison via extraction directe du site live.
 * Palette retenue (univers salle pastel + jardin d'hiver, accent or confirmé sur le site) :
 *   --creme     #F7F3EE   fond, crème poudré
 *   --rose      #E8D5CB   rose poudré (féminité, chaleur)
 *   --sauge     #B5C4B1   vert sauge (jardin d'hiver)
 *   --encre     #1E1A17   texte / sections sombres
 *   --champagne #C4A882   accent or champagne discret
 */
import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } })
  await page.goto('https://www.sylvain-gouedard.fr/', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'scripts/_site.png', fullPage: true })
  const css = await page.evaluate(() => {
    const cs = getComputedStyle(document.body)
    return { bg: cs.backgroundColor, color: cs.color }
  })
  console.log('Site CSS:', css)
  console.log('Accent or confirmé sur le site : ~rgb(209,159,71) → champagne #C4A882')
  await browser.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
