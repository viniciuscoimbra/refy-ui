## ADDED Requirements

### Requirement: DOC-01 — Ficha uniforme e verificável

Cada família SHALL ter ficha com finalidade, camada, anatomia, quando usar/evitar, alternativas, API, estados aplicáveis, teclado/foco, conteúdo, acessibilidade, exemplos e limitações.

#### Scenario: DOC-01 resultado esperado
- **WHEN** o leitor abre uma família
- **THEN** encontra a ficha e consegue usar um exemplo baseado em exports públicos.

#### Scenario: DOC-01 falha ou limite
- **WHEN** uma seção depende de evidência ausente
- **THEN** a lacuna é explícita; autodocs ou uma lista de props não substitui a orientação de uso.

### Requirement: DOC-02 — Escolha de controle e composição

Os guias SHALL explicar Menu para ações, Select para escolhas simples, Combobox para busca, Modal/Drawer conforme tarefa e avisos inline/globais conforme persistência, com exemplos justificados e preservação da usabilidade.

#### Scenario: DOC-02 resultado esperado
- **WHEN** uma tela precisa de busca em opções
- **THEN** o guia mostra a composição apropriada e explica a escolha sem criar um componente de página.

#### Scenario: DOC-02 falha ou limite
- **WHEN** um exemplo troca controle apenas por aparência ou transforma a página inteira em organismo
- **THEN** a revisão recusa o exemplo e registra a correção necessária.
