import type { Preview } from "@storybook/react";
import { createElement } from "react";
import "../src/tokens/tokens.css";
import "../src/styles/global.css";

const preview: Preview = {
  initialGlobals: { theme: "light" },
  globalTypes: {
    theme: { description: "Tema Refy", toolbar: { icon: "paintbrush", items: [
      { value: "light", title: "Refy · claro" },
      { value: "dark", title: "Refy · escuro" },
      { value: "editorial", title: "Refy · editorial" },
    ], dynamicTitle: true } },
  },
  parameters: { controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } } },
  decorators: [(Story, context) => createElement("div", { "data-theme": context.globals.theme ?? "light", style: { minHeight: "100vh", background: "var(--bg)", color: "var(--ink-1)", padding: 16, boxSizing: "border-box" } }, createElement(Story))],
};
export default preview;
