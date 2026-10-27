# Testes E2E — Portal Engeplus

Três cenários com Playwright e TypeScript:

1. A página inicial apresenta as últimas notícias.
2. A navegação abre a editoria Segurança.
3. Uma notícia é aberta a partir da página inicial.

## Executar

Requisitos: Node.js 22 ou superior e acesso à internet.

```bash
npm ci
npx playwright install --with-deps chromium
npx playwright test
npx playwright show-report artifacts/report
```

O relatório e os rastros de testes que falharem ficam em `artifacts/`. Os testes usam o site público, que pode mudar ou ficar indisponível.

## Integração contínua

O GitHub Actions instala o Chromium, executa os três cenários em push na master e em pull requests e disponibiliza o relatório como artefato. A configuração existente de análise automática do SonarCloud está em `.sonarcloud.properties`; ela exige que o projeto correspondente esteja vinculado a este repositório no SonarCloud.
