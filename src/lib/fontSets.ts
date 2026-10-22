import type { ThemeTokens } from './ThemeProvider';

function families(heading: string, body: string, mono: string): ThemeTokens {
  const title = `"${heading}", system-ui, sans-serif`;
  return { '--font-brand': title, '--font-heading': title, '--font-headline': title,
    '--font-body': `"${body}", system-ui, sans-serif`, '--font-mono': `"${mono}", ui-monospace, monospace` };
}

/** Optional local fonts: import '@refy/ui/fonts.css', then spread tokens into your theme. */
export const fontSets = {
  humanist: { label: 'Manrope + Source', heading: 'Manrope', body: 'Source Sans 3', mono: 'Source Code Pro',
    description: 'Títulos geométricos, leitura humanista e código com caracteres bem distintos.',
    tokens: families('Manrope', 'Source Sans 3', 'Source Code Pro') },
  plex: { label: 'IBM Plex', heading: 'IBM Plex Sans', body: 'IBM Plex Sans', mono: 'IBM Plex Mono',
    description: 'Uma família coesa. Peso e tamanho criam a hierarquia entre títulos e controles.',
    tokens: families('IBM Plex Sans', 'IBM Plex Sans', 'IBM Plex Mono') },
  studio: { label: 'DM Sans + Geist', heading: 'DM Sans', body: 'DM Sans', mono: 'Geist Mono',
    description: 'Interface sóbria e compacta, com uma mono dedicada à leitura de código.',
    tokens: families('DM Sans', 'DM Sans', 'Geist Mono') },
  legacy: { label: 'Original · comparação', heading: 'Space Grotesk', body: 'Inter', mono: 'JetBrains Mono',
    description: 'Conjunto anterior, preservado para comparação e compatibilidade.',
    tokens: families('Space Grotesk', 'Inter', 'JetBrains Mono') },
};
export type FontSet = keyof typeof fontSets;
