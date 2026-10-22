import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { IntentComposer } from "./IntentComposer";
import type { IntentComposerState, IntentFilterGroup } from "./IntentComposer";
import type { VoiceRecorderState } from "../VoiceRecorder";

const filters: IntentFilterGroup[] = [
  {
    id: "operacao",
    label: "Operação",
    mode: "single",
    options: [{ value: "criar", label: "Criar" }, { value: "organizar", label: "Organizar" }],
  },
  {
    id: "tipos",
    label: "Formato",
    mode: "multiple",
    options: [
      { value: "documento", label: "Documento" },
      { value: "imagem", label: "Imagem" },
      { value: "video", label: "Vídeo" },
    ],
  },
  {
    id: "equipes",
    label: "Equipes",
    mode: "multiple",
    options: [
      { value: "design", label: "Design" },
      { value: "produto", label: "Produto" },
      { value: "operacoes", label: "Operações" },
    ],
  },
];

const initialText = "Quero organizar documentos e imagens de referência para um projeto colaborativo, com versões e responsáveis.";

const meta = {
  id: "components-organisms-intentcomposer",
  title: "Componentes/Organismos/IntentComposer",
  component: IntentComposer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Composer do pedido: operação acima em `Segmented`; formato e equipes em `Multiselect`; `Textarea` ao centro e exemplos/voz/envio no rodapé interno. Não contém anexo no v1.",
      },
    },
  },
  argTypes: {
    filters: { control: false }, filterValues: { control: false }, defaultFilterValues: { control: false },
    onFilterValuesChange: { action: "filters" }, value: { control: false }, defaultValue: { control: "text" },
    onChange: { action: "change" }, state: { control: "select", options: ["idle", "listening", "processing", "understood", "error"] },
    examples: { control: false }, voiceRecorderProps: { control: false }, onSubmit: { action: "submit" },
    onVoiceStart: { action: "voice" }, onEditRequest: { action: "edit-request" }, onEditDetails: { action: "edit-details" },
  },
} satisfies Meta<typeof IntentComposer>;
export default meta;

type Story = StoryObj<typeof IntentComposer>;

function ComposerDemo({ initialState }: { initialState: IntentComposerState }) {
  const [state, setState] = useState<IntentComposerState>(initialState);
  const [voiceState, setVoiceState] = useState<VoiceRecorderState>("listening");
  const [text, setText] = useState(initialText);
  const [filterValues, setFilterValues] = useState<Record<string, string[]>>({
    operacao: ["criar"], tipos: ["documento", "imagem"], equipes: ["design"],
  });
  const [message, setMessage] = useState(`Estado atual: ${initialState}.`);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function process() {
    setState("processing");
    setMessage("Pedido em processamento.");
    timer.current = window.setTimeout(() => {
      setState("understood");
      setMessage("Pedido entendido e pronto para revisão detalhada.");
    }, 1800);
  }

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 980 }}>
      <IntentComposer
        state={state}
        filters={filters}
        filterValues={filterValues}
        onFilterValuesChange={setFilterValues}
        value={text}
        onChange={setText}
        examples={[
          "Organizar referências para um novo projeto",
          "Preparar uma coleção para compartilhar",
        ]}
        understoodSummary="Você quer uma coleção compartilhada com documentos, imagens, versões e responsáveis definidos."
        onSubmit={process}
        onVoiceStart={() => { setVoiceState("listening"); setState("listening"); setMessage("Captura de voz aberta."); }}
        onEditRequest={() => { window.clearTimeout(timer.current); setState("idle"); setMessage("Pedido liberado para edição."); }}
        onEditDetails={() => setMessage("Edição detalhada solicitada para a próxima rota do wizard.")}
        voiceRecorderProps={{
          state: voiceState,
          duration: 24,
          level: 68,
          onPause: () => setVoiceState("paused"),
          onResume: () => setVoiceState("listening"),
          onCancel: () => { setState("idle"); setMessage("Voz cancelada; texto preservado."); },
          onFinish: () => { setState("idle"); setMessage("Voz concluída; texto pronto para correção."); },
        }}
      />
      <p role="status" style={{ margin: 0, color: "var(--ink-3)", fontSize: "var(--text-xs)" }}>{message}</p>
    </div>
  );
}

/** Filtros acima; exemplos e ações no rodapé interno; sem ícone de anexo. */
export const Idle: Story = { render: () => <ComposerDemo initialState="idle" /> };

/** VoiceRecorder integrado ao campo, mantendo o texto visível e editável ao concluir. */
export const Escutando: Story = { render: () => <ComposerDemo initialState="listening" /> };

/** Load explícito com ação “Quero editar” do lado direito. */
export const Processando: Story = { render: () => <ComposerDemo initialState="processing" /> };

/** Síntese em linguagem natural antes da edição detalhada por rota. */
export const Entendido: Story = { render: () => <ComposerDemo initialState="understood" /> };

/** Erro persistente usa critical e mantém o pedido disponível para correção. */
export const Erro: Story = { render: () => <ComposerDemo initialState="error" /> };
