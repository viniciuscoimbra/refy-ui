## Why

O teste atual renderiza três componentes, sem comprovar interação ou camadas. Precisamos de evidência para os sete componentes iniciais antes de ampliar a maturidade para o restante da biblioteca.

## What Changes

- Verificar Button, Input, Menu, Modal, Drawer, Tooltip e ToastRegion.
- Definir teclado, foco, estados, APIs e testes de composição com avisos e menus em diálogos.
- Implantar regressão visual e testes de acessibilidade aplicáveis, com limitações manuais registradas.

Ordem 3/5. Predecessor: `standardize-refy-foundations` com gate aprovado e evidências.

Não objetivos: Certificar todas as 92 famílias, reescrever toda a biblioteca com Radix, portar telas do GF ou afirmar que automação certifica leitores de tela.

## Capabilities

### New Capabilities

- `core-component-behavior`: CORE-01, CORE-02, CORE-03, CORE-04.
- `overlay-composition`: OVL-01, OVL-02, OVL-03.

### Modified Capabilities

Nenhuma spec de base existente. Estas são capacidades novas propostas, ainda não sincronizadas em openspec/specs.

## Impact

Sete famílias, helpers compartilhados, stories de composição e futuros testes/CI. Correções genéricas existentes no GF são candidatas à portação após revisão de compatibilidade, sem tokens ou assets PCF.

Gate de saída: todos os requisitos desta mudança com evidência, tarefas concluídas e revisão registrada; nenhuma pendência necessária ao aceite pode ser substituída por uma declaração de conclusão.
