## ADDED Requirements

### Requirement: REL-01 — Release rastreável e imutável

Cada publicação SHALL ter versão definida pela política SemVer documentada, changelog, migração quando necessária, commit/tag, gates aprovados e autoria/autorização de publicação; uma versão publicada não pode ser sobrescrita.

#### Scenario: REL-01 resultado esperado
- **WHEN** uma release é autorizada
- **THEN** o artefato e sua identificação correspondem ao commit validado e o registry confirma a versão.

#### Scenario: REL-01 falha ou limite
- **WHEN** o processo falha após uma etapa externa
- **THEN** o estado é reconciliado sem republicar às cegas; uma correção usa nova versão ou retorno compatível no consumidor.

### Requirement: REL-02 — Segurança com exceções delimitadas

A release SHALL verificar dependências de execução e desenvolvimento e bloquear segredos e vulnerabilidades críticas/altas conhecidas não corrigidas na distribuição e nas ferramentas de publicação; alertas moderados exigem correção ou exceção conforme GOV-04.

#### Scenario: REL-02 resultado esperado
- **WHEN** há alerta moderado conhecido de ferramenta
- **THEN** o relatório registra análise, responsável, prazo e escopo, sem descrevê-lo como risco de execução inexistente nem ignorá-lo.

#### Scenario: REL-02 falha ou limite
- **WHEN** há segredo ou vulnerabilidade crítica/alta não tratada
- **THEN** a release não prossegue; passar build não supera esse gate.
