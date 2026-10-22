import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { HelpField } from "./HelpField";
import { Input } from "../Input";
import { Select } from "../Select";
import { Drawer } from "../Drawer";

/**
 * `HelpField` — padrão para campo técnico inevitável.
 */
const meta = {
  id: "components-molecules-helpfield",
  title: "Componentes/Moléculas/HelpField",
  component: HelpField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Form-row com rótulo simples + ícone de ajuda (`IconButton` sm). No hover/foco, `Tooltip` com o `helpText` e o link \"Saber mais\", que chama `onLearnMore` — o app abre a Drawer de ajuda (o componente traz só o gancho, nunca a Drawer). O campo (children) recebe `aria-describedby` ligado ao texto de ajuda.",
          "",
          "### Onde usar",
          "- Campo técnico inevitável que precisa de nome simples + explicação: alocação de capacidade (nunca expor `share_pct` cru — rótulo \"Alocação de capacidade\" + ajuda), chaves de API, limites de processamento.",
          "- Sempre que a explicação não cabe num `hint` de uma linha e existe doc mais longa (\"Saber mais\" → Drawer de ajuda do app).",
          "",
          "### Onde NÃO usar",
          "- Campo autoexplicativo (\"Nome\", \"E-mail\") — o `label`/`hint` do próprio Input basta.",
          "- Como tooltip genérico fora de formulário — use o átomo `Tooltip`.",
          "- Para validação/erro — erro é do campo (`error` do Input), não da ajuda.",
          "- Nunca usar o nome interno do banco como `label`: ontologia PT simples na UI.",
        ].join("\n"),
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: 380, paddingTop: 96 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { control: "text" },
    helpText: { control: "text" },
    learnMoreLabel: { control: "text" },
    side: { control: "radio", options: ["top", "bottom", "left", "right"] },
    children: { control: false },
    onLearnMore: { control: false, description: "Gancho do \"Saber mais\": o app abre a Drawer de ajuda." },
    htmlFor: { control: false },
  },
} satisfies Meta<typeof HelpField>;
export default meta;

type Story = StoryObj<typeof HelpField>;

/** Caso guia: alocação de capacidade — nome simples + ajuda, nunca `share_pct` cru. */
export const Playground: Story = {
  args: {
    label: "Alocação de capacidade",
    helpText:
      "Percentual reservado para a equipe responsável. O restante segue a configuração do projeto.",
    htmlFor: "share-input",
    onLearnMore: () => console.log("abrir Drawer de ajuda"),
    children: <Input id="share-input" placeholder="Ex.: 40" suffix="%" />,
  },
};

/** Sem `onLearnMore`: tooltip só com o texto (sem link). */
export const SemSaberMais: Story = {
  name: "Sem \"Saber mais\"",
  args: {
    label: "Fila de distribuição",
    helpText: "Ordem em que novas atividades são distribuídas entre responsáveis.",
    htmlFor: "queue-select",
    children: (
      <Select id="queue-select">
        <option value="rr">Rodízio</option>
        <option value="top">Melhor desempenho</option>
      </Select>
    ),
  },
};

/** Integração completa: "Saber mais" abre a Drawer de ajuda DO APP (a Drawer não é do HelpField). */
export const ComDrawerDoApp: Story = {
  name: "Com Drawer do app",
  args: {
    label: "Alocação de capacidade",
    helpText: "Percentual reservado para a equipe responsável.",
    children: <Input id="share-drawer" placeholder="Ex.: 40" suffix="%" />,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <HelpField {...args} onLearnMore={() => setOpen(true)} />
        <Drawer open={open} onOpenChange={setOpen} side="right" title="Alocação de capacidade">
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Conteúdo de ajuda longo do app: como as configurações distribuem atividades entre pessoa e
            equipe, com exemplos e regras.
          </p>
        </Drawer>
      </>
    );
  },
};
