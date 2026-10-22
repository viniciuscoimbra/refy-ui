# Evidência — fundação e temas

Data: 21/10/2026. Baseline: governança `4b62d8a`, gate registrado e specs de processo sincronizadas. Autor/revisor: Codex, sem revisão independente. Autorização de execução: instrução do mantenedor registrada na evidência da governança.

## Escopo e decisões

Revisados proposal/design/specs/tasks e consumidores. Afetados: tokens, estilos dos consumidores, provider, Tooltip/BrandLogo, exports, stories, distribuição, scripts, testes e CI. Os ajustes preservam nomes e adicionam API; mudanças visuais/default/fonte estão no de–para `docs/THEMING.md`. Sem alteração de aplicações privadas.

- Fonte estruturada: subconjunto tipado DTCG 2025.10; expressões CSS preservadas em extensão, sem alegação de exportação Figma completa.
- Fontes remotas passaram a opt-in; fallbacks mantêm leitura sem rede.
- Identidade + modo separados por ThemeProvider; CSS reset global permanece export legado opcional. Portais de tooltip usam o escopo do dono.
- CardHeader e Chip tinham seletores ancestrais quebrados/remanescentes que afetavam escopos. Corrigidos; cabeçalho pode quebrar texto.
- Tokens ausentes e aliases usados pelos componentes foram completados, preservando nomes legados. Nenhum alias removido ou com remoção programada.
- Inventário de consumidores em docs/CONSUMERS.md: Plyngo usa dependência local/fonte/patches; bioma hoje copia tokens para o pipeline da IDE, não se presume React; Dommus/Domuz é origem da extração. Não homologados.

## Execução por tarefa

| Tarefa | Evidência/resultado |
|---|---|
| 1.1 | Gate técnico da governança no commit 4b62d8a, revisão do agente identificada |
| 1.2 | Artefatos, callers de variáveis, exports, reset, estilos e integrações revisados; riscos/defaults registrados acima |
| 2.1 | `node scripts/check-tokens.mjs --inventory`: 289 variáveis consumidas; arquivos e valores por modo em docs/TOKEN_INVENTORY.md |
| 2.2 | `npm run tokens:build` e `npm run tokens:check`: saída determinística e equivalente, tipos aceitos; fixture com unidade/tipo inválido recusada |
| 2.3 | Três mapas completos e aliases sem falta/ciclo; testes negativos de ausência/ciclo recusados; 30 pares de texto/foco/estados medidos em docs/CONTRAST.json |
| 2.4 | Teste de troca por prop preserva menu aberto e campo preenchido; modos separados e providers aninhados exercitados em Chromium e WebKit |
| 2.5 | 320/1280 px, fontes bloqueadas, movimento reduzido, texto ampliado a 200%, foco em cores forçadas e axe nos três modos passaram em Chromium/WebKit. Capturas mobile claro/escuro inspecionadas pelo agente: leitura e quebra sem overflow. Cobertura das três engines passou no CI Linux, execução 39712872933 |
| 2.6 | Workflow preparado para três engines no Linux e upload de relatórios/capturas; executado com sucesso no CI Linux, execução 39712872933 |
| 2.7 | Síntese do inventário e destinos em docs/CONSUMERS.md; nenhuma fonte privada incluída |
| 2.8 | Presets sintéticos de tipografia/densidade/raios distintos usam os mesmos Button/Input/Card. API documentada; SSR aceita preset e recusa chave inválida; BrandLogo recebe conteúdo do consumidor |
| 2.9 | 28 testes Chromium/WebKit passaram, incluindo tema de menu/tooltip/aviso em Modal/Drawer. Firefox local falha antes da página ao abrir perfil; validado no CI Linux nas três engines |

Falhas encontradas e corrigidas: contraste do botão editorial e estados hover/active claro; medição e axe reexecutados. `npm run check` passou (tokens/contraste/tipos/build/SSR); Storybook compilou.

## Pendências reais

Firefox local recusou a abertura de perfil, também com diretório de perfil explícito. Há relato correspondente no upstream: https://github.com/microsoft/playwright/issues/42768. Não foram alteradas permissões de privacidade do Mac nem o browser do usuário. A mesma suíte foi preparada para Linux no CI; execução concluída com sucesso: https://github.com/viniciuscoimbra/refy-ui/actions/runs/39712872933.

Gate técnico da fundação atendido na revisão do agente: tarefas ligadas aos resultados acima, CI de referência aprovado, specs sincronizadas. Ajuste adicional de borda identificadora e asserções das media queries verificados nos 28 testes Chromium/WebKit; nova execução CI acompanha o commit. Esta entrega não certifica todas as famílias, leitores de tela ou aplicações. Camadas de múltiplos overlays, teclado detalhado e avisos acionáveis têm certificação própria na fase seguinte.

3.1: nove requisitos rastreados: TOK-01/02/03 em gerador, inventário e testes negativos; THM-01/02/03 em provider, 30 pares e testes de adaptação; BRAND-01/02/03 em presets sintéticos, escopos e camadas. 3.2: revisão técnica do agente conclui o gate com CI Linux aprovado; não é certificação das famílias. Nenhuma obrigação foi dispensada por exceção.
