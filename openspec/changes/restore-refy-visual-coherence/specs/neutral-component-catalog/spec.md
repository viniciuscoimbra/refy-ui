## ADDED Requirements

### Requirement: CAT-01 — Vocabulário reutilizável
Títulos, descrições, dados de demonstração e textos padrão SHALL descrever a função de interface, sem depender de imóveis, corretores, análise SEO ou marcas de clientes. Componentes especializados SHALL receber nome funcional genérico e conteúdo configurável quando aplicável.

#### Scenario: CAT-01 esperado
- **WHEN** uma equipe consulta cards, galeria, ações, fila por gestos e agendamento
- **THEN** encontra exemplos de conteúdo, seleção, mídia e horários reutilizáveis, com função e limites claros.

#### Scenario: CAT-01 limite
- **WHEN** um nome exportado já existe em consumidores
- **THEN** ele continua disponível como alias documentado; a mudança visual não quebra imports silenciosamente.

### Requirement: CAT-02 — Composição e descoberta
O catálogo SHALL separar fundamentos, átomos, moléculas, organismos, páginas compostas e verificação; páginas SHALL usar componentes existentes sem virar novos organismos monolíticos.

#### Scenario: CAT-02 esperado
- **WHEN** um usuário procura um componente ou tela de exemplo
- **THEN** o título, descrição e grupo mostram responsabilidade e uso com vocabulário consistente.

#### Scenario: CAT-02 limite
- **WHEN** um exemplo é apenas laboratório técnico
- **THEN** ele fica no grupo de verificação e não substitui a apresentação visual principal do sistema.
