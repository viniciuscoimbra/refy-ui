## Context
Autorização direta de 22/10/2026: completar componentes e corrigir branco, geometria, contraste de select, timeline e chips. Pessoas avaliam componentes em telas de trabalho, com iluminação variável; claro e escuro são opções de leitura da mesma identidade.

## Decisions
- Reutilizar as demonstrações existentes das famílias, carregadas sob demanda dentro de áreas por finalidade. O renderer é infraestrutura exclusiva de demonstração, não novo organismo/export da biblioteca. Mesma árvore React/ThemeProvider, sem iframe que isole os tokens.
- Preservar as quatro composições de aplicação. Complementá-las com áreas de ações, formulários, navegação, feedback, dados, conteúdo e estruturas; selecionar família mantém a página compacta. Catálogo continua fonte única dos exemplos.
- Geometria migra para a base de tokens, sem overrides por modo. As skins controlam escala de raios e aliases públicos. Manter círculos e junções funcionais deliberadas.
- Branco solicitado pelo mantenedor prevalece sobre a recomendação genérica da skill de tingir todos os neutros. O modo editorial legado permanece identificável, sem alterar geometria.
- Reforçar superfícies/linhas sem aplicar bordas chamativas em todo elemento. Pares semânticos claros/escuros para chips; foco, hover e seleção precisam funcionar juntos.
- Select nativo mantém sua semântica; cor das options/optgroups explícita e color-scheme correto. Aparência exata do popup continua dependente do SO.

## Risks / Migration
Mudanças visuais nos consumidores sem overrides são intencionais. Não modificar APIs, não implantar clientes. Serviços externos usam demonstração local; o playground não valida integrações reais. Referências visuais só atualizadas após inspeção das diferenças esperadas.
