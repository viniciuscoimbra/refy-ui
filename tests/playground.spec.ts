import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const axe = readFileSync('node_modules/axe-core/axe.min.js', 'utf8');

const url = '/iframe.html?id=fundamentos-playground--aplicacao&viewMode=story';
for (const mode of ['light', 'dark', 'editorial']) {
  test(`${mode}: fontes e aparências preservam estado da aplicação e dos overlays`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(`${url}&globals=theme:${mode}`);
    const scope = page.getByTestId('playground');
    const controls = scope.locator('header[aria-label="Personalizar aplicação"]');
    await scope.getByRole('button', { name: 'Configurações', exact: true }).click();
    await scope.getByLabel('Nome do workspace').fill('Estúdio de experiências');
    for (const [set, body, heading, mono] of [
      ['humanist', 'Source Sans 3', 'Manrope', 'Source Code Pro'],
      ['plex', 'IBM Plex Sans', 'IBM Plex Sans', 'IBM Plex Mono'],
      ['studio', 'DM Sans', 'DM Sans', 'Geist Mono'],
    ]) {
      await controls.getByLabel('Conjunto de fontes').selectOption(set);
      await expect(scope.getByLabel('Nome do workspace')).toHaveValue('Estúdio de experiências');
      expect(await scope.getByRole('heading', { name: 'Configurações', exact: true }).evaluate(el => getComputedStyle(el).fontFamily)).toContain(heading);
      expect(await scope.getByLabel('Nome do workspace').evaluate(el => getComputedStyle(el).fontFamily)).toContain(body);
      await scope.getByRole('button', { name: 'Usar no meu projeto' }).click();
      const drawer = scope.getByRole('dialog');
      await expect(drawer.getByTestId('font-heading')).toHaveCSS('font-family', new RegExp(heading));
      await expect(drawer.getByTestId('font-body')).toHaveCSS('font-family', new RegExp(body));
      await expect(drawer.getByTestId('font-mono')).toHaveCSS('font-family', new RegExp(mono));
      const loaded = await page.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replaceAll('"', '')); });
      expect(loaded).toEqual(expect.arrayContaining([body, heading, mono]));
      await drawer.getByLabel('Aparência').selectOption('gradient');
      await expect(drawer).toHaveCSS('border-top-left-radius', '24px');
      await drawer.getByLabel('Modo', { exact: true }).selectOption(mode === 'dark' ? 'light' : 'dark');
      await expect(scope).toHaveAttribute('data-theme', mode === 'dark' ? 'light' : 'dark');
      await drawer.getByRole('button', { name: 'Fechar', exact: true }).click();
      await expect(scope.getByLabel('Nome do workspace')).toHaveValue('Estúdio de experiências');
    }
    await controls.getByLabel('Modo', { exact: true }).selectOption(mode);
    await controls.getByLabel('Aparência').selectOption('refy');
    const primary = scope.getByRole('button', { name: 'Criar projeto', exact: true });
    await expect(primary).toHaveCSS('color', 'rgb(255, 255, 255)');
    await primary.hover();
    await expect(primary).toHaveCSS('color', 'rgb(255, 255, 255)');
    await page.mouse.down();
    await expect(primary).toHaveCSS('color', 'rgb(255, 255, 255)');
    await page.mouse.up();
    const modal = scope.getByRole('dialog', { name: 'Criar projeto' });
    await modal.getByLabel('Nome do projeto').fill('Novo projeto tipográfico');
    await modal.getByRole('button', { name: 'Visibilidade: Equipe' }).click();
    const menu = scope.getByRole('menu');
    expect(await menu.evaluate(el => getComputedStyle(el).fontFamily)).toContain('DM Sans');
    await menu.getByRole('menuitem', { name: 'Privado', exact: true }).click();
    await modal.getByRole('button', { name: 'Criar', exact: true }).click();
    await expect(scope.getByRole('status')).toContainText('Novo projeto tipográfico');
    await scope.getByRole('button', { name: 'Trabalho', exact: true }).click();
    await expect(scope.getByRole('table')).toContainText('Novo projeto tipográfico');
    await scope.getByRole('tab', { name: 'Quadro', exact: true }).click();
    await scope.getByRole('button', { name: 'Mover para andamento' }).last().click();
    await scope.getByRole('tab', { name: 'Lista', exact: true }).click();
    await expect(scope.getByRole('row').filter({ hasText: 'Novo projeto tipográfico' })).toContainText('Em andamento');
  });
  test(`${mode}: todas as áreas cabem no móvel e usam componentes reais`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto(`${url}&globals=theme:${mode}`);
    const scope = page.getByTestId('playground');
    await page.addScriptTag({ content: axe });
    for (const area of ['Visão geral', 'Trabalho', 'Biblioteca', 'Configurações']) {
      await scope.getByRole('button', { name: 'Abrir navegação' }).click();
      await scope.getByRole('dialog').getByRole('button', { name: area, exact: true }).click();
      await expect(scope.getByRole('heading', { name: area, exact: true })).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(375);
      const violations = await page.evaluate(async () => (await (window as any).axe.run(document.querySelector('[data-testid="playground"]'), { runOnly: ['color-contrast', 'label', 'duplicate-id-aria'] })).violations.map((v: any) => ({ id: v.id, nodes: v.nodes.map((n: any) => n.target) })));
      expect(violations).toEqual([]);
    }
    await scope.getByRole('button', { name: 'Usar no meu projeto' }).click();
    await expect(scope.getByRole('dialog')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(375);
  });
}

test('menu de adoção omite laboratórios e mantém URLs técnicas', async ({ page, request }) => {
  await page.goto('/?path=/story/fundamentos-playground--aplicacao');
  await expect(page.locator('#storybook-explorer-tree')).toBeVisible();
  await expect(page.locator('#storybook-explorer-tree')).not.toContainText('Verificacao');
  await expect(page.locator('#storybook-explorer-tree')).not.toContainText('Revisão');
  const index = await (await request.get('/index.json')).json();
  expect(Object.keys(index.entries).some(id => id.startsWith('verificacao-contratos-essenciais--'))).toBe(true);
  await page.goto('/iframe.html?id=fundacao-temas-por-aplicacao--instancias&viewMode=story');
  await expect(page.locator('[data-refy-scope]').first()).toBeVisible();
});
