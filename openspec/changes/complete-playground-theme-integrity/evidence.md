# Evidência

## Autorização
22/10/2026: solicitação direta para completar o playground e corrigir fundo/temas, seleção, geometria, timeline e chips. Proposta, specs, design e tarefas escritos nessa ordem antes da implementação. Roteiro assistivo permanece adiado.

## Diagnóstico
- Modo escuro redefinia radius-default (2px contra 7px claro) e aliases lg/xl/full. O modo alterava geometria indevidamente.
- A skin alterava apenas alguns raios sem cobrir a escala usada por todos os componentes.
- Fundo claro era #f2f2f2 e editorial #f7f3ea; o mantenedor exige branco para Refy claro.
- Linha da timeline usava line-soft, quase indistinguível do fundo escuro.
- Chip selecionado invertia fundo/texto, mas hover redefinia apenas texto, causando cor semelhante ao fundo.
- Select nativo não definia cor de option/optgroup; popup depende do SO além do CSS da caixa fechada.

## Verificação
Em execução. Revisão do agente não equivale a aprovação visual do mantenedor nem a certificação assistiva ou homologação de produto.

## Implementação e evidência local
- FULL-01: `catalog.ts` relaciona exatamente as 92 famílias dos arquivos de stories a sete áreas, carregadas sob demanda. O teste compara famílias/links com arquivos e índice real. As quatro telas de aplicação permanecem. Um exemplo por família; demais variantes ficam no catálogo, sem afirmar testar todas as combinações de props.
- FULL-02: raios e aliases movidos para base; claro #ffffff; superfícies escuras elevadas diferenciadas. Skins passam a cobrir a escala de raios; raios literais de menu/sidebar/matriz/empty state substituídos por tokens. ButtonGroup preserva cantos e espessuras do botão. Teste comprova invariância de geometria ao alternar modo.
- FULL-03: opções nativas recebem cor/fundo explícitos; chip usa pares semânticos e conserva o foreground selecionado em hover; StatusDot e trilho de timeline usam cor com contraste. Corrigidos também CodeBlock e texto fixo no exemplo Calendar encontrados na ampliação.
- `tests/catalog.spec.ts`: todas as 92 famílias renderizadas em claro/escuro nos navegadores locais Chromium/WebKit, troca dos três conjuntos de fontes, contraste nas três aparências e ausência de overflow da página a 375px/1280px. 32 casos de cobertura/estrutura aprovados; quatro casos adicionais de listas abertas e seleção por teclado aprovados. Fontes/skins são verificados por eixos, sem alegar uma matriz exaustiva de todos os estados.
- Regressão local: 264 testes passaram inicialmente. Quatro medições de listas abertas estavam capturando a animação de entrada; o teste foi corrigido para medir o estado estabilizado e os quatro passaram. Oito casos visuais diferiram apenas no escuro; após inspeção dirigida de modal desktop e drawer móvel, 12 referências macOS foram atualizadas. Execução normal das 24 verificações visuais aprovada depois da atualização. Nenhum limiar foi afrouxado.
- Inspeção visual do agente: chips selecionados/semânticos em tema escuro e composição, modal desktop e drawer móvel. Capturas reduzidas, sem lotes de imagens no contexto. Popup nativo do SO não foi capturado pela API de navegador; CSS computado, semântica e teclado foram verificados, sem garantir aparência idêntica entre sistemas.
- Checks, OpenSpec e build do Storybook aprovados. Graft reconstruído. Verificação Linux e atualização das referências específicas daquela plataforma ainda em andamento.
