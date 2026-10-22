## Why
O playground cobre só parte das famílias. O mantenedor encontrou fundo incorreto, mudança de geometria ao trocar modo e estados pouco legíveis. Testes anteriores não cobriam a independência entre modo/aparência nem todas as famílias.

## What Changes
- Cobrir todas as famílias catalogadas em áreas navegáveis, com demonstração real sob o mesmo escopo de tema/fonte; montagem progressiva evita uma página congestionada.
- Refy claro com fundo branco; claro/escuro preservam geometria e tipografia. Aparências definem geometria de controles, grupos, superfícies e overlays.
- Corrigir contraste e hierarquia em seleções, chips, timeline e superfícies dos componentes descobertos pela ampliação.
- Evidência verificável de cobertura e testes de herança, geometria, contraste, teclado e responsividade. Entrega por links diretos.

## Capabilities
### New Capabilities
- `refy-complete-playground`: cobertura do catálogo e integridade da personalização.
### Modified Capabilities
- Nenhuma spec publicada é removida; contratos existentes de tokens, temas e foco permanecem.

## Impact
Fonte de tokens e CSS gerado, componentes consumidores dos tokens, skins demonstrativas, composição do playground, testes, documentação e referências visuais afetadas. Preservar exports e comportamento público. Sem migração automática de consumidores nem publicação npm.
