import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { componentAreas, componentCatalog } from '../src/pages/PlaygroundPage/catalog';
const axe = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const url = '/iframe.html?id=fundamentos-playground--aplicacao&viewMode=story';

test('inventário cobre exatamente as famílias e links reais do catálogo', async ({ request }) => {
  const directories = readdirSync('src/components').filter(name => readdirSync(`src/components/${name}`).some(file => file.endsWith('.stories.tsx')));
  expect(componentCatalog.map(entry => entry.id).sort()).toEqual(directories.sort());
  const index = await (await request.get('/index.json')).json();
  for (const entry of componentCatalog) expect(index.entries[entry.storyId], entry.storyId).toBeTruthy();
});

test('busca abre a família na área correspondente e preserva personalização', async ({ page }) => {
  await page.goto(`${url}&globals=theme:dark;fonts:studio`);
  const scope = page.getByTestId('playground');
  await scope.getByRole('button', { name: 'Buscar área ou componente…' }).click();
  const dialog = scope.getByRole('dialog');
  await dialog.getByRole('combobox').fill('EventTimeline');
  await dialog.getByRole('combobox').press('ArrowDown');
  await dialog.getByRole('combobox').press('Enter');
  await expect(scope.getByRole('heading', { name: 'Dados e atividades', exact: true })).toBeVisible();
  await expect(scope.getByTestId('component-demo')).toHaveAttribute('data-component', 'EventTimeline');
  await expect(scope).toHaveAttribute('data-theme', 'dark');
  await expect(scope.getByTestId('component-demo')).toHaveCSS('font-family', /DM Sans/);
});

for (const [area, label] of Object.entries(componentAreas)) for (const mode of ['light', 'dark']) {
  test(`${label} / ${mode}: todas as famílias, fontes e contraste`, async ({ page }) => {
    test.setTimeout(180000);
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${url}&globals=theme:${mode}`);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const scope = page.getByTestId('playground');
    const controls = scope.locator('header[aria-label="Personalizar aplicação"]');
    await scope.getByRole('button', { name: label, exact: true }).click();
    await page.addScriptTag({ content: axe });
    for (const entry of componentCatalog.filter(entry => entry.area === area)) {
      await scope.getByLabel('Componente desta área').selectOption(entry.id);
      const stage = scope.getByTestId('component-demo');
      await expect(stage.locator('[data-demo-ready]'), entry.id).toBeVisible();
      await expect(stage).not.toContainText('Não foi possível abrir');
      for (const [font, family] of [['humanist', 'Source Sans 3'], ['plex', 'IBM Plex Sans'], ['studio', 'DM Sans']]) {
        await controls.getByLabel('Conjunto de fontes').selectOption(font);
        await expect(stage).toHaveCSS('font-family', new RegExp(family));
      }
      for (const skin of ['refy', 'outline', 'gradient']) {
        await controls.getByLabel('Aparência').selectOption(skin);
        if (entry.id === 'Calendar') await expect(stage.getByRole('gridcell').first().locator('span')).toHaveCSS('border-top-left-radius', skin === 'outline' ? '0px' : '9999px');
        await stage.scrollIntoViewIfNeeded();
        const failures = await stage.evaluate(async el => (await (window as any).axe.run(el, { runOnly: ['color-contrast'] })).violations.map((v: any) => ({ id: v.id, nodes: v.nodes.map((n: any) => ({ target: n.target, summary: n.failureSummary })) })));
        expect.soft(failures, `${entry.id} / ${skin}`).toEqual([]);
      }
      await controls.getByLabel('Aparência').selectOption('refy');
      expect.soft(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${entry.id} overflow`).toBe(true);
      await page.setViewportSize({ width: 375, height: 900 });
      await expect.soft.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), { message: `${entry.id} mobile overflow` }).toBe(true);
      await page.setViewportSize({ width: 1280, height: 800 });
    }
    expect(errors).toEqual([]);
  });
}

test('modo preserva geometria; aparência controla raios; branco e opções são legíveis', async ({ page }) => {
  await page.goto(url);
  const scope = page.getByTestId('playground');
  const controls = scope.locator('header[aria-label="Personalizar aplicação"]');
  await expect(scope).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  const primary = scope.getByRole('button', { name: 'Criar projeto', exact: true });
  for (const [skin, radius] of [['refy', '7px'], ['outline', '0px'], ['gradient', '20px']]) {
    await controls.getByLabel('Aparência').selectOption(skin);
    for (const mode of ['light', 'dark']) {
      await controls.getByLabel('Modo', { exact: true }).selectOption(mode);
      await expect(primary).toHaveCSS('border-top-left-radius', radius);
      await expect(controls.getByLabel('Modo', { exact: true })).toHaveCSS('color-scheme', mode);
      const colors = await controls.locator('option').first().evaluate(el => ({ foreground: getComputedStyle(el).color, background: getComputedStyle(el).backgroundColor }));
      expect(colors.foreground).not.toBe(colors.background);
      expect(colors.background).not.toBe('rgba(0, 0, 0, 0)');
    }
  }
  await controls.getByLabel('Aparência').selectOption('refy');
  const line = scope.locator('[aria-label="Histórico de eventos"] li').first();
  const before = await line.evaluate(el => ({ color: getComputedStyle(el, '::before').backgroundColor, width: getComputedStyle(el, '::before').width }));
  expect(before.width).toBe('2px');
  expect(before.color).not.toBe(await scope.evaluate(el => getComputedStyle(el).backgroundColor));
  await scope.getByRole('button', { name: 'Feedback e camadas', exact: true }).click();
  await scope.getByLabel('Componente desta área').selectOption('Chip');
  const chip = scope.getByTestId('component-demo').getByRole('button', { name: 'Críticos 8', exact: true });
  await expect(chip).toHaveAttribute('aria-pressed', 'true');
  const foreground = await chip.evaluate(el => getComputedStyle(el).color);
  await chip.hover();
  await expect(chip).toHaveCSS('color', foreground);
  await controls.getByLabel('Aparência').selectOption('outline');
  await expect(chip).toHaveCSS('border-top-left-radius', '0px');
  await controls.getByLabel('Modo', { exact: true }).selectOption('light');
  await expect(chip).toHaveCSS('border-top-left-radius', '0px');
  await expect(chip).toHaveAttribute('aria-pressed', 'true');
});

for (const mode of ['light', 'dark']) test(`${mode}: listas abertas recebem fonte e cores da aplicação`, async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(`${url}&globals=theme:${mode};fonts:studio`);
  await page.addScriptTag({ content: axe });
  const scope = page.getByTestId('playground');
  await scope.getByRole('button', { name: 'Formulários', exact: true }).click();
  for (const id of ['Combobox', 'Multiselect']) {
    await scope.getByLabel('Componente desta área').selectOption(id);
    const input = scope.getByTestId('component-demo').getByRole('combobox');
    await input.click();
    const list = scope.getByRole('listbox');
    await expect(list).toBeVisible();
    await expect(list).toHaveCSS('opacity', '1');
    await expect(list).toHaveCSS('font-family', /DM Sans/);
    const failures = await list.evaluate(async el => (await (window as any).axe.run(el, { runOnly: ['color-contrast'] })).violations.map((v: any) => ({ id: v.id, nodes: v.nodes.map((n: any) => n.failureSummary) })));
    expect(failures).toEqual([]);
    await input.press('ArrowDown');
    await input.press('Enter');
    await input.press('Escape');
    await expect(list).not.toBeVisible();
  }
});
