## 1. Entrada e escopo

- [ ] 1.1 Verificar revisão e autorização de execução. Aceite/evidência: escopo desta primeira mudança e autorização de implementação identificados; este planejamento não é autorização de execução.
- [ ] 1.2 Conferir baseline, dependências e riscos antes de editar. Aceite/evidência: arquivos/callers/testes afetados e decisões abertas revisados; divergências atualizam os artefatos antes da implementação.

## 2. Implementação e verificação

- [ ] 2.1 Definir o fluxo de revisão e autorização (GOV-01). Aceite/evidência: guia e instruções de agente vinculam proposta, escopo, execução e limites; revisão distingue planejamento de implementação.
- [ ] 2.2 Definir registro de evidência e exceções (GOV-02, GOV-04). Aceite/evidência: modelo preenchido de exemplo identifica resultado, responsável e prazo; exemplo não é marcado como execução real.
- [ ] 2.3 Definir critérios de contribuição e responsabilidade (GOV-03, LIFE-01). Aceite/evidência: guia registra necessidade, composição antes de duplicação e papéis de mantenedor/revisor.
- [ ] 2.4 Definir estados e critérios de promoção (LIFE-02). Aceite/evidência: matriz especifica critérios aplicáveis e não trata stories ou build como certificação.
- [ ] 2.5 Validar o processo com exemplos de revisão (GOV-01, GOV-02, GOV-03, GOV-04, LIFE-01, LIFE-02). Aceite/evidência: ensaio documentado aceita um caso com evidência e recusa caso sem autorização ou com duplicação.

- [ ] 2.6 Integrar a validação dos artefatos ao fluxo de revisão/CI (GOV-01, GOV-02). Aceite/evidência: openspec validate --all --strict passa nos artefatos válidos e uma fixture de spec inválida é recusada; a validação estrutural não promove maturidade nem marca execução.

## 3. Gate de saída

- [ ] 3.1 Revisar a rastreabilidade de GOV-01, GOV-02, GOV-03, GOV-04, LIFE-01, LIFE-02. Aceite/evidência: todos os requisitos apontam para execução e resultados observáveis; exceções válidas não substituem obrigações de conformidade.
- [ ] 3.2 Registrar decisão do gate e sincronizar/arquivar apenas após conclusão. Aceite/evidência: testes aplicáveis passam, revisão aprova o escopo executado e specs de base refletem o comportamento real; enquanto houver tarefa necessária pendente, esta mudança não libera a próxima.

Todas as tarefas começam desmarcadas. Preencher evidências durante a execução; validação sintática dos artefatos não marca implementação como concluída.
