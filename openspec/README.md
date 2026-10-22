# Qualidade do Refy — planejamento e execução

O programa define contratos e evidências para evoluir a biblioteca Refy. O mantenedor autorizou a execução das cinco fases em 21/10/2026. Governança e fundação já foram implementadas e verificadas; as etapas restantes seguem seus gates e não são consideradas concluídas por terem artefatos prontos.

## Ordem de execução

**Prioridade atual, autorizada em 22/10/2026:** [recuperação visual](changes/restore-refy-visual-coherence/proposal.md), revisão do catálogo e customização ampla. Essa mudança e sua documentação avançam agora; o roteiro de leitor de tela foi adiado pelo mantenedor. A certificação assistiva continua pendente e não é usada para impedir correções visuais. A ordem abaixo permanece como programa de certificação/release, com essa recuperação inserida antes de sua conclusão.

| Ordem | Mudança | Depende de | Gate de saída |
|---|---|---|---|
| 1 | [Governança](changes/establish-refy-governance/proposal.md) | Revisão e autorização de execução desta fase | Processo, responsabilidade, maturidade e evidência definidos e verificados |
| 2 | [Fundação e temas](changes/standardize-refy-foundations/proposal.md) | Gate de governança aprovado | Tokens resolvidos, geração determinística, temas e critérios visuais aplicáveis verificados |
| 3 | [Componentes essenciais](changes/certify-refy-core-components/proposal.md) | Gate de fundação aprovado | Contratos dos sete componentes e composições validados, incluindo evidência assistiva necessária |
| 4 | [Documentação](changes/standardize-refy-documentation/proposal.md) | Gate dos componentes essenciais aprovado | Fichas, inventário real de maturidade, guias e links conferidos |
| 5 | [Release e adoção](changes/establish-refy-release-and-adoption/proposal.md) | Gate de documentação aprovado | Pacote, suporte, segurança, migração e publicação autorizada verificados |

As dependências são condições documentadas de execução, não um bloqueio automático do CLI. Ter proposal/design/specs/tasks completos não comprova execução ou autorização para implementar. Não iniciar a próxima fase apenas porque o CLI considera os artefatos completos.

## Estado da execução

| Fase | Situação | Evidência |
|---|---|---|
| Governança | Gate técnico concluído; specs sincronizadas | [Registro](changes/establish-refy-governance/evidence.md) |
| Fundação | Gate técnico concluído; specs sincronizadas | [Registro](changes/standardize-refy-foundations/evidence.md) |
| Componentes essenciais | Automação passou: 288 testes Linux / 192 locais; homologação assistiva pendente | [Registro e pendências](changes/certify-refy-core-components/evidence.md) |
| Documentação integral | Não iniciada; depende do gate dos componentes | [Tarefas](changes/standardize-refy-documentation/tasks.md) |
| Release e adoção | Não iniciada; pacote não publicado, produtos não migrados | [Tarefas](changes/establish-refy-release-and-adoption/tasks.md) |

A revisão técnica registrada é do agente. Não se confunde com revisão independente nem com a sessão real de NVDA/Chrome e VoiceOver/Safari exigida por CORE-03. [Roteiro assistivo](../docs/ASSISTIVE_QA.md).

## Como ler e revisar

Cada mudança contém:

- `proposal.md`: problema, escopo, capacidades, impacto e predecessor.
- `design.md`: decisões propostas, alternativas, riscos, migração e decisões abertas.
- `specs/<capacidade>/spec.md`: requisitos com IDs e cenários observáveis de sucesso e falha/limite.
- `tasks.md`: tarefas com estado de execução, IDs atendidos, critérios de aceite e referências de evidência.

A revisão deve conferir o escopo, as decisões abertas e os cenários antes de autorizar a execução. Exemplos de aceite nesta proposta incluem falha para tokens obrigatórios ausentes, dispensa de camadas em ordem, ação de aviso acessível durante modalidade e instalação real do tarball fora do workspace.

Cada tarefa concluída registra a execução e o resultado no evidence.md da mudança. Checkboxes não substituem o gate: uma fase pode ter implementação parcial e ainda depender de validação obrigatória. Decisões que determinam a solução são registradas no design antes da tarefa correspondente.

## Uma base para vários produtos

O objetivo é usar o mesmo componente Refy em Dommus/Domuz, Plyngo e bioma, com a identidade de cada aplicação. Identidade e modos claro/escuro são eixos distintos. Personalização cobre cores, fontes, densidade, raios e demais ajustes necessários por contrato público, preservando a interação. Logos e regras de negócio ficam nos consumidores.

A fase 2 define esse contrato e verifica isolamento, inclusive em portais; a fase 3 testa comportamento com personalização; a fase 4 ensina a instanciar; a fase 5 comprova adoção com pilotos e retorno à versão anterior. A revisão de governança considera o impacto nesses consumidores desde o início.

Hoje há evidência de dependência local/patches e adaptação de tokens no Plyngo, origem de extração no Dommus/Domuz e tokens derivados na IDE bioma. Isso não equivale a compatibilidade homologada com o novo pacote. O de–para por produto e os pilotos permanecem tarefas abertas; nenhuma aplicação é migrada por este planejamento.

## Estado inicial

Baseline de código: `c3f03fd`, pacote `@refy/ui` 0.4.0. O inventário de origem tem 92 famílias e 371 stories. Esses números são referência de escopo; não representam certificação de comportamento ou acessibilidade.

As specs propostas ficam em `changes/`. `openspec/specs/` contém os contratos de governança e fundação já verificados; as demais capacidades só são promovidas após sua implementação e validação adequadas. Requisitos ainda propostos não devem ser apresentados como comportamento existente.

O primeiro escopo funcional é Button, Input, Menu, Modal, Drawer, Tooltip e ToastRegion. Uma família pode exportar mais de uma API: validar ToastRegion não certifica automaticamente Toast isolado ou toda composição que o use. O inventário deve registrar o escopo efetivamente verificado.

As decisões de registry e acesso de publicação pertencem à quinta fase. A correspondência Figma deve indicar fonte/verificação ou limitação de acesso; o planejamento não presume essa equivalência. A identidade do GF permanece baseada no PCF em sua derivação.

## Comandos

Requisito de planejamento: OpenSpec CLI 1.5.0, versão usada na inicialização. O CLI não é uma dependência de execução da biblioteca.

```bash
openspec list --json
openspec status --change establish-refy-governance
openspec show establish-refy-governance
openspec validate --all --strict
```

Os comandos de aplicação só entram depois de autorizar a execução da fase e verificar seu gate de entrada. Arquivamento e sincronização das specs de base ficam para a conclusão real das mudanças.

## Referências do levantamento

- [Material Design: tokens](https://m3.material.io/foundations/design-tokens)
- [Fluent: tokens globais e aliases](https://fluent2.microsoft.design/design-tokens)
- [Spectrum: tokens e composição](https://spectrum.adobe.com/foundations/design-data/design-tokens)
- [Carbon: acessibilidade](https://www.carbondesignsystem.com/building-blocks/foundations/accessibility)
- [Radix: teclado, foco e semântica](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- [GOV.UK: critérios de contribuição](https://design-system.service.gov.uk/community/contribution-criteria/)
- [W3C: WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [DTCG: formato 2025.10](https://www.designtokens.org/TR/2025.10/format/)

Essas referências orientam contratos e revisão; não transferem certificação ou identidade visual ao Refy.
