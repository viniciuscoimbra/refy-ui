import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
  id: "components-molecules-accordion",
  title: "Componentes/Moléculas/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items: [
      { id: "a", title: "Como organizar meus arquivos?", content: <p>Crie coleções e agrupe os arquivos por projeto. Você pode reorganizar os itens a qualquer momento.</p> },
      { id: "b", title: "Posso compartilhar uma coleção?", content: <p>Sim. Escolha as pessoas que terão acesso e defina se podem visualizar ou editar.</p> },
      { id: "c", title: "Como arquivar um projeto?", content: <p>Use a opção Arquivar nas configurações. Os arquivos continuam disponíveis para consulta e o projeto pode ser restaurado.</p> },
    ],
  },
  argTypes: {
    type: { control: "inline-radio", options: ["single", "multiple"] },
    items: { control: false },
    value: { control: false },
    defaultValue: { control: false },
    onChange: { control: false },
  },
} satisfies Meta<typeof Accordion>;
export default meta;

type Story = StoryObj<typeof Accordion>;

/** Um aberto por vez (padrão). */
export const AccordionSingle: Story = { name: "Single", args: { type: "single", defaultValue: ["a"] } };

/** Vários abertos simultaneamente. */
export const AccordionMultiple: Story = { name: "Múltiplo", args: { type: "multiple", defaultValue: ["a", "c"] } };

/** Com um item desabilitado. */
export const AccordionDesabilitado: Story = {
  name: "Com desabilitado",
  args: {
    items: [
      { id: "a", title: "Item ativo", content: <p>Conteúdo normal.</p> },
      { id: "b", title: "Item desabilitado", content: <p>Não abre.</p>, disabled: true },
    ],
  },
};
