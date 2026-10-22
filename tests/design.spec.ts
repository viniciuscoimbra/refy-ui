import { test, expect } from '@playwright/test';

for (const mode of ['light', 'dark', 'editorial']) {
  test(`${mode}: identidade altera geometria e estados sem perder o formulário`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto(`/iframe.html?id=fundamentos-refy--personalizar&viewMode=story&globals=theme:${mode}`);
    const scope = page.getByTestId('skin-preview');
    const name = scope.getByLabel('Nome do projeto');
    const save = scope.getByRole('button', { name: 'Salvar alterações' });
    const success = page.getByTestId('skin-states').getByRole('button', { name: 'Salvo', exact: true });
    const originalSuccess = await success.evaluate(el => getComputedStyle(el).backgroundColor);
    await name.fill('Projeto com identidade própria');
    await page.getByRole('radio', { name: 'Contorno', exact: true }).check();
    await expect(save).toHaveCSS('border-top-left-radius', '0px');
    await expect(save).toHaveCSS('border-top-width', '3px');
    expect(await name.evaluate(el => getComputedStyle(el.parentElement!).borderTopWidth)).toBe('3px');
    await expect(scope.getByRole('checkbox').locator('..').locator('svg')).toHaveCSS('color', 'rgb(39, 37, 28)');
    await expect(name).toHaveValue('Projeto com identidade própria');
    await page.getByRole('radio', { name: 'Degradê', exact: true }).check();
    await expect(save).toHaveCSS('border-top-left-radius', '20px');
    await expect(save).toHaveCSS('color', 'rgb(255, 255, 255)');
    const resting = await save.evaluate(el => getComputedStyle(el).backgroundImage);
    expect(resting).toContain('linear-gradient');
    await save.hover();
    const hover = await save.evaluate(el => getComputedStyle(el).backgroundImage);
    expect(hover).not.toBe(resting);
    await page.mouse.down();
    expect(await save.evaluate(el => getComputedStyle(el).backgroundImage)).not.toBe(hover);
    await page.mouse.up();
    await expect(scope.getByRole('status')).toContainText('Alterações salvas');
    const states = page.getByTestId('skin-states');
    await expect(states.getByRole('button', { name: 'Salvando' })).toBeDisabled();
    await expect(states.getByRole('button', { name: 'Salvando' })).toHaveAttribute('aria-busy', 'true');
    await expect(states.getByRole('button', { name: 'Continuar', exact: true }).last()).toBeDisabled();
    const feedback = await success.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(feedback).toBe(originalSuccess);
    await success.hover();
    await expect(success).toHaveCSS('background-color', feedback);
    await scope.getByRole('button', { name: 'Mais opções' }).click();
    await scope.getByRole('menuitem', { name: 'Ver resumo' }).click();
    const dialog = scope.getByRole('dialog', { name: 'Resumo do projeto' });
    await expect(dialog).toContainText('Projeto com identidade própria');
    await expect(dialog).toHaveCSS('border-top-left-radius', '24px');
    expect(await dialog.evaluate(el => el.closest('[data-refy-brand]')?.getAttribute('data-refy-brand'))).toBe('gradient');
    await dialog.getByRole('button', { name: 'Fechar resumo' }).click();
    await page.getByRole('radio', { name: 'Refy', exact: true }).check();
    await expect(name).toHaveValue('Projeto com identidade própria');
    await expect(save).toHaveCSS('background-image', 'none');
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(375);
    const fonts = await page.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter(font => font.status === 'loaded').map(font => font.family.replaceAll('"', '')); });
    expect(fonts).toEqual(expect.arrayContaining(['Manrope', 'Source Sans 3', 'Source Code Pro']));
  });
}

test('dashboard móvel cria, encontra e exporta projetos com os componentes reais', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto('/iframe.html?id=páginas-dashboard--visao-geral&viewMode=story');
  await page.getByRole('button', { name: 'Abrir navegação' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Criar projeto', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Criar projeto' });
  await dialog.getByLabel('Nome do projeto').fill('=Projeto "longo" para conferir a composição e a quebra de texto');
  await dialog.getByRole('button', { name: 'Criar', exact: true }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.getByText('4 ativos')).toBeVisible();
  await page.getByRole('button', { name: 'Buscar projetos…', exact: true }).click();
  await page.getByRole('combobox').fill('longo');
  await expect(page.getByRole('option')).toHaveCount(1);
  await page.keyboard.press('Enter');
  await expect(page.getByRole('status')).toContainText('0% concluído');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Exportar CSV', exact: true }).click();
  const file = await download;
  expect(file.suggestedFilename()).toBe('projetos.csv');
  const stream = await file.createReadStream();
  const chunks: Buffer[] = []; for await (const chunk of stream!) chunks.push(chunk);
  expect(Buffer.concat(chunks).toString()).toContain('"\'=Projeto ""longo""');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(375);
});

