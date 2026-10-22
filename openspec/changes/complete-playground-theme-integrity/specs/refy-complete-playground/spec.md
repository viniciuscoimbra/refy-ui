## ADDED Requirements

### Requirement: FULL-01 — Todas as famílias no playground
O playground SHALL oferecer uma demonstração montável para cada família do catálogo, agrupada por finalidade e sob os mesmos controles de modo, aparência e fonte.
#### Scenario: Encontrar e experimentar
- **WHEN** a pessoa abre uma área de componentes e seleciona uma família
- **THEN** a demonstração real aparece dentro do playground, com nome, classificação atômica e link da story; uma única família por vez evita poluição.
#### Scenario: Cobertura verificável
- **WHEN** uma família é adicionada ao catálogo sem área/demonstração
- **THEN** a verificação de cobertura falha indicando a família ausente.
#### Scenario: Dependências externas
- **WHEN** a família envolve mapa, gravação, autenticação ou outros serviços
- **THEN** a demonstração local deixa seu limite explícito, sem enviar dados nem solicitar permissões automaticamente.

### Requirement: FULL-02 — Modo independente da aparência
O modo SHALL alterar a paleta e a iluminação das superfícies sem alterar raios, espessuras, espaçamento ou famílias de fonte.
#### Scenario: Alternância
- **WHEN** claro e escuro são alternados mantendo a aparência
- **THEN** controles, cards, chips, menus, modal e drawer mantêm a mesma geometria e estado.
#### Scenario: Refy branco
- **WHEN** o modo claro da aparência Refy está ativo
- **THEN** o fundo da aplicação é branco (#ffffff); superfícies secundárias continuam distintas e legíveis.
#### Scenario: Aparência completa
- **WHEN** a aparência Contorno ou Degradê é selecionada
- **THEN** raios de controles, grupos, superfícies e overlays respondem aos tokens correspondentes; formas funcionais como avatares circulares e indicadores não são distorcidas.

### Requirement: FULL-03 — Contraste e estados visíveis
As demonstrações SHALL manter texto legível, seleção distinta e indicadores perceptíveis nos modos claro e escuro.
#### Scenario: Seleções e timeline
- **WHEN** select/combobox/menu são abertos ou chips são selecionados e a timeline é exibida
- **THEN** texto e fundo possuem pares compatíveis; o chip selecionado continua legível em hover e o trilho da timeline se distingue do fundo.
#### Scenario: Teste e limites
- **WHEN** a entrega é verificada
- **THEN** cobertura, ausência de erros de render, contraste textual, overflow e troca de fontes são testados por família; inspeção visual dirigida e limitações de controles nativos/serviços são registradas sem alegar certificação integral.
