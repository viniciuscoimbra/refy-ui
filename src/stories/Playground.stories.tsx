import type { Meta, StoryObj } from '@storybook/react';
import { PlaygroundPage } from '../pages/PlaygroundPage/PlaygroundPage';
const meta = { title: 'Fundamentos/Playground', parameters: { refyFullPage: true } } satisfies Meta;
export default meta;
export const Aplicacao: StoryObj = { name: 'Aplicação completa', render: (_args, context) => <PlaygroundPage initialMode={context.globals.theme ?? 'light'} initialFonts={context.globals.fonts ?? 'humanist'} /> };