test('perfil mantém dados ao trocar skin e valida o e-mail antes de salvar', async ({ page }) => {
  await page.goto('/iframe.html?id=exemplos-configuracoes--perfil&viewMode=story');
  await page.getByLabel('Nome completo').fill('Ana Maria');
  await page.getByRole('combobox', { name: 'Identidade visual' }).selectOption('gradient');
  await expect(page.getByLabel('Nome completo')).toHaveValue('Ana Maria');
  await page.getByLabel('E-mail', { exact: true }).fill('invalid');
  await page.getByRole('button', { name: 'Salvar preferências' }).click();
  await expect(page.getByRole('status')).toHaveCount(0);
  await page.getByLabel('E-mail', { exact: true }).fill('ana@example.com');
  await page.getByRole('button', { name: 'Salvar preferências' }).click();
  await expect(page.getByRole('status')).toContainText('Preferências salvas');
});

test('explorador encontra tokens de skin e exporta valores resolvidos', async ({ page }) => {
  await page.goto('/iframe.html?id=fundamentos-tokens--explorar&viewMode=story');
  await page.getByLabel('Buscar token').fill('--button-primary-background');
  await expect(page.getByRole('row')).toHaveCount(4);
  await page.getByRole('button', { name: 'Ver CSS do tema' }).click();
  await expect(page.getByLabel('Valores resolvidos deste tema', { exact: true })).not.toContainText('undefined');
  await expect(page.getByLabel('Valores resolvidos deste tema', { exact: true })).toContainText('--font-body:');
});

test('decisões genéricas funcionam por botão e teclado até o fim da fila', async ({ page }) => {
  await page.goto('/iframe.html?id=components-organisms-swipedeck--teclado&viewMode=story');
  await page.getByRole('button', { name: 'Selecionar', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Referências de interface' })).toBeVisible();
  await page.getByRole('region', { name: 'Item 2 de 3', exact: true }).press('ArrowRight');
  await expect(page.getByRole('heading', { name: 'Organização de arquivos' })).toBeVisible();
  await page.getByRole('button', { name: 'Descartar', exact: true }).click();
  await expect(page.getByText('Todos os itens foram revisados', { exact: true })).toBeVisible();
});

for (const mode of ['light', 'dark', 'editorial']) {
  test(`${mode}: galeria de imagens em cache conclui carregamento e navega`, async ({ page }) => {
    await page.goto(`/iframe.html?id=components-molecules-propertymedia--paisagem&viewMode=story&globals=theme:${mode}`);
    const gallery = page.getByRole('region', { name: 'Galeria de mídia' });
    await expect(gallery.getByRole('img')).toBeVisible();
    await expect(gallery).not.toHaveAttribute('aria-busy', 'true');
    const first = await gallery.getByRole('img').getAttribute('src');
    await gallery.press('ArrowRight');
    await expect(gallery.getByRole('img')).not.toHaveAttribute('src', first!);
    await expect(gallery).not.toHaveAttribute('aria-busy', 'true');
    await gallery.press('ArrowLeft');
    await expect(gallery.getByRole('img')).toHaveAttribute('src', first!);
    await expect(gallery).not.toHaveAttribute('aria-busy', 'true');
    expect(await gallery.getByRole('img').evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  });
}

for (const id of ['components-molecules-calendar--range-dual-month', 'components-molecules-breadcrumb--sete-niveis', 'components-molecules-multiselect--overflow-scroll', 'components-organisms-charts--donut-segmentos', 'components-organisms-table--data-table']) {
  test(`${id}: conteúdo fica dentro do viewport móvel`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto(`/iframe.html?id=${id}&viewMode=story`);
    await expect(page.locator('#storybook-root > *')).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(375);
    if (id.includes('multiselect--')) {
      const chips = page.getByRole('button', { name: 'Remover Documentação' }).locator('../..');
      expect(await chips.evaluate(el => el.scrollLeft)).toBe(0);
      await page.getByRole('combobox').fill('Mobile');
      await page.getByRole('option', { name: 'Mobile UX' }).click();
      await expect.poll(() => chips.evaluate(el => el.scrollLeft)).toBeGreaterThan(0);
      await page.getByRole('combobox').fill('');
      await page.getByRole('combobox').press('Backspace');
      await expect(page.getByRole('option', { name: 'Mobile UX' })).toHaveAttribute('aria-selected', 'false');
    }
    if (id.includes('table--')) {
      const table = page.getByRole('table');
      expect(await table.evaluate(el => getComputedStyle(el.parentElement!).overflowX)).toBe('auto');
      await expect(page.getByPlaceholder('Buscar fatura…')).toBeVisible();
    }
  });
}
