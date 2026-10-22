import { useGlobals } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { PlaygroundPage } from '../pages/PlaygroundPage/PlaygroundPage';
const meta = { title: 'Fundamentos/Playground', parameters: { refyFullPage: true } } satisfies Meta;
export default meta;
export const Aplicacao: StoryObj = { name: 'Aplicação completa', render: function Render() {
  const [globals, updateGlobals] = useGlobals();
  return <PlaygroundPage mode={globals.theme ?? 'light'} fonts={globals.fonts ?? 'humanist'} onModeChange={theme => updateGlobals({ theme })} onFontsChange={fonts => updateGlobals({ fonts })} />;
} };
