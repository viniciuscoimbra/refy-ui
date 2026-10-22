## ADDED Requirements

### Requirement: SKIN-01 — Aparência configurável por papel
O contrato SHALL expor tokens documentados para geometria, borda, fundo, texto, sombra e estados dos controles, com defaults Refy e aliases compatíveis. Fundos degradê SHALL usar tokens próprios de superfície, sem transformar tokens semânticos de cor em valores inválidos.

#### Scenario: SKIN-01 esperado
- **WHEN** uma aplicação configura botão quadrado com borda espessa ou arredondado com degradê
- **THEN** os dois usam o mesmo Button sem CSS de implementação copiado, incluindo hover, active, disabled, loading e foco visível.

#### Scenario: SKIN-01 limite
- **WHEN** uma skin omite um token opcional
- **THEN** aplica o fallback Refy sem contaminar outra instância, seus portais ou seu modo.

### Requirement: SKIN-02 — Consistência da composição
As demonstrações SHALL aplicar a identidade a campos, botões, seleção, cards e superfícies compostas de forma coerente, mantendo estados e eventos da mesma implementação.

#### Scenario: SKIN-02 esperado
- **WHEN** a identidade ou o modo muda durante a edição
- **THEN** valores, eventos, foco e comportamento dos overlays permanecem corretos e o exemplo oferece código copiável.

#### Scenario: SKIN-02 limite
- **WHEN** uma personalização visual é demonstrada
- **THEN** ela não é anunciada como tema homologado de um cliente nem como garantia para valores arbitrários fornecidos por aplicações.
