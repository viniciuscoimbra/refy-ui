# Decisions
1. Uma página demonstrativa, não um novo organismo exportado; AppShell e seções reutilizam controles, tabelas, gráficos, conteúdo, revisão, formulários e overlays existentes. Dados em memória, sem persistência prometida.
2. Modo, skin e conjunto tipográfico são eixos independentes. Controles no topo da página; o mesmo ThemeProvider engloba toda a composição. Estado não é indexado pela aparência.
3. Três conjuntos: Manrope / Source Sans 3 / Source Code Pro (contraste entre títulos geométricos e leitura humanista); IBM Plex Sans / IBM Plex Sans / IBM Plex Mono (família coesa); DM Sans / DM Sans / Geist Mono (interface sóbria, código distinto). Legado preservado. Fontes locais, OFL, carregadas pelo navegador quando usadas.
4. Ajustar verde semântico de ação e foreground em vez de aplicar branco sobre verde claro sem contraste. Preservar acento luminoso da marca e primary-ink no modo escuro. Sucesso possui par próprio, independente da identidade primária.
5. Ocultar histórias internas somente no manager, sem remover o índice/URLs. Não apagar a evidência histórica.
6. Validação focada em fontes efetivas/carregamento, troca sem reset, navegação e overlays, contraste e responsividade. Revisão visual direta das páginas; não gerar outro relatório de comparação extenso.

# Scope and risk
Tokens afetam todos os consumidores sem override; registrar alteração visual. Conferir callers de fontes, Button e tokens; testes e snapshots existentes podem mudar intencionalmente. Arquivos: tokens, fonts, ThemeProvider presets/export, Storybook preview/manager, stories, nova composição, testes/docs/licenças. Nenhuma mudança em repositórios consumidores. Certificação assistiva adiada pelo mantenedor.

## Ajustes encontrados durante a composição
- Select gerava IDs pelo rótulo; dois controles “Modo” colidiam entre toolbar e drawer. useId corrige a associação sem alterar IDs explícitos.
- Drawer lateral passou a consumir drawer-radius nos cantos expostos e o mesmo scrim escuro do Modal; antes o tema escuro criava um véu branco por usar ink-1.
- Texto de ênfase em Calendar, Stat, Table e demais consumidores de primary/good passou a usar primary-ink/good-ink. Superfícies de ações usam primary/good, evitando perder contraste ao escurecer o verde para receber branco.
