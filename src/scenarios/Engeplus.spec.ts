import { expect, test } from '@playwright/test';

test.describe('Portal Engeplus', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });

  test('exibe as últimas notícias na página inicial', async ({ page }) => {
    await expect(page).toHaveTitle(/Engeplus/i);
    await expect(page.getByRole('heading', { name: 'Últimas notícias' })).toBeVisible();
    await expect(page.locator('a[href^="/noticia/"]').first()).toBeVisible();
  });

  test('navega para a editoria Segurança', async ({ page }) => {
    await page.getByRole('link', { name: 'Segurança', exact: true }).first().click();
    await expect(page).toHaveURL(/\/e\/seguranca\/?$/);
    await expect(page.getByRole('heading', { name: 'Segurança', exact: true })).toBeVisible();
    await expect(page.locator('a[href^="/noticia/"]').first()).toBeVisible();
  });

  test('abre uma notícia a partir da página inicial', async ({ page }) => {
    const noticia = page.locator('a[href^="/noticia/"]').first();
    const destino = await noticia.getAttribute('href');
    expect(destino).toBeTruthy();
    await noticia.click();
    await expect(page).toHaveURL(new RegExp('/noticia/'));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).not.toBeEmpty();
  });
});
