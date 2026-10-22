# Refy UI — referência visual

## Overview
Referência: tokens, componentes e composição do commit c3f03fd. Recuperação autorizada em 22/10/2026, preservando o caráter Refy e corrigindo problemas existentes. UI compacta e legível para trabalho contínuo em sistemas, com claro, escuro e editorial; nenhum modo inventa a marca de um consumidor.

## Colors
Acento verde Refy, superfícies neutras e estados semânticos da fonte versionada em src/tokens/foundations.tokens.json. Não criar paleta paralela. Cores de texto/estado continuam cores; degradês pertencem a tokens de superfície de componente. Presets demonstrativos têm nomes descritivos e não representam clientes.

Correção explícita do mantenedor em 22/10/2026: o fundo Refy claro é branco (#ffffff). No escuro, superfície elevada se distingue do fundo. O modo editorial legado mantém sua paleta própria e é identificado no seletor; não define o fundo do Refy claro. Claro/escuro nunca alteram geometria, raios, espessuras ou fontes. A aparência controla esses atributos, com escala de raios consistente e exceções funcionais como avatares/indicadores circulares.

## Typography
Referência atual autorizada em 22/10/2026: Manrope em títulos e assinatura, Source Sans 3 em corpo/controles, Source Code Pro em código e valores. Alternativas selecionáveis: IBM Plex Sans/Mono e DM Sans/Geist Mono. O conjunto anterior Space Grotesk/Inter/JetBrains Mono permanece como legado para comparação, não como preferência atual. Fontes locais opcionais e papéis de tokens preservados. O playground demonstra a mudança na aplicação inteira, inclusive overlays.

A ação verde usa texto branco: --primary #087f5b, hover #066649, active #054f39. Acentos luminosos da marca e texto de ênfase no escuro mantêm papéis próprios. As identidades customizadas continuam podendo definir seus próprios pares.

## Elevation
Superfícies, bordas e sombras usam tokens. Estados precisam ser legíveis em todos os modos. Overlays preservam prioridade, foco e herança visual; efeito decorativo não corrige camada ou contraste.

## Components
Botões compactos, estados consistentes, campos com rótulos claros, cards com hierarquia e navegação previsível. Geometria, superfície, borda, sombra e estados configuráveis. Skins quadrada com borda espessa e arredondada com degradê demonstram a mesma API. Páginas têm layout responsivo, ações alcançáveis e conteúdo neutro; não copiam estilos internos dos componentes.

## Do's and Don'ts
- Conferir o conjunto e cada família, incluindo móvel, texto longo, modo escuro e estados.
- Explicar diferenças intencionais em relação à referência original.
- Usar exemplos neutros de projetos, arquivos, conteúdo, pessoas e tarefas.
- Não apresentar linguagem imobiliária herdada, laboratório técnico ou teste aprovado como substituto de acabamento visual.
- Não apagar APIs existentes para apenas renomear o catálogo.
