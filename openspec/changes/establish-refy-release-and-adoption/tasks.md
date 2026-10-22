## 1. Entrada e escopo

- [ ] 1.1 Verificar gate do predecessor `standardize-refy-documentation`. Aceite/evidência: revisão e commit de conclusão do predecessor cobrem todos os seus requisitos; sem isso, não iniciar esta fase.
- [ ] 1.2 Conferir baseline, dependências e riscos antes de editar. Aceite/evidência: arquivos/callers/testes afetados e decisões abertas revisados; divergências atualizam os artefatos antes da implementação.

## 2. Implementação e verificação

- [ ] 2.1 Definir matriz de suporte e testar consumidores limpos (PKG-01). Aceite/evidência: tarball instala em Node 22 com React/React DOM 18 e 19, tipos, três CSS e interação; versões e limites anotados.
- [ ] 2.2 Inspecionar distribuição e medir bundle (PKG-02). Aceite/evidência: lista de arquivos e relatório do consumidor mínimo; orçamento proposto e aprovado após medição.
- [ ] 2.3 Definir política de versões changelog e migração (REL-01, ADOPT-02). Aceite/evidência: guia cobre série 0.x, quebras de API/tokens, tag, revisão e retorno ao consumidor anterior.
- [ ] 2.4 Preparar automação de release com simulação (REL-01, REL-02). Aceite/evidência: dry-run produz artefato rastreável e reconcilia falha simulada sem publicação nem segredo persistente.
- [ ] 2.5 Documentar adoção e derivação GF (ADOPT-01, ADOPT-02). Aceite/evidência: guia diferencia contrato e identidade, preserva MIT e demonstra migração/revisão com exemplo genérico.
- [ ] 2.6 Revisar segurança e autorizar candidato (REL-02, PKG-01, PKG-02). Aceite/evidência: auditoria registra execução/desenvolvimento, exceções válidas e gates; nenhuma credencial incluída.

- [ ] 2.7 Completar matriz e plano de migração por produto (ADOPT-03). Aceite/evidência: baseline datado, fluxos, APIs, patches e de–para de Dommus/Domuz, Plyngo e bioma; responsáveis e pendências explícitos, sem publicar fonte privada.
- [ ] 2.8 Executar piloto Dommus/Domuz (ADOPT-04). Aceite/evidência: escopo autorizado, instalação do tarball, identidade/modos, fluxos e rollback demonstrados; relatório antes/depois e limitações; sem acesso permanece pendente.
- [ ] 2.9 Executar piloto Plyngo (ADOPT-04). Aceite/evidência: mesmo protocolo, incluindo substituição de hooks/patches e distinção entre Storybook e aplicação real; sem prova não homologar.
- [ ] 2.10 Executar piloto bioma (ADOPT-04). Aceite/evidência: confirmar tecnologia e consumo atual, escolher integração adequada e aplicar protocolo de fluxos, identidade/modos e rollback; sem prova não homologar.
- [ ] 2.11 Publicar somente após decisão de registry e autorização (REL-01). Aceite/evidência: registry/conta e autorização explícitos, pilotos 2.8–2.9 concluídos e matriz ADOPT-04 validada, CI aprovado, versão/artefato verificados após publicação; se indisponível fica pendente.

## 3. Gate de saída

- [ ] 3.1 Revisar a rastreabilidade de ADOPT-03, ADOPT-04, PKG-01, PKG-02, REL-01, REL-02, ADOPT-01, ADOPT-02. Aceite/evidência: todos os requisitos apontam para execução e resultados observáveis; exceções válidas não substituem obrigações de conformidade.
- [ ] 3.2 Registrar decisão do gate e sincronizar/arquivar apenas após conclusão. Aceite/evidência: testes aplicáveis passam, revisão aprova o escopo executado e specs de base refletem o comportamento real; enquanto houver tarefa necessária pendente, esta mudança não libera a próxima.

Todas as tarefas começam desmarcadas. Preencher evidências durante a execução; validação sintática dos artefatos não marca implementação como concluída.
