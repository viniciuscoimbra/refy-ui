import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { AppShell } from "./AppShell";
import { Card } from "../Card";
import { Button } from "../Button";
import { Command, type CommandItem } from "../Command";
import { HelpMenu } from "../HelpMenu";
import { NotificationBell, type NotificationItem } from "../NotificationBell";
import { UserMenu } from "../UserMenu";
import type { Workspace } from "../WorkspaceSwitcher";
import { Icons } from "../../_demo/icons";

const workspaces: Workspace[] = [
  { id: "horizonte", name: "Equipe Horizonte", role: "Equipe · Pro", initials: "HI" },
  { id: "coimbra", name: "Ana Silva", role: "Profissional", initials: "VC" },
  { id: "pampulha", name: "Equipe Sul", role: "Equipe · Inicial", initials: "PL" },
];

const notifications: NotificationItem[] = [
  { id: "n1", title: "Novo conteúdo salvo", description: "Marina salvou um conteúdo na coleção.", time: "há 5min", unread: true },
  { id: "n2", title: "Revisão solicitada", description: "Três horários foram enviados para confirmação.", time: "há 2h", unread: true },
  { id: "n3", title: "Novo integrante", description: "Ana Costa entrou na equipe.", time: "há 3d" },
];

const commands: CommandItem[] = [
  { id: "new", label: "Adicionar pessoa", group: "Ações", shortcut: "⌘N" },
  { id: "visit", label: "Ver próximas atividades", group: "Ações", shortcut: "⌘V" },
  { id: "property", label: "Coleção · Referências", group: "Conteúdos recentes", lead: "IT" },
];

const user = { name: "João Mendes", email: "joao@example.com", initials: "JM" };

const sidebar = {
  brand: "refy",
  defaultActiveId: "dashboard",
  workspaces,
  account: user,
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
};

const meta = {
  id: "components-organisms-appshell",
  title: "Componentes/Organismos/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen", refyFullPage: true },
  argTypes: {
    sidebar: { control: false },
    topbar: { control: false },
    contentMaxWidth: { control: "number" },
    children: { control: false },
  },
} satisfies Meta<typeof AppShell>;
export default meta;

type Story = StoryObj<typeof AppShell>;

/**
 * Layout completo do app autenticado — pura composição dos componentes reais:
 * Sidebar (WorkspaceSwitcher + UserMenu), Topbar (Breadcrumb + trigger do
 * Command), NotificationBell, HelpMenu e a paleta ⌘K funcional.
 */
export const Completo: Story = {
  render: () => {
    const [commandOpen, setCommandOpen] = useState(false);
    const [items, setItems] = useState(notifications);
    useEffect(() => {
      function onKey(e: KeyboardEvent) {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setCommandOpen(true);
        }
      }
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);
    return (
      <>
        <AppShell
          responsiveSidebar
          sidebar={sidebar}
          topbar={{
            crumbs: [{ label: "Equipe Horizonte", href: "#" }, { label: "Visão geral" }],
            onSearchClick: () => setCommandOpen(true),
            actions: (
              <>
                <NotificationBell
                  items={items}
                  onMarkAllRead={() => setItems((l) => l.map((n) => ({ ...n, unread: false })))}
                />
                <HelpMenu />
                <UserMenu user={user} compact />
              </>
            ),
          }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".16em", color: "var(--ink-3)", margin: "0 0 8px" }}>
            Organização · Equipe Horizonte
          </p>
          <h1 style={{ fontFamily: "var(--font-headline)", fontSize: 30, fontWeight: 700, letterSpacing: "-.025em", color: "var(--ink-1)", margin: "0 0 20px" }}>
            Visão geral
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 14, marginBottom: 20 }}>
            <Card><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--ink-3)" }}>Clientes ativos</div><div style={{ fontFamily: "var(--font-headline)", fontSize: 26, fontWeight: 600, color: "var(--ink-1)", marginTop: 6 }}>128</div></Card>
            <Card><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--ink-3)" }}>Atividades · semana</div><div style={{ fontFamily: "var(--font-headline)", fontSize: 26, fontWeight: 600, color: "var(--ink-1)", marginTop: 6 }}>24</div></Card>
            <Card><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--ink-3)" }}>Conteúdos ativos</div><div style={{ fontFamily: "var(--font-headline)", fontSize: 26, fontWeight: 600, color: "var(--ink-1)", marginTop: 6 }}>386</div></Card>
          </div>
          <Card>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600, color: "var(--ink-1)", fontSize: 14 }}>Novo cliente</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginTop: 2 }}>Adicione conteúdo e organize seus projetos.</div>
              </div>
              <Button variant="primary" leadingIcon={Icons.plus}>Adicionar pessoa</Button>
            </div>
          </Card>
        </AppShell>
        <Command open={commandOpen} onOpenChange={setCommandOpen} items={commands} />
      </>
    );
  },
};
