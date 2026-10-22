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

### Requirement: ADOPT-03 — Inventário e de–para dos consumidores existentes

A adoção SHALL ter matriz de Dommus/Domuz, Plyngo e bioma com versão/base, integração real, diferenças de API/tokens/estilos/branding, patches e fluxos críticos. Cada diferença terá destino: preservada, alias, extensão, correção genérica ou migração aprovada.

#### Scenario: ADOPT-03 resultado esperado
- **WHEN** um consumidor usa cópia local, fonte direta, patch ou tokens derivados
- **THEN** o inventário identifica isso e apresenta caminho de adoção e de–para verificável, distinguindo catálogo e aplicação real.

#### Scenario: ADOPT-03 falha ou limite
- **WHEN** o framework ou código atual não está acessível, ou um patch muda comportamento
- **THEN** a lacuna fica pendente com impacto e evidência necessária; não se presume compatibilidade React nem se remove a diferença silenciosamente.

### Requirement: ADOPT-04 — Prova por produto e atualização reversível

Uma adoção SHALL ser declarada validada somente após instalar o artefato final com versão fixada em piloto representativo de cada produto, verificar build/tipos quando aplicável, fluxos críticos, modos suportados, personalização e retorno à versão anterior. Nenhuma migração de aplicação é automática.

#### Scenario: ADOPT-04 resultado esperado
- **WHEN** o piloto de um produto usa a biblioteca distribuída com sua identidade e modos
- **THEN** o relatório registra versões, fluxos, testes de interação e revisão visual antes/depois, incluindo menus em Modal/Drawer, quebra de texto e rollback demonstrado.

#### Scenario: ADOPT-04 falha ou limite
- **WHEN** outro produto passou ou falta baseline, acesso ou teste de uma combinação
- **THEN** essa combinação permanece pendente; o resultado não é extrapolado nem a aplicação existente substituída.
