## Context

O teste atual renderiza três componentes, sem comprovar interação ou camadas. Precisamos de evidência para os sete componentes iniciais antes de ampliar a maturidade para o restante da biblioteca.

Baseline observado: c3f03fd, biblioteca 0.4.0. As specs desta mudança descrevem resultados futuros, não evidência de que já existem.

## Goals / Non-Goals

Objetivo: Comportamento e composição dos componentes essenciais.

Não objetivos: Certificar todas as 92 famílias, reescrever toda a biblioteca com Radix, portar telas do GF ou afirmar que automação certifica leitores de tela.

## Decisions

1. Tratar a ficha funcional de cada um dos sete como contrato; Button e Input já são controles nativos e devem preservar isso.
2. Usar a política técnica de prioridade diálogo -> superfícies por abertura -> aviso global -> tooltip; a escolha não é uma escala oficial de terceiros.
3. Automatizar em Chromium, Firefox e WebKit; a aprovação manual VoiceOver/Safari e NVDA/Chrome identifica versões reais, sem equiparar WebKit automatizado a Safari certificado.

Alternativa descartada: alterar toda a biblioteca de uma vez e promover o catálogo pelo build/quantidade de stories. Essa abordagem não permite atribuir comportamento e falhas a contratos verificados. Reutilizar helpers/componentes atuais antes de criar abstrações ou dependências.

## Risks / Trade-offs

Portar correções isoladas pode mudar Escape ou focos aninhados. A ação de um aviso global pode ficar inacessível enquanto aria-modal está ativo; a solução precisa respeitar a modalidade, e não apenas elevar z-index.

Dependência de execução: gate aprovado de `standardize-refy-foundations` com referência ao commit e revisão. Artefatos prontos não implementam o gate automaticamente.

## Migration Plan

Preservar callbacks e modo controlado/não controlado onde suportados. Toda mudança de comportamento incompatível tem revisão e exemplo de migração. Baselines visuais novos devem ser revisados, nunca aceitos automaticamente.

Validação: cumprir cenários positivos e negativos das specs e guardar resultados por requisito. Se houver falha, manter tarefa e gate abertos; reverter alteração isolada quando necessário, preservando a evidência da falha.

## Open Questions

Escolher no design de implementação como associar avisos acionáveis ao diálogo ativo (escopo/montagem) sem expor conteúdo de fundo. Essa decisão deve ser resolvida antes do trabalho OVL-03.
