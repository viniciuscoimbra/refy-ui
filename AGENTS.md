# Refy UI — contrato de trabalho

Leia `openspec/README.md` e os artefatos da mudança antes de editar comportamento,
API, tokens ou distribuição. Use `openspec instructions apply --change <nome>`.
Uma proposta completa não equivale a autorização: registre a instrução humana
aplicável em `evidence.md`. A autorização de 21/10/2026 permite executar as cinco
fases aprovadas, por ordem e com os respectivos gates.

Use a implementação e os helpers existentes antes de criar abstrações. Preserve
exports, props, aliases e defaults ou documente a migração aprovada. Investigue
impacto em Dommus/Domuz, Plyngo e bioma; assets e regras privados ficam fora daqui.
Páginas são composições de Atomic Design, não novas famílias de organismos.

Marque tarefas somente com procedimento, resultado e referência verificável.
`docs/QUALITY.md` define maturidade, evidência e exceções. Não declare estabilidade,
conformidade WCAG ou homologação de um produto sem os testes aplicáveis. Falta de
acesso permanece pendente. Uma revisão do agente é identificada como tal, nunca
como aprovação independente ou humana.

Antes de concluir: `npm run check`, `npm run check:specs` e, se mudar stories,
`npm run build-storybook`. Mudanças de interação exigem teste no navegador;
testes estruturais/SSR não substituem teclado, foco, layout ou leitor de tela.
Após mudanças de código execute `graft build`. Não publique pacote ou migre
consumidor sem concluir os critérios da fase correspondente.
