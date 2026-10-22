## ADDED Requirements

### Requirement: PLAY-01 — Composição navegável e personalizável
O catálogo SHALL oferecer uma página completa composta de componentes existentes com controles independentes de modo, aparência e tipografia, e configuração copiável para ThemeProvider.
#### Scenario: Mudança preserva trabalho
- **WHEN** a pessoa preenche um campo e troca modo, aparência ou fontes
- **THEN** o conteúdo, navegação e estado persistem; a composição e seus menus, modal, drawer e avisos recebem os tokens selecionados.
#### Scenario: Adoção prática
- **WHEN** a pessoa navega por visão geral, trabalho, biblioteca e configurações
- **THEN** encontra composições funcionais de moléculas/organismos, com componentes usados identificáveis e acesso direto às stories; ações locais informam seu resultado sem prometer backend.
#### Scenario: Limite de cobertura
- **WHEN** um componente requer serviço externo ou não pertence à composição
- **THEN** o catálogo continua acessível e a demonstração não afirma cobrir todos os componentes.

### Requirement: PLAY-02 — Tipografia observável
O sistema SHALL oferecer pelo menos três conjuntos selecionáveis de títulos/assinatura, corpo/controles e código, com fontes reais locais licenciadas e configuração pública.
#### Scenario: Comparar conjuntos
- **WHEN** um conjunto é selecionado
- **THEN** os nomes, papéis, tokens e amostras com acentos e código são apresentados e os componentes/portais aplicam as famílias sem fonte remota obrigatória.
#### Scenario: Compatibilidade
- **WHEN** um consumidor usa fontes próprias ou o conjunto legado
- **THEN** os tokens existentes e carregamento opcional de fonts.css continuam disponíveis.

### Requirement: PLAY-03 — Ações primárias Refy
O tema Refy SHALL usar texto branco sobre verde nos estados repouso, hover e active do botão primário, com contraste de pelo menos 4.5:1.
#### Scenario: Tema e identidade
- **WHEN** a pessoa usa Refy nos modos claro, escuro e editorial
- **THEN** o texto permanece claro e legível em cada estado; outras identidades mantêm seus próprios pares de cores.

### Requirement: PLAY-04 — Navegação de adoção
O catálogo SHALL priorizar fundamentos, componentes e exemplos, com links diretos ao playground e aos elementos alterados.
#### Scenario: Fixtures técnicas
- **WHEN** se abre o menu normal do Storybook
- **THEN** revisão visual e verificação técnica não aparecem; suas URLs continuam acessíveis aos testes e à consulta técnica.
