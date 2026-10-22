# Evidence

## Authorization
22/10/2026: mantenedor pediu playground completo, três conjuntos de fontes, botões verdes com texto claro, simplificação da navegação e entrega por links dos elementos alterados. Execução autorizada; roteiro assistivo permanece adiado. Artefatos criados em ordem: proposta, specs, design/tarefas, antes do código.

## Validation
Implementação e verificação local realizadas. Revisão técnica/visual do agente não equivale à aprovação estética do mantenedor nem à homologação dos consumidores.


## Implementação
- Três novos conjuntos públicos em fontSets e preset legado; fontes OFL locais com checagem de arquivos/licenças no pacote.
- Playground em quatro áreas com componentes existentes; estados de formulário preservados nas trocas, criação/lista/quadro/revisão, biblioteca/agenda e configurações. Configuração copiável inclui os modos e overrides da aparência.
- Fontes selecionáveis na barra do catálogo e diretamente em Tokens/Personalizar. Papéis e tokens acompanhados de amostras reais.
- Navegação normal sem Revisão/Verificação; índice técnico preservado e verificado.
- Select com IDs únicos, Drawer com raio nas laterais e scrim coerente com Modal; cores de texto usam primary-ink/good-ink em vez de superfície de ação.

## Resultados locais
- npm run check, check:specs, build-storybook e npm pack --dry-run aprovados.
- 236 testes locais Chromium/WebKit passaram, incluindo 36 referências visuais de camadas atualizadas para as fontes/cores e drawer. Verificações de contraste do playground adicionadas após detectar e corrigir o texto de Stat e a indicação de hoje em Calendar.
- 33 pares da fundação medidos; botão primário branco/verde nos três estados e modos.
- Revisão visual do agente em desktop/móvel: aplicação, fontes alternativas, biblioteca, drawer, menu, tooltip e avisos.
- Aprovação estética do mantenedor, leitores de tela e homologação dos consumidores continuam pendentes. Não houve publicação npm.


## Revisão Linux e complementos
- Run 39775882867, commit 2128918: 318 testes de comportamento aprovados em Chromium/Firefox/WebKit; 36 casos visuais divergiram das referências antigas. Nenhuma falha funcional nessa execução.
- As 54 capturas Linux foram inspecionadas por modo/superfície/largura/navegador e atualizadas depois da revisão. Diferenças previstas: tipografia, verde e scrim/raio do Drawer. Referências continuam específicas por SO/navegador, sem afrouxar tolerância ou desativar comparação.
- 14 verificações adicionais do playground (contraste/rótulos/overflow e trocas) passaram localmente nos dois navegadores. Amostras dirigidas das 14 famílias afetadas: 84 verificações, sem overflow ou violação de contraste detectados.
- Confirmada atualização do valor resolvido de font-body na página de tokens e impedida confirmação de agenda sem horário (2 testes adicionais locais aprovados).
- Run [39778181237](https://github.com/viniciuscoimbra/refy-ui/actions/runs/39778181237), commit 22b2cf0: execução normal aprovada com 357 testes Chromium/Firefox/WebKit, incluindo referências revistas, comportamento, fontes e contraste. Checks, OpenSpec, build e pacote também aprovados.

## Sincronização da experiência
Modo e fonte do playground compartilham os globals do Storybook; a barra externa e os seletores da aplicação mostram a mesma escolha. Repetidos os 16 testes do playground localmente após a mudança, mais dois testes novos de sincronização da barra. Check/build aprovados novamente.

## Fechamento técnico
- Commit de código d232ac1778435aa039dbd8253f972e9bb8225cc2 validado no [run 39778832919](https://github.com/viniciuscoimbra/refy-ui/actions/runs/39778832919): **360 testes aprovados** em Chromium, Firefox e WebKit, sem atualizar referências durante a verificação. Check de biblioteca, OpenSpec, build do catálogo e conteúdo do pacote também aprovados.
- Contexto Graft reconstruído. Playground disponível em http://localhost:6006/?path=/story/fundamentos-playground--aplicacao.
- As quatro áreas cobrem uma seleção ampla de componentes existentes; não representam todo o catálogo nem integração real de produto. Dados permanecem locais à demonstração. Mudanças de fontes e verde afetam consumidores que não sobrescrevem os tokens; a homologação deles permanece necessária.
