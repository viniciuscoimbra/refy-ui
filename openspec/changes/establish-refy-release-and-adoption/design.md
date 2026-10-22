## Context

O pacote local funciona, mas falta um processo versionado para distribuir, atualizar e adotar com segurança. A derivação GF precisa manter autoria e contrato sem herdar automaticamente a identidade visual Refy.

Baseline observado: c3f03fd, biblioteca 0.4.0. As specs desta mudança descrevem resultados futuros, não evidência de que já existem.

## Goals / Non-Goals

Objetivo: Publicação compatibilidade e adoção.

Não objetivos: Publicar pacote nesta etapa de planejamento, obter credenciais em arquivos, hospedar produção automaticamente ou atualizar/migrar o repositório GF sem autorização específica.

## Decisions

1. A distribuição inicial continua ESM com CSS e tipos; CommonJS e novos frameworks não entram sem demanda verificada.
2. Testar os React 18 e 19 declarados ou aprovar redução explícita do suporte antes da release. Compatibilidade futura não será prometida por >=18 sem delimitação.
3. O registry e sua conta serão decididos antes da publicação; preferir autenticação temporária/confiável quando suportada, sem introduzir segredo no repo.
4. GF é uma derivação com tokens PCF próprios. Correções genéricas voltam por revisão; não existe sincronização automática dos repositórios.

Alternativa descartada: alterar toda a biblioteca de uma vez e promover o catálogo pelo build/quantidade de stories. Essa abordagem não permite atribuir comportamento e falhas a contratos verificados. Reutilizar helpers/componentes atuais antes de criar abstrações ou dependências.

## Risks / Trade-offs

Um pacote compilado pode não funcionar após instalação; testes precisam usar o tarball final em consumidor limpo. Uma falha após publicação não pode ser tratada sobrescrevendo versão já distribuída.

Dependência de execução: gate aprovado de `standardize-refy-documentation` com referência ao commit e revisão. Artefatos prontos não implementam o gate automaticamente.

## Migration Plan

Registrar versões, alterações e exemplos antes/depois. Preservar MIT e atribuição do código herdado, separar licenças de terceiros e alterações específicas de clientes. Reversão usa versão anterior compatível ou uma nova versão corretiva.

Validação: cumprir cenários positivos e negativos das specs e guardar resultados por requisito. Se houver falha, manter tarefa e gate abertos; reverter alteração isolada quando necessário, preservando a evidência da falha.

## Open Questions

Definir registry, mantenedores autorizados e ambiente para autenticação antes de REL-01. Aprovar os limites iniciais de bundle a partir da medição, não fixar números arbitrários neste plano.
