## Context

Autodocs e exemplos não explicam sozinhos qual elemento escolher nem os limites de uso. Precisamos de documentação uniforme e visibilidade do que foi realmente validado.

Baseline observado: c3f03fd, biblioteca 0.4.0. As specs desta mudança descrevem resultados futuros, não evidência de que já existem.

## Goals / Non-Goals

Objetivo: Documentação e maturidade do catálogo.

Não objetivos: Declarar todas as famílias estáveis, implementar novas páginas de produto, criar Figma sem fonte aprovada ou colocar regras de negócio de clientes no DS.

## Decisions

1. Reutilizar o Storybook existente e um modelo de ficha com informação humana além da tabela de props.
2. Inventariar as famílias reais da árvore; 92 é baseline a conferir, não quantidade fixa imposta ao futuro.
3. Distinguir correspondência Figma verificada, parcial e não conectada. Falta de acesso ao Figma não será mascarada por equivalência presumida.

Alternativa descartada: alterar toda a biblioteca de uma vez e promover o catálogo pelo build/quantidade de stories. Essa abordagem não permite atribuir comportamento e falhas a contratos verificados. Reutilizar helpers/componentes atuais antes de criar abstrações ou dependências.

## Risks / Trade-offs

Documentar comportamento imaginado cria contrato falso. Os exemplos devem consumir exports públicos e refletir APIs reais; requisitos funcionais descobertos voltam para a mudança responsável.

Dependência de execução: gate aprovado de `certify-refy-core-components` com referência ao commit e revisão. Artefatos prontos não implementam o gate automaticamente.

## Migration Plan

Preservar IDs de stories existentes quando possível e registrar redirecionamento/de–para para qualquer mudança de navegação. Não reclassificar páginas inteiras como organismos.

Validação: cumprir cenários positivos e negativos das specs e guardar resultados por requisito. Se houver falha, manter tarefa e gate abertos; reverter alteração isolada quando necessário, preservando a evidência da falha.

## Open Questions

Escolher a fonte de design aprovada e o acesso para eventual correspondência. Até lá, registrar não conectada com o motivo, sem bloquear a descrição do contrato de código.
