## Context

Há tokens usados pelo Button que só existem no modo escuro. Precisamos de um contrato de fundação completo por tema e validação que detecte aliases quebrados antes da publicação.

Baseline observado: c3f03fd, biblioteca 0.4.0. As specs desta mudança descrevem resultados futuros, não evidência de que já existem.

## Goals / Non-Goals

Objetivo: Contrato de tokens e temas.

Não objetivos: Trocar a identidade Refy pela do PCF, gerar uma biblioteca Figma, criar centenas de tokens sem uso ou remover aliases públicos sem migração.

## Decisions

1. Usar primitivas e tokens semânticos; criar tokens de componente apenas quando houver necessidade distinta documentada.
2. Gerar CSS da fonte estruturada e conferir a equivalência em CI; preservar nomes públicos por aliases quando viável.
3. Validar todos os temas atualmente oferecidos: light, dark e editorial. A política proposta é claro como padrão sem data-theme; qualquer mudança no padrão exige nota de migração.

Alternativa descartada: alterar toda a biblioteca de uma vez e promover o catálogo pelo build/quantidade de stories. Essa abordagem não permite atribuir comportamento e falhas a contratos verificados. Reutilizar helpers/componentes atuais antes de criar abstrações ou dependências.

## Risks / Trade-offs

Uma renomeação ampla pode quebrar consumidores. Valores literais justificados por geometria óptica podem existir, mas precisam de exceção documentada; não confundir variáveis opcionais locais com tokens obrigatórios.

Dependência de execução: gate aprovado de `establish-refy-governance` com referência ao commit e revisão. Artefatos prontos não implementam o gate automaticamente.

## Migration Plan

Capturar o baseline antes de mudar. Resolver lacunas como --on-primary e --primary-container; manter tabela antes/depois, aliases depreciados e versão de remoção proposta, sem remoção nesta fase.

Validação: cumprir cenários positivos e negativos das specs e guardar resultados por requisito. Se houver falha, manter tarefa e gate abertos; reverter alteração isolada quando necessário, preservando a evidência da falha.

## Open Questions

Aprovar mudanças visuais necessárias para contraste e confirmar política de carregamento de fontes externas. Valores exatos serão decididos com os pares e estados medidos, não inventados no planejamento.
