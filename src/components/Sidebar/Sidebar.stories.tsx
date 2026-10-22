import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { Icons } from "../../_demo/icons";

const meta = {
  id: "components-organisms-sidebar",
  title: "Componentes/Organismos/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Composição viva: workspace é um `WorkspaceSwitcher`, CTA é `Button`, contadores são `Badge` e a conta é um `UserMenu` que abre para cima. Clicar num item muda o ativo (`defaultActiveId`). Colapsada, workspace/conta viram avatares que EXPANDEM a sidebar antes de abrir.",
      },
    },
  },
  argTypes: {
    defaultCollapsed: { control: "boolean" },
    defaultMode: { control: "inline-radio", options: ["expanded", "rail", "compact"] },
    defaultActiveId: { control: "text" },
    workspaces: { control: false },
    account: { control: false },
    cta: { control: false },
    groups: { control: false },
  },
  args: {
    brand: "refy",
    defaultActiveId: "dashboard",
    workspaces: [
      { id: "horizonte", name: "Equipe Horizonte", role: "Equipe · Pro", initials: "HI" },
      { id: "coimbra", name: "Ana Silva", role: "Profissional", initials: "VC" },
      { id: "pampulha", name: "Equipe Sul", role: "Equipe · Inicial", initials: "PL" },
    ],
    account: { name: "João Mendes", email: "joao@example.com", initials: "JM" },
    cta: { label: "Novo cliente", icon: Icons.plus },
    groups: [
      {
        section: "Trabalho",
        items: [
          { id: "dashboard", label: "Visão geral", icon: Icons.dashboard },
          { id: "projects", label: "Conteúdos", icon: Icons.projects },
          { id: "backlog", label: "Clientes", icon: Icons.backlog, badge: 12 },
          { id: "monitor", label: "Atividades", icon: Icons.monitor },
          { id: "competitors", label: "Pessoas", icon: Icons.competitors },
        ],
      },
      {
        section: "Sistema",
        items: [
          { id: "notifications", label: "Notificações", icon: Icons.bell, badge: 3 },
          { id: "settings", label: "Configurações", icon: Icons.settings },
        ],
      },
    ],
  },
} satisfies Meta<typeof Sidebar>;
export default meta;

type Story = StoryObj<typeof Sidebar>;

/** Workspace switcher + user menu funcionais — clique neles. */
export const Expandida: Story = {};

/** Rail (72px): ícones e labels curtos, com os mesmos itens e badges. */
export const Rail: Story = { args: { defaultMode: "rail" } };

/** Compacta (56px): apenas ícones; labels permanecem em nome acessível e tooltip. */
export const Compacta: Story = { args: { defaultMode: "compact" } };
