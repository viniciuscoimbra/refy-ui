## Why

Há tokens usados pelo Button que só existem no modo escuro. Precisamos de um contrato de fundação completo por tema e validação que detecte aliases quebrados antes da publicação.

## What Changes

- Inventariar tokens e consumidores; separar primitivas, papéis semânticos e ajustes de componente necessários.
- Definir fonte estruturada compatível com DTCG 2025.10 e geração determinística do CSS.
- Verificar temas, contraste, foco, movimento, fontes e regras de camadas com migração compatível.

- Permitir uma base de componentes compartilhada por Dommus/Domuz, Plyngo e bioma, com identidade e modos próprios, ajustes visuais públicos e isolamento entre instâncias.

Ordem 2/5. Predecessor: `establish-refy-governance` com gate aprovado e evidências.

Não objetivos: Trocar a identidade Refy pela do PCF, gerar uma biblioteca Figma, criar centenas de tokens sem uso ou remover aliases públicos sem migração.

## Capabilities

### New Capabilities

- `design-token-contract`: TOK-01, TOK-02, TOK-03.
- `theme-conformance`: THM-01, THM-02, THM-03.
- `product-theming`: BRAND-01, BRAND-02, BRAND-03.

### Modified Capabilities

Nenhuma spec de base existente. Estas são capacidades novas propostas, ainda não sincronizadas em openspec/specs.

## Impact

src/tokens, CSS Modules, documentação de fundação e futuros validadores/CI. Exportações atuais de CSS devem permanecer compatíveis ou receber migração explicitamente aprovada.

Gate de saída: todos os requisitos desta mudança com evidência, tarefas concluídas e revisão registrada; nenhuma pendência necessária ao aceite pode ser substituída por uma declaração de conclusão.
