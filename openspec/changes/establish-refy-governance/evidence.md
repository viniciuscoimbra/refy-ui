# Evidência — governança

Data: 21/10/2026. Baseline: 8791e9f. Autor e revisor desta execução: Codex (revisão do próprio agente; sem alegação de revisão independente/humana).
Autorização: instrução do mantenedor nesta conversa: “Pode seguir fazendo tudo. Paremos só quando tivermos com o refy perfeitamente funcionando”. Escopo: cinco fases existentes, por gates, sem alegar perfeição ou homologação sem prova.

| Tarefa | Requisito | Procedimento e resultado |
|---|---|---|
| 1.1 | GOV-01 | Plano aprovado e instrução de execução acima registrados; mantenedor Vinícius, agente executor identificado |
| 1.2 | GOV-01 | Revisados proposal/design/specs/tasks, pacote, CI, check.mjs e consumidores; impacto limitado a documentação/processo/validador; sem mudança visual ou de API |
| 2.1 | GOV-01 | AGENTS.md e CONTRIBUTING.md vinculam escopo, autorização e gates; template de PR pede rastreabilidade |
| 2.2 | GOV-02, GOV-04 | docs/QUALITY.md contém modelo de evidência e exceção com responsável/prazo/encerramento, exemplos rotulados como ilustração |
| 2.3 | GOV-03, LIFE-01 | Guia exige composição antes de nova família, responsável e impacto em consumidores; mantenedor e revisão identificados |
| 2.4 | LIFE-02 | Matriz separa camada e maturidade, define promoção e recusa alegações sem validação aplicável |
| 2.5 | Todos | Ensaio de seis casos em docs/QUALITY.md revisto: aceita somente escopo com autorização/evidência; recusa duplicação, página como organismo, promoção/exceção inválidas |
| 2.6 | GOV-01, GOV-02 | npm run check:specs: cinco mudanças válidas passaram; controle válido aceito; fixture inválida recusada em diretório temporário. CI instala CLI 1.5.0 e executa o mesmo teste |
| 3.1 | Todos | Revisão acima liga os seis requisitos a arquivos e resultados; nenhuma certificação de componentes foi feita |
| 3.2 | Todos | Gate técnico da governança atendido na revisão do agente; specs sincronizadas. Não constitui promoção de componentes nem revisão independente. Registro versionado junto a esta execução |

Verificação adicional: npm run check passou (tipos/build/SSR/distribuição); git diff --check passou. Primeiro ensaio do controle válido foi recusado por Purpose curto; descrição corrigida, ambos os controles reexecutados com sucesso. Graft reconstruído.
