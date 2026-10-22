## 1. Entrada e escopo

- [ ] 1.1 Verificar gate do predecessor `establish-refy-governance`. Aceite/evidência: revisão e commit de conclusão do predecessor cobrem todos os seus requisitos; sem isso, não iniciar esta fase.
- [ ] 1.2 Conferir baseline, dependências e riscos antes de editar. Aceite/evidência: arquivos/callers/testes afetados e decisões abertas revisados; divergências atualizam os artefatos antes da implementação.

## 2. Implementação e verificação

- [ ] 2.1 Inventariar tokens e consumidores (TOK-01, TOK-03). Aceite/evidência: inventário por papel/tema lista consumidores e lacunas, incluindo os aliases usados pelo Button.
- [ ] 2.2 Estabelecer fonte estruturada e gerador mínimo (TOK-02). Aceite/evidência: validação de esquema e duas gerações idênticas; nenhuma nova dependência sem necessidade demonstrada.
- [ ] 2.3 Resolver contratos e preservar aliases públicos (TOK-01, TOK-03, THM-01). Aceite/evidência: nenhum alias obrigatório quebrado/cíclico nos três modos; teste negativo falha e de–para cobre mudanças.
- [ ] 2.4 Validar padrões e troca de tema (THM-01). Aceite/evidência: casos com atributo omitido, três temas e troca durante interação preservam estado.
- [ ] 2.5 Medir contraste e revisar foco e adaptação (THM-02, THM-03). Aceite/evidência: relatório registra pares, estados, reflow, texto ampliado, cores forçadas, fonte bloqueada e movimento reduzido.
- [ ] 2.6 Integrar verificações da fundação ao CI (TOK-01, TOK-02, TOK-03, THM-01, THM-02, THM-03). Aceite/evidência: casos positivos passam e fixtures inválidas são recusadas, com diagnóstico identificável.

## 3. Gate de saída

- [ ] 3.1 Revisar a rastreabilidade de TOK-01, TOK-02, TOK-03, THM-01, THM-02, THM-03. Aceite/evidência: todos os requisitos apontam para execução e resultados observáveis; exceções válidas não substituem obrigações de conformidade.
- [ ] 3.2 Registrar decisão do gate e sincronizar/arquivar apenas após conclusão. Aceite/evidência: testes aplicáveis passam, revisão aprova o escopo executado e specs de base refletem o comportamento real; enquanto houver tarefa necessária pendente, esta mudança não libera a próxima.

Todas as tarefas começam desmarcadas. Preencher evidências durante a execução; validação sintática dos artefatos não marca implementação como concluída.
