## ADDED Requirements

### Requirement: OVL-01 — Prioridade independente da abertura

Menu aberto em Modal/Drawer, ToastRegion e Tooltip local/em portal SHALL respeitar diálogo -> menu -> aviso -> tooltip, escapar de recortes indevidos e manter superfícies alcançáveis na viewport.

#### Scenario: OVL-01 resultado esperado
- **WHEN** um aviso abre antes ou depois do menu
- **THEN** o aviso fica acima do menu, a ajuda acima de ambos e a troca de ordem não reinicia a animação do aviso existente.

#### Scenario: OVL-01 falha ou limite
- **WHEN** a camada depende apenas de um z-index incapaz de cumprir a prioridade no contexto real
- **THEN** a composição falha mesmo que os valores numéricos estejam ordenados.

### Requirement: OVL-02 — Dispensa aninhada

Escape SHALL fechar primeiro a ajuda visível, depois a superfície interna e depois o diálogo, restaurando o gatilho apropriado sem apagar valores; aviso global não é dispensado pelo mesmo Escape.

#### Scenario: OVL-02 resultado esperado
- **WHEN** ajuda, menu e diálogo estão abertos
- **THEN** três Escapes sucessivos fecham um nível por vez e o aviso permanece.

#### Scenario: OVL-02 falha ou limite
- **WHEN** o gatilho foi removido ou uma camada filha já consumiu o evento
- **THEN** não há foco em nó desconectado nem fechamento adicional do pai.

### Requirement: OVL-03 — Ações de avisos durante modalidade

Avisos acionáveis SHALL oferecer ação e dispensa por teclado e tecnologia assistiva no escopo acessível do diálogo ativo, sem liberar navegação no conteúdo de fundo.

#### Scenario: OVL-03 resultado esperado
- **WHEN** uma ação de aviso é emitida durante um diálogo
- **THEN** ela é anunciada e pode ser alcançada e executada preservando a modalidade.

#### Scenario: OVL-03 falha ou limite
- **WHEN** o aviso está visualmente acima mas inacessível por aria-modal ou foco preso
- **THEN** o caso falha e a prioridade visual não serve como evidência de acessibilidade.
