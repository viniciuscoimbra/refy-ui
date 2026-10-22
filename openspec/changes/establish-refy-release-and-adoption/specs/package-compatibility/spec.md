## ADDED Requirements

### Requirement: PKG-01 — Instalação e suporte comprovados

O tarball candidato SHALL instalar e compilar em projeto limpo com Node 22 e React/React DOM 18 e 19 nas versões registradas, verificando exports ESM, CSS, tipos e renderização; suporte declarado SHALL refletir os testes.

#### Scenario: PKG-01 resultado esperado
- **WHEN** o pacote final é instalado fora do workspace
- **THEN** um exemplo usa Button/Input com estilos e interação sem depender de src local ou dependências de desenvolvimento do Refy.

#### Scenario: PKG-01 falha ou limite
- **WHEN** React 18 falha
- **THEN** a release fica bloqueada até correção ou decisão de suporte e migração explícitas; React 19 aprovado não é evidência para React 18.

### Requirement: PKG-02 — Conteúdo e custo de distribuição

O pacote SHALL conter somente arquivos públicos necessários e avisos de licença; importações simples SHALL ser medidas para evitar dependências especializadas não utilizadas.

#### Scenario: PKG-02 resultado esperado
- **WHEN** o pacote é inspecionado
- **THEN** arquivos esperados existem e um consumidor de Button tem relatório de bundle que permite identificar bibliotecas de gráficos ou mapas indevidamente incluídas.

#### Scenario: PKG-02 falha ou limite
- **WHEN** há segredo, protótipo privado, asset de cliente ou crescimento além do orçamento aprovado sem justificativa
- **THEN** a distribuição é bloqueada.
