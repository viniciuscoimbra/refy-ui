import type { Preview } from "@storybook/react";
import { createElement } from "react";
import "../src/tokens/tokens.css";
import "../src/styles/fonts.css";
import "../src/styles/global.css";
import "./preview.css";

const preview: Preview = {
  initialGlobals: { theme: "light" },
  globalTypes: {
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
  decorators: [(Story, context) => createElement("div", { "data-theme": context.globals.theme ?? "light", className: `refy-canvas${context.parameters.refyFullPage ? " refy-canvas--page" : ""}` }, createElement(Story))],
};
export default preview;
