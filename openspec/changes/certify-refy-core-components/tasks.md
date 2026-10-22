## 1. Entrada e escopo

- [ ] 1.1 Verificar gate do predecessor `standardize-refy-foundations`. Aceite/evidência: revisão e commit de conclusão do predecessor cobrem todos os seus requisitos; sem isso, não iniciar esta fase.
- [ ] 1.2 Conferir baseline, dependências e riscos antes de editar. Aceite/evidência: arquivos/callers/testes afetados e decisões abertas revisados; divergências atualizam os artefatos antes da implementação.

## 2. Implementação e verificação

- [ ] 2.1 Escrever fichas funcionais dos sete (CORE-01). Aceite/evidência: matriz identifica estados e eventos aplicáveis, padrões nativos e justificativas de não aplicável.
- [ ] 2.2 Revisar e corrigir teclado e foco em helpers e consumidores (CORE-02). Aceite/evidência: testes dos sete cobrem sucesso, bloqueios, retorno de foco e valor preservado; busca de consumidores registrada.
- [ ] 2.3 Revisar portação de correções genéricas de camadas (OVL-01, OVL-02). Aceite/evidência: comparação de API e teste de prioridade não inclui tokens PCF; nenhuma portação presumida como homologada.
- [ ] 2.4 Executar a matriz de colisão e Escape (OVL-01, OVL-02). Aceite/evidência: 48 combinações por engine: Modal/Drawer x três temas x duas larguras x aviso antes/depois x tooltip local/portal; screenshots e hit-testing com limites da técnica registrados.
- [ ] 2.5 Resolver escopo acessível dos avisos acionáveis (OVL-03). Aceite/evidência: decisão de montagem/foco registrada antes da alteração; teste manual confirma ação e dispensa sem acesso ao fundo.
- [ ] 2.6 Integrar testes de interação e regressão visual (CORE-01, CORE-02, CORE-04, OVL-01, OVL-02). Aceite/evidência: CI executa três engines e diferenças exigem revisão registrada.
- [ ] 2.7 Validar NVDA/Chrome no Windows (CORE-03, OVL-03). Aceite/evidência: versões e cenários aplicáveis registrados, incluindo anúncio/ação de aviso durante modalidade; falta de acesso permanece pendente.
- [ ] 2.8 Validar VoiceOver/Safari no macOS (CORE-03, OVL-03). Aceite/evidência: versões e cenários aplicáveis registrados, incluindo anúncio/ação de aviso durante modalidade; WebKit automatizado não substitui Safari real.

- [ ] 2.9 Reexecutar contratos essenciais com personalização (BRAND-02, BRAND-03, CORE-02, OVL-01, OVL-02). Aceite/evidência: matriz registra presets e modos exercitados, tipografia/densidade distintas e camadas aninhadas; eventos, foco, quebra de texto e semântica permanecem corretos; não extrapolar aos produtos ainda não homologados.

## 3. Gate de saída

- [ ] 3.1 Revisar a rastreabilidade de CORE-01, CORE-02, CORE-03, CORE-04, OVL-01, OVL-02, OVL-03. Aceite/evidência: todos os requisitos apontam para execução e resultados observáveis; exceções válidas não substituem obrigações de conformidade.
- [ ] 3.2 Registrar decisão do gate e sincronizar/arquivar apenas após conclusão. Aceite/evidência: testes aplicáveis passam, revisão aprova o escopo executado e specs de base refletem o comportamento real; enquanto houver tarefa necessária pendente, esta mudança não libera a próxima.

Todas as tarefas começam desmarcadas. Preencher evidências durante a execução; validação sintática dos artefatos não marca implementação como concluída.
