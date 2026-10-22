## Why

O catálogo perdeu a tipografia de referência e ainda apresenta cortes responsivos, exemplos de negócios específicos e controles visuais insuficientes para personalização. A aprovação de testes de camadas foi comunicada sem uma revisão abrangente da experiência visual. O mantenedor solicitou em 22/10/2026 recuperar o Refy, revisar catálogo e telas reais e entregar antes/depois, com foco explícito em precisão visual e customização ampla.

## What Changes

- Restaurar as fontes e a linguagem visual da base c3f03fd, corrigindo problemas existentes de responsividade e composição em vez de reproduzi-los.
- Revisar todas as famílias do catálogo, estados representativos e páginas, com evidência visual identificável; neutralizar textos e títulos ligados a clientes e setores.
- Expor controles de aparência de componentes, incluindo borda, raio, fundo sólido/degradê, sombra e estados. Demonstrar Refy, geometria quadrada e geometria arredondada com a mesma implementação.
- Organizar navegação, fundamentos e comparação antes/depois no Storybook. Nomes públicos antigos permanecem como aliases quando houver nome genérico novo.
- Registrar a ordem atualizada autorizada: recuperação visual e documentação necessária avançam agora; leitores de tela ficam pendentes para certificação posterior.

## Capabilities

### New Capabilities
- `visual-reference-integrity`: referência original, fontes, responsividade, cobertura visual e antes/depois.
- `neutral-component-catalog`: vocabulário, composição e nomes genéricos com compatibilidade.
- `component-skin-contract`: personalização visual por tokens e preservação das interações.

### Modified Capabilities
Nenhuma obrigação de certificação assistiva é removida. Esta mudança tem gate visual próprio, sem promover famílias como estáveis.

## Impact

Storybook, fontes, CSS, componentes com texto fixo, exemplos, exports aditivos, tokens e testes. Consumidores Dommus/Domuz, Plyngo, bioma e GF não serão editados. Não inclui publicação npm, migração de aplicações nem promessa de equivalência Figma.

Predecessor técnico: fundação implementada; baseline anterior à correção 6e3e3c1. A autorização atual permite esta correção antes da conclusão assistiva da fase 3. Gate: catálogo inventariado e revisto, defeitos observados corrigidos, comparação explícita, skins funcionando e checks executados. Limites e tarefas ainda não executadas permanecem visíveis.
