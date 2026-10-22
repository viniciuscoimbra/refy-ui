## Context

O catálogo e a compilação atuais não comprovam a qualidade das 92 famílias. Precisamos de critérios rastreáveis para propor, revisar, validar e manter a biblioteca antes de alterar sua fundação.

Baseline observado: c3f03fd, biblioteca 0.4.0. As specs desta mudança descrevem resultados futuros, não evidência de que já existem.

## Goals / Non-Goals

Objetivo: Governança e critérios de maturidade.

Não objetivos: Criar componentes, alterar tokens, publicar npm, certificar acessibilidade ou instituir uma burocracia de comitês. Não importar o processo de produto do monorepo Dommuz.

## Decisions

1. Manter planejamento neste repositório, sem depender de um store ou Control Tower externo.
2. Documentar papéis de mantenedor e revisor; não exigir um número de pessoas incompatível com a manutenção atual. Mudanças sensíveis identificam o responsável pela decisão.
3. Tratar a ordem das cinco mudanças como gate explícito de execução; o CLI apenas verifica artefatos, não implementa dependências entre mudanças.

Alternativa descartada: alterar toda a biblioteca de uma vez e promover o catálogo pelo build/quantidade de stories. Essa abordagem não permite atribuir comportamento e falhas a contratos verificados. Reutilizar helpers/componentes atuais antes de criar abstrações ou dependências.

## Risks / Trade-offs

Um gate pode virar só um checkbox. Cada conclusão precisa apontar para evidência real; exceções não podem declarar conformidade inexistente.

Dependência de execução: revisão do escopo e autorização para executar esta primeira fase. Artefatos prontos não implementam o gate automaticamente.

## Migration Plan

Preservar o catálogo e a licença atuais. O inventário inicia com maturidade não avaliada quando não houver evidência, sem remover componentes ou alterar APIs.

Validação: cumprir cenários positivos e negativos das specs e guardar resultados por requisito. Se houver falha, manter tarefa e gate abertos; reverter alteração isolada quando necessário, preservando a evidência da falha.

## Open Questions

Confirmar na revisão quem exerce os papéis de mantenedor e revisor. Nenhuma implementação fica autorizada apenas pelo status complete dos artefatos.
