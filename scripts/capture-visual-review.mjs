import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from 'playwright';
const base = process.env.REFY_CATALOG_URL || 'http://127.0.0.1:6009';
const out = 'public/review/after';
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch();
const cases = [['dashboard','páginas-dashboard--visao-geral'], ['buttons','components-atoms-button--todas-variantes'], ['content-card','components-organisms-propertycard--grid'], ['decision-deck','components-organisms-swipedeck--gesto'], ['themes','fundamentos-refy--personalizar']];
try {
  for (const [name,id] of cases) for (const width of [375,1280]) {
    const page = await browser.newPage({ viewport: {width, height:900}, reducedMotion:'reduce' });
    const errors = []; page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${base}/iframe.html?id=${encodeURIComponent(id)}&viewMode=story&globals=theme:light`);
    await page.locator('#storybook-root > *').waitFor();
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => Promise.all([...document.images].map(img => img.decode().catch(() => {}))));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width, `${id}: overflow`);
    await page.screenshot({path:`${out}/${name}-${width}.png`,fullPage:true,animations:'disabled'});
    assert.deepEqual(errors, [], `${id}: render errors`);
    await page.close();
  }
} finally { await browser.close(); }
console.log('10 capturas depois, em duas larguras; baseline anterior preservado.');
