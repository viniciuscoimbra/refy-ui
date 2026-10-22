# Evidência — componentes essenciais

Execução: 22/10/2026. Baseline/gate: fundação `5e3df73`, CI Linux aprovado em
https://github.com/viniciuscoimbra/refy-ui/actions/runs/39713204956.
Autor/revisor: Codex (revisão do agente, não independente nem homologação humana).
Autorização: instrução do mantenedor registrada na governança.

## Escopo revisado

Lidos todos os artefatos da mudança. Callers de useDialogFocusTrap: Modal e
Drawer. Callers de tokens/famílias e composição revisados. Helpers genéricos
useTopLayer/AnchoredSurface do GF foram portados sem tokens, assets, telas ou
regras PCF. Mudanças atingem os sete componentes, helpers, stories, testes e CI.
Command/Popover e demais famílias não herdam automaticamente certificação.
Decisão de montagem OVL-03 foi registrada no design antes da implementação.

## Resultados por tarefa

| Tarefa | Requisitos | Procedimento e resultado |
|---|---|---|
| 1.1 | Entrada | Gate de fundação no commit/CI acima conferido; autorização vigente |
| 1.2 | Escopo | Baseline, helpers, callers, props, estilos, interfaces e risco de migração revisados; decisões atualizadas |
| 2.1 | CORE-01 | docs/CORE_CONTRACTS.md registra API, defaults, estados/eventos, controle e não aplicáveis dos sete; maturidade experimental |
| 2.2 | CORE-02 | tests/core.spec.ts verifica bloqueios de Button; Input com IDs únicos/descrições; Menu com foco/setas/Home/End/letras/seleção; retorno de foco e gatilho removido; diálogos aninhados/inert/scroll; aviso acionável e timers |
| 2.3 | OVL-01/02 | Helpers candidatos revistos e adaptados; top layer manual ordenada; CSS/identidade continuam Refy; nenhuma portação presumida como homologação de aplicação |
| 2.4 | OVL-01/02 | 48 combinações por engine: 3 temas × Modal/Drawer × 375/1280 × aviso antes/depois × ajuda local/portal. Hittest confirma superfícies reais; Escape fecha 3 níveis; instância/animação do aviso preservada. Chromium/WebKit passaram; aguarda resultado Linux das 3 engines |
| 2.5 | OVL-03 | Região global mantém host/Toast estável, move ao diálogo da mesma instância e retorna à origem. Sessão manual IAB: abrir modal, 6 Tabs até Desfazer, Enter dispensa aviso, foco retorna a Ajuda dentro do modal; Escape dispensa ajuda, outro fecha diálogo; Abrir fluxo recupera foco; contador Ações do aviso=1. Fundo ausente da árvore acessível durante modalidade. Isso é teste manual de teclado/árvore, não leitura NVDA/VoiceOver |
| 2.6 | CORE-04 | Comparação visual implementada em tests/visual.spec.ts, 18 referências por engine/OS em 375x812 e 1280x900, 3 modos, base/modal/drawer; 36 referências Mac revistas nas 6 folhas por engine/modo. Comparação sem atualizar referências passou. Referências Linux ainda precisam de captura e revisão |
| 2.7 | CORE-03/OVL-03 | NVDA/Chrome Windows não executado; roteiro docs/ASSISTIVE_QA.md pronto; sem promoção |
| 2.8 | CORE-03/OVL-03 | VoiceOver/Safari real não executado; WebKit e IAB não substituem essa sessão; sem promoção |
| 2.9 | BRAND-02/03 | Testes de temas/presets sintéticos, escopos aninhados e portais reexecutados com os componentes alterados; parte da suíte local abaixo; aguarda CI atualizado |

## Verificações executadas

- npm run check: tokens/30 pares de contraste/tipos/build/SSR passaram.
- npm run build-storybook: compilou.
- npm run check:specs e git diff --check: passaram.
- npm run test:browser -- --project=chromium --project=webkit: **176 testes passaram**, incluindo 152 de comportamento/adaptação/axe e 24 casos visuais; comparação feita sem --update-snapshots.
- O inventário agora contém 290 variáveis consumidas; novos hooks opcionais têm fallback.

Falhas detectadas e corrigidas durante esta execução: item desabilitado inicial
no Menu; IDs de campo repetidos; descrição externa escondendo erro; foco de retorno
em cliques do WebKit; perda de foco ao dispensar aviso; timers reiniciados por callback;
contraste da ação de aviso na superfície invertida; tooltip hoverável e sem recorte.
A câmera manual de teclado encontrou perda de foco que a primeira versão do teste
não cobria: foi acrescentada regressão e o roteiro manual foi repetido com sucesso.
Diferenças visuais de rasterização durante animação do tooltip foram diagnosticadas
na imagem diff; captura agora parte de movimento reduzido, sem relaxar tolerância.

Safari/Mac pode usar Option-Tab conforme preferência de teclado; o teste WebKit
Mac usa esse atalho de plataforma para percorrer controles, sem alterar preferências
do usuário. Referência oficial no roteiro. No CI Linux usa Tab.

## Gate

**Aberto.** Falta a homologação assistiva real e a revisão/execução visual no Linux.
As famílias continuam experimentais. Não sincronizar/promover specs desta mudança
como certificadas nem liberar as fases seguintes por substituição da evidência manual.
O mantenedor recebeu pergunta nesta conversa sobre execução do roteiro; sem resposta,
não se presume aprovação nem execução. Nenhuma aplicação consumidora foi migrada.
