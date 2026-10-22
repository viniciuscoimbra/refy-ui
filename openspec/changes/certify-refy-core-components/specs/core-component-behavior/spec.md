## ADDED Requirements

### Requirement: CORE-01 — Contratos funcionais dos sete componentes

Button, Input, Menu, Modal, Drawer, Tooltip e ToastRegion SHALL ter contratos por estado e evento, cobrindo valores padrão, rótulos acessíveis e modos controlados/não controlados onde a API os suporta.

#### Scenario: CORE-01 resultado esperado
- **WHEN** um caso contratual é executado
- **THEN** ação, valor e callback ocorrem exatamente conforme a ficha da família.

#### Scenario: CORE-01 falha ou limite
- **WHEN** um estado não é aplicável a uma família
- **THEN** a matriz registra a justificativa em vez de fabricar uma prop ou marcá-lo como testado.

### Requirement: CORE-02 — Teclado foco e estados

Os sete componentes SHALL preservar os padrões de teclado e foco aplicáveis, incluindo bloqueio de ação desabilitada/carregando, associação de label/erro, navegação de Menu, foco inicial/retorno de diálogos e dispensa de ajuda.

#### Scenario: CORE-02 resultado esperado
- **WHEN** o usuário opera apenas pelo teclado
- **THEN** consegue concluir o fluxo com foco visível, sem ações duplicadas ou perda de valor do Input.

#### Scenario: CORE-02 falha ou limite
- **WHEN** um controle está desabilitado ou carregando
- **THEN** a ação bloqueada não é disparada; quando fecha um diálogo, o foco não retorna a um nó removido.

### Requirement: CORE-03 — Evidência de acessibilidade

A promoção dos sete SHALL registrar critérios WCAG 2.2 AA aplicáveis, verificações automáticas e manuais, incluindo NVDA/Chrome em Windows e VoiceOver/Safari em macOS com versões anotadas.

#### Scenario: CORE-03 resultado esperado
- **WHEN** um componente é promovido
- **THEN** o relatório inclui teclado, rótulos, mensagens, contraste e leitura assistiva nos cenários aplicáveis.

#### Scenario: CORE-03 falha ou limite
- **WHEN** falta acesso a uma plataforma ou há violação necessária ao aceite
- **THEN** o item fica pendente e a maturidade não é promovida por substituição com automação.

### Requirement: CORE-04 — Regressão visual e de interação

O CI SHALL exercitar os contratos automatizáveis dos sete em Chromium, Firefox e WebKit, nos três temas, com baselines visuais revisados para os estados aplicáveis em 375x812 e 1280x900.

#### Scenario: CORE-04 resultado esperado
- **WHEN** uma alteração aprovada é integrada
- **THEN** os testes e a comparação visual registram navegador, tema, tamanho e estado.

#### Scenario: CORE-04 falha ou limite
- **WHEN** uma diferença visual não foi revisada ou há falha funcional
- **THEN** o gate permanece reprovado; atualizar a imagem de referência sozinho não corrige o defeito.
