## ADDED Requirements

### Requirement: MAT-01 — Inventário com maturidade por evidência

O catálogo SHALL inventariar todas as famílias exportadas com camada, responsável, maturidade, evidência e limitações; o status estável SHALL obedecer LIFE-02.

#### Scenario: MAT-01 resultado esperado
- **WHEN** a árvore muda
- **THEN** a comparação automática aponta família sem ficha, export órfão ou status sem referência.

#### Scenario: MAT-01 falha ou limite
- **WHEN** uma família tem stories mas não tem validação necessária
- **THEN** permanece com a maturidade real e não recebe selo de estabilidade por contagem.

### Requirement: MAT-02 — Correspondência entre design e código

Cada ficha SHALL identificar o estado da correspondência de design (verificada, parcial ou não conectada), fonte e versão quando existentes, sem atribuir variáveis ou variantes não lidas.

#### Scenario: MAT-02 resultado esperado
- **WHEN** uma variante é declarada equivalente à fonte de design
- **THEN** a ficha registra referência e revisão da correspondência.

#### Scenario: MAT-02 falha ou limite
- **WHEN** a fonte está inacessível ou diverge
- **THEN** a ficha indica a limitação e não afirma paridade; componentes podem manter evidência de código sem simular a fonte.
