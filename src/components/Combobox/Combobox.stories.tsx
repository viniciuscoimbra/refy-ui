import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Combobox, type ComboboxOption } from "./Combobox";

/**
 * `Combobox` — input com sugestões ancoradas. O popover compartilha a borda
 * e o fundo do input: uma única superfície que expande, sem gap.
 */
const meta = {
  id: "components-molecules-combobox",
  title: "Componentes/Moléculas/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Padrão ARIA 1.2 combobox: filtro com destaque do trecho digitado, seções por `group`, teclado completo (setas, Enter, Escape, Home/End) e `aria-activedescendant`. Controlado via `value`/`onChange` ou não-controlado via `defaultValue`; o texto também pode ser controlado (`inputValue`) para suggest assíncrono com `filter={false}`.",
          "",
          "Variante \"pessoas\": opções com `avatar` (foto/iniciais via átomo `Avatar`) e `description` (meta secundária, ex.: equipe). O valor selecionado também mostra o avatar no input.",
          "",
          "### Onde usar",
          "- Escolher UMA entidade numa lista pesquisável: página, domínio, conteúdo.",
          "- Variante com `avatar` + `description` sempre que a opção é uma pessoa/equipe: escolher responsável, transferir itens (origem/destino), atribuir responsável.",
          "",
          "### Onde NÃO usar",
          "- Múltipla seleção — use `Multiselect`.",
          "- Poucas opções fixas (≤ ~7) sem busca — use `Select` nativo.",
          "- Navegação/comando global — use `Command` (⌘K).",
          "- Nunca criar um \"combobox de pessoas\" paralelo: é esta variante (campos opcionais da opção), não outro componente.",
        ].join("\n"),
      },
    },
  },
  // Largura fixa para o campo não variar entre estados.
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    options: { control: false, description: "Opções sugeridas." },
    filter: { control: false, description: "`true` (padrão), função custom ou `false` (lista já filtrada)." },
    icon: { control: false, description: "Ícone à esquerda (padrão: lupa)." },
    clearable: { control: "boolean", description: "Botão de limpar quando há texto." },
    label: { control: "text" },
    placeholder: { control: "text" },
    emptyMessage: { control: "text" },
    error: { control: "text" },
    hint: { control: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
    onInputValueChange: { action: "input" },
    value: { control: false },
    defaultValue: { control: false },
    inputValue: { control: false },
  },
} satisfies Meta<typeof Combobox>;
export default meta;

type Story = StoryObj<typeof Combobox>;

const projects: ComboboxOption[] = [
  { value: "aurora", label: "aurora.example.com", lead: "RS", meta: "12 tarefas", group: "Sugestões" },
  { value: "horizonte", label: "horizonte.example.com", lead: "RS", meta: "8 tarefas", group: "Sugestões" },
  { value: "origem", label: "origem.example.com", lead: "RR", meta: "5 tarefas", group: "Sugestões" },
  { value: "atlas", label: "atlas.example.com", lead: "RD", meta: "4 tarefas", group: "Sugestões" },
  { value: "norte", label: "norte.example.com", lead: "RB", meta: "6 tarefas", group: "Sugestões" },
];

const pages: ComboboxOption[] = [
  { value: "/checkout/confirmacao", label: "/checkout/confirmacao", lead: "/", meta: "2.3k/mês", group: "Recentes" },
  { value: "/checkout/pix", label: "/checkout/pix", lead: "/", meta: "980/mês", group: "Recentes" },
  { value: "/planos", label: "/planos", lead: "/", meta: "5.1k/mês", group: "Mais visitadas" },
  { value: "/guias/primeiros-passos", label: "/guias/primeiros-passos", lead: "/", meta: "3.4k/mês", group: "Mais visitadas" },
  { value: "/precos", label: "/precos", lead: "/", meta: "1.9k/mês", group: "Mais visitadas" },
];

/** Playground — digite "aurora" para ver filtro + destaque. */
export const Playground: Story = {
  args: {
    label: "Projeto",
    placeholder: "Buscar projeto…",
    options: projects,
  },
};

/** Não-controlado com seleção inicial. */
export const Default: Story = {
  name: "Padrão · não-controlado",
  args: {
    label: "Projeto",
    placeholder: "Buscar projeto…",
    options: projects,
    defaultValue: "aurora",
  },
};

/** Controlado — a seleção vive no pai e aparece abaixo. */
export const Controlled: Story = {
  name: "Controlado",
  args: { label: "Projeto", options: projects },
  render: (args) => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Combobox
          {...args}
          value={selected}
          onChange={(option) => setSelected(option?.value ?? null)}
        />
        <code style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>
          selecionado: {selected ?? "—"}
        </code>
      </div>
    );
  },
};

/** Seções múltiplas via `group` — Recentes + Mais visitadas. */
export const Grouped: Story = {
  name: "Com seções",
  args: {
    label: "Buscar página",
    placeholder: "Digite um caminho…",
    options: pages,
  },
};

/** Nenhum resultado para a busca. */
export const Empty: Story = {
  name: "Sem resultados",
  args: {
    label: "Projeto",
    options: projects,
    inputValue: "zzz",
    emptyMessage: "Nenhum domínio encontrado",
  },
};

/** Estado de erro com mensagem. */
export const WithError: Story = {
  name: "Com erro",
  args: {
    label: "Projeto",
    options: projects,
    error: "Selecione um projeto válido.",
  },
};

const pessoas: ComboboxOption[] = [
  { value: "joana", label: "Joana Martins", avatar: { name: "Joana Martins" }, description: "Design · Equipe Aurora" },
  { value: "marcos", label: "Marcos Silva", avatar: { name: "Marcos Silva", color: "var(--legacy-ink-2)" }, description: "Produto · Equipe Aurora" },
  { value: "renata", label: "Renata Costa", avatar: { name: "Renata Costa" }, description: "Conteúdo · Equipe Horizonte" },
  { value: "paulo", label: "Paulo Braga", avatar: { name: "Paulo Braga", color: "var(--legacy-ink-3)" }, description: "Design · Equipe Horizonte" },
  { value: "ana", label: "Ana Lúcia Prado", avatar: { name: "Ana Lúcia Prado" }, description: "Operações · Equipe Origem" },
];

/**
 * Caso guia — transferir responsabilidade: responsável de ORIGEM (selecionado, avatar no
 * input) em cima; DESTINO embaixo. Cada opção mostra Avatar + nome + equipe.
 */
export const ComAvatar: Story = {
  name: "Com avatar (pessoas)",
  args: { options: pessoas },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Combobox
        label="Responsável de origem"
        placeholder="Buscar pessoa…"
        options={pessoas}
        defaultValue="joana"
      />
      <Combobox
        label="Responsável de destino"
        placeholder="Buscar pessoa…"
        options={pessoas.filter((c) => c.value !== "joana")}
      />
    </div>
  ),
};

/** Campo desabilitado. */
export const Disabled: Story = {
  args: {
    label: "Projeto",
    options: projects,
    disabled: true,
    placeholder: "Indisponível",
  },
};
