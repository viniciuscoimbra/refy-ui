import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

/**
 * `Breadcrumb` — trilha de navegação mono uppercase.
 */
const meta = {
  id: "components-molecules-breadcrumb",
  title: "Componentes/Moléculas/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Trilha em uma linha com raiz icônica, links truncados e miolo colapsado em Menu navegável. O último item usa `aria-current=\"page\"`; separador é customizável.",
      },
    },
  },
  argTypes: {
    items: { control: false },
    separator: { control: "text" },
  },
} satisfies Meta<typeof Breadcrumb>;
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

/** Três níveis com links. */
export const Playground: Story = {
  args: {
    items: [
      { label: "Projetos", href: "#projetos" },
      { label: "refy.com.br", href: "#refy" },
      { label: "Documentação" },
    ],
  },
};

/** Separador customizado. */
export const SeparadorSeta: Story = {
  name: "Separador ›",
  args: {
    separator: "›",
    items: [
      { label: "Dashboard", href: "#dash" },
      { label: "Análises", href: "#analises" },
      { label: "84 páginas" },
    ],
  },
};

export const SeteNiveis: Story = {
  name: "7 níveis · colapso navegável",
  args: {
    root: { label: "Início", href: "#inicio" },
    items: [
      { label: "Workspaces", href: "#workspaces" },
      { label: "Equipe Horizonte", href: "#equipe" },
      { label: "Clientes", href: "#clientes" },
      { label: "Ana Silva", href: "#cliente" },
      { label: "Buscas", href: "#buscas" },
      { label: "Conteúdos sugeridos", href: "#conteudos" },
      { label: "Guia de identidade" },
    ],
  },
};

export const TermoLongo: Story = {
  name: "Label longo · truncamento",
  args: {
    root: { label: "Início", href: "#inicio" },
    items: [
      { label: "Conteúdos", href: "#conteudos" },
      { label: "Guia completo de identidade visual e recomendações para publicar novos conteúdos" },
    ],
  },
  render: (args) => <div style={{ width: "100%", maxWidth: 420 }}><Breadcrumb {...args} /></div>,
};
