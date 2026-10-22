## ADDED Requirements

### Requirement: VIS-01 — Identidade original verificável
O Storybook SHALL carregar Inter, Space Grotesk e JetBrains Mono da referência Refy c3f03fd de forma determinística e manter sua hierarquia e cores padrão, registrando alterações intencionais e correções.

#### Scenario: VIS-01 esperado
- **WHEN** o catálogo abre sem acesso a fontes externas
- **THEN** as três famílias são servidas localmente e a interface usa as fontes declaradas, com comparação anterior e atual documentada.

#### Scenario: VIS-01 limite
- **WHEN** uma diferença é necessária para legibilidade ou responsividade
- **THEN** ela é explicada no de–para e não tratada como reprodução idêntica do defeito original.

### Requirement: VIS-02 — Catálogo e páginas sem cortes indevidos
O catálogo SHALL ser inventariado por família e verificado nos modos claro, escuro e editorial, em larguras móvel e desktop; páginas reais e casos de conteúdo longo SHALL preservar acesso às ações e leitura.

#### Scenario: VIS-02 esperado
- **WHEN** o dashboard, formulários, navegação e famílias são exibidos em 375 e 1280 pixels
- **THEN** ações não são cortadas, navegação móvel é alcançável e áreas deliberadamente roláveis preservam sua função.

#### Scenario: VIS-02 limite
- **WHEN** uma família depende de serviço externo ou dispositivo
- **THEN** a revisão registra o estado exercitado e a limitação sem declarar funcionalidade externa homologada.

### Requirement: VIS-03 — Comparação e revisão honestas
A entrega SHALL distinguir referência original, estado anterior às correções e resultado atual, com capturas identificadas, contexto de viewport e registro das diferenças. Contagem de testes não SHALL substituir revisão visual.

#### Scenario: VIS-03 esperado
- **WHEN** o usuário abre a revisão no Storybook
- **THEN** consegue comparar antes/depois e consultar o que mudou, por quê e o que ainda exige validação.

#### Scenario: VIS-03 limite
- **WHEN** uma diferença visual não foi inspecionada
- **THEN** não é aceita por atualização automática de screenshot.
