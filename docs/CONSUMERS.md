# Consumidores existentes — inventário inicial

Levantamento de leitura em 21/10/2026. Nenhum projeto foi migrado ou homologado.
Esta síntese não contém código privado, assets nem dados das aplicações.

| Projeto | Integração observada | De–para proposto | O que falta comprovar |
|---|---|---|---|
| Dommus/Domuz | A biblioteca local é a origem da extração pública 0.4.0; contém alterações e referências de produto | Pacote distribuído + preset/branding no consumidor; mapear cada diferença funcional antes de substituir | Inventário completo de imports/versão/patches, baseline de fluxos, piloto e rollback |
| Plyngo | Dependência file local de @refy/ui; Storybook resolve fonte; tema por variáveis e verificador de hooks/patch | Usar distribuição compilada; preservar tokens via mapeamento; promover hooks genéricos necessários. BrandLogo privado → conteúdo de marca no consumidor | Distinguir catálogo e app real; revisar cada diferença funcional (Drawer/foco/composer etc.), testar instalação e fluxos, remover necessidade de patch somente após equivalência |
| bioma | A IDE mantém cópia de tokens, com origem/licença anotadas; patches de construção leem esses tokens; a antiga UI React já saiu | Avaliar adoção do export CSS ou sincronização versionada dos tokens; não impor componentes React à IDE sem confirmar tecnologia/necessidade | Confirmar pipeline atual, de–para dos tokens, avisos/licença da cópia existente, baseline da IDE, piloto e rollback |
| Grupo Futuro/PCF | Derivação com identidade e tokens próprios | Preservar PCF; correções genéricas por revisão | Não presumir atualização automática nem voltar aos tokens visuais Refy |

## Critério para declarar compatibilidade

Por produto/versão/modo: inventário de imports/props/aliases, tema/branding,
patches visuais versus funcionais; plano aprovado; instalar artefato final com
versão fixada; verificar build/tipos quando aplicável, fluxos críticos, teclado,
foco, camadas, texto e revisão visual antes/depois; demonstrar retorno ao baseline.
A falta de acesso/evidência fica pendente. O teste de uma aplicação não homologa
outra, e um catálogo que usa a fonte não comprova consumo do pacote compilado.
