## Context
Referência original: c3f03fd. Estado contestado: 6e3e3c1. O mantenedor confirmou precisão visual, neutralidade de negócio e capacidade de mudar amplamente a aparência. O trabalho é recuperação e extensão do sistema existente, sem nova direção de marca.

## Goals / Non-Goals
Recuperar fontes e proporções Refy; corrigir cortes; neutralizar catálogo; tornar skins explícitas; entregar comparação real. Não certificar leitores de tela, publicar npm, migrar consumidores ou inventar identidade dos produtos.

## Decisions
- Fonte local no Storybook para comparação determinística; carregamento opcional no pacote, respeitando fontes próprias dos consumidores. Guardar licença das fontes.
- Preservar semântica de cores: primary continua cor; tokens button-primary-background e seus estados aceitam solid/gradient. Tokens de borda/raio/sombra têm fallbacks para manter consumidores.
- Nomes novos genéricos são exports aditivos; nomes antigos continuam aliases. Neutralizar também defaults e ARIA, não só stories.
- Reutilizar a navegação responsiva já presente em AppShell, habilitando-a nas páginas de exemplo; corrigir layout no proprietário adequado sem esconder overflow de ações.
- Capturar antes da mutação e comparar com o mesmo tamanho/modo. Revisar famílias em folhas de contato e casos problemáticos em detalhe; validar carregamento das demais stories. Novo baseline só após revisão.
- Mostrar fundamentos e exemplos de produto com hierarquia visual clara. Laboratórios técnicos ficam em Verificação.

## Risks / Trade-offs
Fontes reais alteram métricas e snapshots; diferenças serão revisadas. Exemplos novos não podem mascarar componente quebrado. Aliases mantêm imports enquanto títulos do catálogo ficam genéricos. A cobertura de aparência não equivale à certificação funcional integral de todas as famílias.

## Migration Plan
Sem remoção de exports existentes. Registrar de–para de nomes, tokens, cores/estados alterados e limites. Atualização de docs e do plano autorizada pelo pedido de 22/10/2026: leitores de tela passam para uma etapa posterior e não bloqueiam esta recuperação visual.

## Validation
Checks de tipos, biblioteca, OpenSpec, tokens/contraste, Storybook; smoke de todas as stories, revisão por família/tema/tamanho, teste das skins e de fluxos reais. Capturas anteriores não são regravadas. Leitores de tela seguem não executados.
