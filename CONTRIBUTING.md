# Contribuir com o Refy

O Refy é uma biblioteca React sob MIT, mantida por Vinícius Coimbra. A licença
permite derivação; não licencia automaticamente marcas, fontes ou assets de terceiros.

## Propor e implementar

1. Descreva a necessidade em uma mudança OpenSpec, com proposal, design, specs e
   tasks. Inclua alternativas existentes, consumidores afetados e critérios de aceite.
2. Registre o escopo autorizado antes de implementar. Para uma nova família,
   justifique por que composição dos componentes existentes não resolve a necessidade.
3. Identifique responsável e revisor no PR. Vinícius é o mantenedor inicial e decide
   alterações incompatíveis e publicação. Contribuidores podem revisar; uma revisão
   feita pelo próprio agente autor deve se identificar, sem alegar independência.
4. Execute os testes aplicáveis e preencha a evidência por requisito/tarefa. Registre
   alterações de API, tokens, defaults e comportamento com um de–para e migração.
5. Sincronize specs implementadas e conclua o gate somente com os aceites atendidos.

Uma versão 0.x também tem consumidores. Confira Dommus/Domuz, Plyngo e bioma,
incluindo dependências locais, patches e tokens derivados. Não copie dados ou
código privado para demonstrar compatibilidade; use fixtures sintéticas.

## Desenvolvimento

Node 22.12 ou posterior, instalação pelo lockfile (`npm ci`). `npm run storybook`
abre o catálogo local; `npm run check` verifica tipos, build e distribuição.
Para revisar specs, instale `@fission-ai/openspec@1.5.0` e execute
`npm run check:specs`. O CI usa essa versão fixa.

O [contrato de qualidade](docs/QUALITY.md) explica camadas, maturidade, evidências
e exceções. Um build ou um grande número de stories não certifica uma família.
