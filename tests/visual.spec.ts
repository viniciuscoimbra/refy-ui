import { test, expect } from "@playwright/test";

for (const mode of ['light', 'dark', 'editorial']) for (const width of [375, 1280]) for (const surface of ['modal', 'drawer']) {
  test(`${mode}-${surface}-${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(`/iframe.html?id=verificacao-contratos-essenciais--camadas&viewMode=story&args=mode:${mode};surface:${surface};before:true;portalled:true`);
    await expect(page.getByRole('button', { name: 'Abrir fluxo' })).toBeVisible();
    if (surface === 'modal') await expect.soft(page).toHaveScreenshot(`${mode}-base-${width}.png`, { animations: 'disabled' });
    await page.getByRole('button', { name: 'Abrir fluxo' }).click();
    await page.getByRole('button', { name: 'Ações do fluxo' }).click();
    await page.getByRole('button', { name: 'Ajuda do fluxo' }).hover();
    await expect(page.getByRole('tooltip')).toBeVisible();
    await expect(page).toHaveScreenshot(`${mode}-${surface}-${width}.png`, { animations: 'disabled' });
  });
}
