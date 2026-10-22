## Why

O pacote local funciona, mas falta um processo versionado para distribuir, atualizar e adotar com segurança. A derivação GF precisa manter autoria e contrato sem herdar automaticamente a identidade visual Refy.

## What Changes

- Formalizar suporte, validação de instalação e orçamento de bundle baseado em medição.
- Definir SemVer, changelog, publicação rastreável e tratamento de falhas.
- Documentar migração e derivação, incluindo limites da integração GF.

- Validar adoção gradual de Dommus/Domuz, Plyngo e bioma com inventário de versões, patches, tokens, APIs e fluxos reais; substituir integrações locais somente após prova de compatibilidade.

Ordem 5/5. Predecessor: `standardize-refy-documentation` com gate aprovado e evidências.

Não objetivos: Publicar pacote nesta etapa de planejamento, obter credenciais em arquivos, hospedar produção automaticamente ou atualizar/migrar aplicações existentes (Dommus/Domuz, Plyngo, bioma e GF) sem escopo de execução específico.

## Capabilities

### New Capabilities

- `package-compatibility`: PKG-01, PKG-02.
- `release-workflow`: REL-01, REL-02.
- `downstream-adoption`: ADOPT-01, ADOPT-02, ADOPT-03, ADOPT-04.

### Modified Capabilities

Nenhuma spec de base existente. Estas são capacidades novas propostas, ainda não sincronizadas em openspec/specs.

## Impact

Manifesto, exports, pacote, exemplos de consumidor, changelog, documentação de adoção e futuro workflow de release. Publicação real depende do registry e da autorização de execução correspondente.

Gate de saída: todos os requisitos desta mudança com evidência, tarefas concluídas e revisão registrada; nenhuma pendência necessária ao aceite pode ser substituída por uma declaração de conclusão.
