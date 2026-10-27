import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/scenarios',
  testMatch: 'Engeplus.spec.ts',
  timeout: 60000,
  expect: { timeout: 15000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { outputFolder: 'artifacts/report', open: 'never' }]],
  use: {
    baseURL: 'https://engeplus.com.br',
    locale: 'pt-BR',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
});
