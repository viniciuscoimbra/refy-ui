# Instanciar o Refy em uma aplicação

Importe `@refy/ui/tokens.css` e `@refy/ui/styles.css`, depois use `ThemeProvider`.
O provider aplica somente a base tipográfica, box sizing e foco dentro de seu
escopo. `global.css` continua disponível, mas é um reset **opt-in do documento**:
use somente quando a aplicação inteira adotar o Refy. Os tokens sem configuração
usam o modo claro. `fonts.css` é opcional e carrega arquivos locais licenciados, sem rede externa; sem ele, o app
pode hospedar as fontes ou usar os fallbacks locais.

```tsx
import '@refy/ui/tokens.css';
import '@refy/ui/styles.css';
import { ThemeProvider, Button, Input, Card } from '@refy/ui';
import type { RefyTheme } from '@refy/ui';

const identidade: RefyTheme = {
  name: 'minha-aplicacao',
  tokens: {
    '--font-body': 'system-ui, sans-serif',
    '--radius-default': '8px',
    '--button-height-md': '40px',
  },
  modes: {
    light: { '--primary': '#2163ad', '--on-primary': '#ffffff' },
    dark: { '--primary': '#a7cfff', '--on-primary': '#123050' },
  },
};

export function App() {
  return <ThemeProvider theme={identidade} mode="light">
    <Card><Input label="Nome" id="nome"/><Button>Salvar</Button></Card>
  </ThemeProvider>;
}
```

A API é aditiva. `theme` identifica o produto e define tokens comuns e por modo;
`mode` seleciona light/dark/editorial. Valores não personalizados usam a fundação
completa daquele modo. Providers aninhados herdam identidade/modo quando omitidos;
quando explícitos estabelecem um novo escopo. A troca não remonta os filhos.
Uma cor primária nova exige conferir também texto sobre ela, hover, active e foco.
Um preset parcial não é prova de contraste em todos os estados.

O Storybook `Fundacao/Temas por aplicacao` mostra dois presets sintéticos, com
Button, Input, Card e superfícies sobrepostas. Não representam marcas homologadas.

## Personalização de componentes existentes

Use primeiro tokens semânticos. Há hooks de componente quando a necessidade é
específica: `--button-height-md`, `--button-padding-md`, `--control-font-weight`,
`--field-height`, `--field-label-font`, `--field-label-transform`,
`--card-title-white-space`, `--dialog-radius` e os demais hooks inventariados.
Eles preservam seus fallbacks quando omitidos. Não use seletores gerados por CSS
Modules, não edite node_modules e não copie o componente para trocar a aparência.

Use props/composição quando a mudança é estrutural: `BrandLogo` aceita `children`
e `aria-label` para uma marca fornecida pela aplicação; Sidebar/Topbar aceitam
conteúdo de marca. Assets, fontes privadas, regras e páginas pertencem ao produto.
Mudança de comportamento exige contrato/teste, não um token para ocultar a diferença.

## Fonte e limites do formato

`src/tokens/foundations.tokens.json` é a fonte versionada. O subconjunto tipado
segue [DTCG 2025.10](https://www.designtokens.org/TR/2025.10/format/): color sRGB,
dimension px/rem, duration ms/s, number, fontFamily e cubicBezier. Expressões CSS
compostas e aliases existentes ficam em `$extensions.org.refy.css`; não são
apresentados como tokens DTCG tipados nem como exportação completa para Figma.
Cada entrada declara origem/finalidade CSS/estado. As variações são grupos de
modo do Refy, não uma extensão de modos padronizada pelo DTCG.

Execute `npm run tokens:build` após editar a fonte e `npm run tokens:check` para
validar aliases, valores tipados e equivalência da saída. `TOKEN_INVENTORY.md`
lista os consumidores e os valores/fallbacks por modo. O inventário é análise
estática: não substitui a medição dos valores computados no navegador.

## De–para da fundação

| Antes | Agora | Compatibilidade/validação |
|---|---|---|
| CSS editado manualmente | Fonte estruturada e CSS gerado | Nomes/export de tokens preservados |
| Claro/editorial sem papéis usados por Button | Todos os modos resolvem o mesmo conjunto de papéis | Hover/active precisam de testes e contraste por contexto |
| Sem tema explícito faltavam cores | Padrão claro completo | Mudança de default documentada; produto deve fixar seu modo |
| Tokens auxiliares consumidos ausentes | Aliases de espaço, tipografia, duração, sombra e foco | Sem remoção ou prazo de remoção de aliases nesta fase |
| CardHeader condicionado por seletor dark quebrado | Cabeçalho disponível nos três modos, quebra normal | Comportamento visual corrigido; nowrap ainda pode ser solicitado pelo hook |
| Seletor dark ancestral afetava escopos filhos | Estilos de componente usam valores do próprio escopo | Validar instâncias aninhadas e portais |
| Google Fonts carregadas sempre | fonts.css opcional | Pode mudar fallback visual até o consumidor carregar fontes |
| Produto precisa enum privado de BrandLogo | children + aria-label, assets do consumidor | Migração explícita do enum privado; não há assets privados no núcleo |
| Reset global obrigatório para tipografia/foco | Provider com base limitada ao escopo | global.css legado continua opt-in e afeta todo o documento |

Aparência anterior com tokens ausentes não é uma referência certificada. Ajustes
para leitura/foco devem apontar pares e evidência; não se declara WCAG global por
validar somente a paleta.

## Fontes e playground

Abra **Fundamentos → Playground → Aplicação completa**. Modo, aparência e conjunto de fontes são independentes. Navegue entre visão geral, trabalho (lista/quadro/revisão), biblioteca e configurações. “Usar no meu projeto” mostra os papéis tipográficos e uma configuração copiável que inclui todos os overrides da aparência escolhida. Dados são locais e reiniciam ao recarregar.

| Preset | Títulos e assinatura | Corpo e controles | Código e valores |
|---|---|---|---|
| `humanist` (referência inicial) | Manrope | Source Sans 3 | Source Code Pro |
| `plex` | IBM Plex Sans | IBM Plex Sans | IBM Plex Mono |
| `studio` | DM Sans | DM Sans | Geist Mono |
| `legacy` (comparação) | Space Grotesk | Inter | JetBrains Mono |

```tsx
import { ThemeProvider, fontSets } from '@refy/ui';
import '@refy/ui/tokens.css';
import '@refy/ui/styles.css';
import '@refy/ui/fonts.css'; // opcional; arquivos locais

const identity = { name: 'meu-produto', tokens: { ...fontSets.plex.tokens } };
<ThemeProvider theme={identity} mode="dark"><MinhaAplicacao /></ThemeProvider>
```

`--font-headline`, `--font-heading` e `--font-brand` recebem a família de títulos; `--font-body`, a de leitura; `--font-mono`, a de código. É possível fornecer outras famílias usando os mesmos tokens. Carregue os arquivos correspondentes na sua aplicação. Subconjuntos incluídos cobrem português latino com acentos precompostos; outros alfabetos/pesos/itálicos precisam de arquivos apropriados.

A troca da referência tipográfica e do verde de ação altera o visual de consumidores que não sobrescrevem esses tokens. O conjunto legado preserva as fontes anteriores. Overrides de identidade continuam prevalecendo. Nenhuma aplicação consumidora foi migrada.

As stories de revisão e verificação continuam disponíveis por URL para manutenção e testes, mas não aparecem no menu de adoção. Essa organização não altera o índice nem a execução da automação.
