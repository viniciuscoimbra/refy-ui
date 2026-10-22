## ADDED Requirements

### Requirement: ADOPT-01 — Derivação com identidade independente

O guia de derivação SHALL preservar MIT/atribuição do código Refy e permitir identidade própria; a aplicação GF SHALL manter sua fundação PCF confirmada sem introdução automática de tokens Refy.

#### Scenario: ADOPT-01 resultado esperado
- **WHEN** o guia usa GF como exemplo
- **THEN** distingue API/comportamento genéricos de paleta, fontes, assets e decisões de produto da derivação.

#### Scenario: ADOPT-01 falha ou limite
- **WHEN** uma atualização do código genérico tenta substituir tokens PCF ou atribuir licença a marca de cliente
- **THEN** a alteração é rejeitada e encaminhada à revisão da derivação.

### Requirement: ADOPT-02 — Migração e retorno de correções

O processo de adoção SHALL registrar a versão-base, alterações locais, de–para e critérios de migração; correções genéricas vindas de uma derivação SHALL passar pelos gates Refy antes de integração.

#### Scenario: ADOPT-02 resultado esperado
- **WHEN** uma correção de foco/camadas é proposta a partir do GF
- **THEN** há reprodução genérica, análise de compatibilidade e testes sem dados ou identidade do cliente.

#### Scenario: ADOPT-02 falha ou limite
- **WHEN** há apenas equivalência visual presumida ou cópia integral da derivação
- **THEN** a correção não é considerada validada para a biblioteca base.
