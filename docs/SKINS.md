# Aparência por aplicação

O mesmo componente pode ter formatos muito diferentes. A aparência fica em uma
configuração do `ThemeProvider`; estado, eventos e semântica continuam na mesma
implementação. As páginas são composições de átomos, moléculas e organismos.

Importe tokens e estilos no projeto. Para reproduzir a tipografia original,
importe também `@refy/ui/fonts.css`: as três famílias são locais e opcionais.
Quem usa uma fonte própria não precisa carregar essas fontes.

```tsx
import { ThemeProvider, Button, Card, Input } from '@refy/ui';
import type { RefyTheme } from '@refy/ui';
import '@refy/ui/tokens.css';
import '@refy/ui/styles.css';
import '@refy/ui/fonts.css';

const identidade: RefyTheme = {
  name: 'meu-produto',
  tokens: {
    '--font-body': 'Inter, sans-serif',
    '--control-radius': '0px',
    '--control-border-width': '3px',
    '--button-primary-border': 'var(--ink-1)',
    '--card-radius': '0px',
    '--card-border-width': '3px',
    '--field-border': 'var(--ink-1)',
  },
  modes: {
    light: { '--primary': '#f4cb4b', '--on-primary': '#27251c' },
    dark: { '--primary': '#f4cb4b', '--on-primary': '#27251c' },
  },
};

<ThemeProvider theme={identidade} mode="light">
  <Card>
    <Input label="Nome" />
    <Button variant="primary">Salvar</Button>
  </Card>
</ThemeProvider>;
```

Para um botão arredondado com degradê, troque os tokens na mesma configuração:

```tsx
{
  '--control-radius': '20px',
  '--control-border-width': '1px',
  '--button-primary-border': 'transparent',
  '--button-primary-background': 'linear-gradient(115deg, #5143a9, #b02e72)',
  '--button-primary-background-hover': 'linear-gradient(115deg, #40358b, #92245d)',
  '--button-primary-background-active': 'linear-gradient(115deg, #342970, #771b4b)',
  '--button-primary-foreground': '#ffffff',
  '--button-primary-foreground-hover': '#ffffff',
  '--button-primary-foreground-active': '#ffffff',
  '--card-radius': '24px',
  '--card-border-width': '1px',
  '--dialog-radius': '24px',
}
```

O exemplo completo, incluindo os três modos, está em
`src/stories/skins.ts` e em **Fundamentos → Refy → Personalizar**. Os presets
Contorno e Degradê são demonstrações de capacidade, não marcas aprovadas de clientes.

## Qual token usar

| Intenção | Tokens |
|---|---|
| Cor semântica da marca | `--primary`, `--primary-hover`, `--primary-container`, `--on-primary`, `--primary-ink` |
| Formato de botões e campos | `--control-radius`, `--control-border-width`, `--control-border-style` |
| Botão especificamente | `--button-radius`, `--button-border-width`, `--button-height-md`, `--button-padding-md` |
| Superfície de Button | `--button-primary-background`, `-background-hover`, `-background-active`, `-foreground`, `-foreground-hover`, `-foreground-active`, `-border`, `-shadow` |
| Variantes de Button | Prefixos `--button-secondary-*`, `--button-ghost-*`, `--button-danger-*` no explorador |
| Campos | `--field-background`, `--field-border`, `--field-border-width`, `--field-radius`, `--field-height`, `--field-shadow`, `--field-padding-inline` |
| Rótulos | `--field-label-font`, `--field-label-size`, `--field-label-transform`, `--field-label-tracking` |
| Cards | `--card-background`, `--card-radius`, `--card-border-width`, `--card-padding` |
| Modal | `--dialog-surface`, `--dialog-radius`, `--dialog-border-width`, `--dialog-border-color`, `--dialog-shadow` |
| Drawer | `--drawer-width`, `--drawer-radius` (painel inferior), `--drawer-surface`, `--drawer-body-padding` |
| Foco, carregamento e movimento | `--control-focus-outline`, `--control-focus-offset`, `--control-disabled-opacity`, `--duration-*`, `--ease-*` |

`--primary` continua sendo uma **cor**, usada também em checks e foco; não coloque
um degradê nela. Use o token de superfície do botão. Não é necessário duplicar
componentes ou criar classes globais para as três aparências demonstradas.

Os tokens comuns cobrem controles e superfícies compartilhados. Componentes
especializados possuem seus próprios hooks, listados no
[inventário de consumidores](TOKEN_INVENTORY.md). Um token de Button não promete
mudar automaticamente todas as bordas de calendário, gráfico ou tabela.
Valores opcionais com fallback continuam documentados no inventário e no CSS
consumidor; o explorador mostra os valores definidos na fonte do tema.

O papel `--good` de sucesso permanece independente de `--primary-container` também no modo escuro; trocar a marca não recolore o feedback de conclusão.

O tema resolve a aparência; o projeto escolhe conteúdo, dados, rotas e regras.
Ao criar uma identidade, confira seus pares de contraste e todos os estados.
Trocar apenas a cor padrão não define automaticamente hover, foco ou erro.

## Nomes genéricos e compatibilidade

| Nome anterior, ainda disponível | Nome recomendado | Contrato |
|---|---|---|
| `PropertyCard` | `ContentCard` | Mesma implementação; `subtitle`, `value`, `valueSuffix` substituem os nomes de domínio `address`, `price`, `priceSuffix`, que continuam aceitos. |
| `PropertyMedia` | `MediaGallery` | Mesma implementação de mídia. |
| `PropertyActionGroup` | `DecisionActions` | Evento `select` na API genérica; o contrato anterior mantém `visit`. Os rótulos são configuráveis. |
| `SwipeDeck` | `DecisionDeck` | Fila genérica; a API nova converte `visit` em `select`. Gesto opcional, botões e teclado preservados. |
| `VisitSchedulePicker` | `SchedulePicker` | Mesma seleção de agenda; disponibilidade e efeito da seleção são do consumidor. |

Não há remoção de exports nesta revisão. As URLs de stories anteriores são
mantidas com IDs explícitos. Integrações Dommus/Domuz, Plyngo, bioma e GF ainda
precisam ser ensaiadas nos próprios projetos; esta revisão não as homologa.
