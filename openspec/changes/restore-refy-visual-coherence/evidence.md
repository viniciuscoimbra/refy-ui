# Execução e evidências

Autorização do mantenedor em 22/10/2026: corrigir aparência, recuperar visual original Refy, revisar catálogo/telas, entregar antes/depois, neutralizar conteúdo de negócio, ampliar customização e deixar leitor de tela para depois. A nova prioridade supera a ordem anterior apenas para esta recuperação e sua documentação; não autoriza declarar certificação assistiva.

Revisor: Codex (agente), sem aprovação humana ou independente. Baseline anterior 6e3e3c1; referência original c3f03fd. Fundação verificada anteriormente, porém sua evidência técnica não demonstrava integridade visual do catálogo.

## Execução por requisito

| Requisito | Procedimento e resultado | Evidência preservada |
|---|---|---|
| VIS-01 | Recuperadas Inter, Space Grotesk e JetBrains Mono locais com OFL; três modos, canvas e hierarquia conferidos em capturas. Identidade original preservada como padrão. | PRODUCT.md, DESIGN.md, src/styles/fonts.css, public/review/after, tests/design.spec.ts |
| VIS-02 | 383 stories em duas larguras; 92 famílias amostradas em três modos. 1348 casos sem erro de renderização/overflow; 291 verificações axe de contraste sem violação detectada. Inspeção das 12 pranchas e ampliação das falhas, páginas e sobreposições. | docs/VISUAL_REVIEW.md, public/review/catalog.json, public/review/catalog/*.png |
| VIS-03 | Dez capturas anteriores preservadas e dez posteriores, cinco casos em 375/1280px. Comparação ao vivo inclui motivos, de–para e limites. O caso de temas distingue laboratório anterior e nova apresentação. | public/review/before, public/review/after, src/stories/Review.stories.tsx |
| CAT-01 | 92 famílias organizadas por Atomic Design; exemplos e textos de negócio revisados. Aliases ContentCard, MediaGallery, DecisionActions, DecisionDeck e SchedulePicker sem excluir APIs anteriores; conversão de eventos testada. | docs/SKINS.md, scripts/check.mjs, src/index.ts |
| CAT-02 | Páginas permanecem composições. Painel cria/busca/exporta com estado local; configurações valida e preserva dados; laboratório de isolamento separado da apresentação. | src/pages/DashboardPage, src/stories/Settings.stories.tsx, tests/design.spec.ts |
| SKIN-01 | Contorno quadrado/3px e degradê/20px no mesmo Button; campos, superfícies e estados compartilham hooks. Hover, pressionado, loading, disabled e feedback verificados. | src/stories/skins.ts, docs/TOKEN_INVENTORY.md, docs/SKINS.md |
| SKIN-02 | Troca de aparência preserva formulário e contexto de portal. Três modos exercitados com duas aparências alternativas e retorno ao Refy. | Fundamentos/Refy/Personalizar, tests/design.spec.ts |

## Verificações locais

- `npm run check`: passou; tipos, build, distribuição/SSR, 334 variáveis consumidas inventariadas, 33 pares de contraste da fundação, aliases/eventos e licenças das fontes.
- `npm run check:specs`: 11 verificações passaram, incluindo controle negativo.
- `npm run build-storybook`: passou. Aviso de tamanho do bundle do catálogo continua; não é erro de renderização.
- `npm pack --dry-run`: passou, fontes e licenças incluídas.
- `npx playwright test --project=chromium --project=webkit`: 222 testes passaram no macOS. As 36 diferenças das referências visuais locais foram revistas antes de serem atualizadas; restauração das fontes e ajuste do canvas explicam as diferenças.
- Suíte de design repetida após as correções finais: 30 testes passaram (Chromium/WebKit). Inclui scroll inicial/adição/remoção no Multiselect, sucesso independente da marca e marcação do Checkbox com o contraste do tema.
- A varredura de 1348 casos e 291 contrastes foi repetida após os ajustes finais de seleção e sucesso, sem erros detectados; capturas e pranchas atualizadas.
- Linux no commit 50a10eb: execução 39768802688, 297 testes passaram e 36 testes visuais falharam nas referências anteriores. As 54 imagens diferentes (18 bases e 36 sobreposições) foram comparadas ao esperado em cinco pranchas e em ampliações. Diferenças intencionais de fontes/canvas; referências atualizadas após revisão. Nova execução normal ainda pendente, sem atualização automática.
- `graft build`: contexto local atualizado.

## Gate

Implementação e revisão local concluídas; validação Linux/Firefox e referências visuais Linux ainda em execução antes de fechar este gate. Não há publicação de pacote nem migração de consumidor nesta mudança.

A revisão do agente não equivale à aprovação estética do mantenedor. Roteiro NVDA/VoiceOver adiado por decisão humana; homologação Dommus/Domuz, Plyngo, bioma e GF, mapa/autenticação externos e microfone real permanecem pendentes. Não se declara conformidade global ou equivalência pixel a pixel com Figma externo.
