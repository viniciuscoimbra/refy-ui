import type { Preview } from "@storybook/react";
import { createElement } from "react";
import "../src/tokens/tokens.css";
import "../src/styles/fonts.css";
import "../src/styles/global.css";
import "./preview.css";
import { ThemeProvider } from "../src/lib/ThemeProvider";
import { fontSets, type FontSet } from "../src/lib/fontSets";

const preview: Preview = {
  initialGlobals: { theme: "light", fonts: "humanist" },
  globalTypes: {
    fonts: { description: "Conjunto de fontes", toolbar: { icon: "paragraph", items: Object.entries(fontSets).map(([value, set]) => ({ value, title: set.label })), dynamicTitle: true } },
    theme: { description: "Tema Refy", toolbar: { icon: "paintbrush", items: [
      { value: "light", title: "Refy · claro" },
      { value: "dark", title: "Refy · escuro" },
      { value: "editorial", title: "Refy · editorial" },
    ], dynamicTitle: true } },
  },
  parameters: {
    layout: "fullscreen",
    options: { storySort: { order: ["Fundamentos", "Componentes", ["Átomos", "Moléculas", "Organismos"], "Exemplos", "Revisão", "Verificacao"] } },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  decorators: [(Story, context) => createElement(ThemeProvider, { mode: context.globals.theme ?? "light", theme: { name: "refy", tokens: fontSets[(context.globals.fonts as FontSet) || "humanist"].tokens }, className: `refy-canvas${context.parameters.refyFullPage ? " refy-canvas--page" : ""}` }, createElement(Story))],
};
export default preview;
