import { sampleArtwork } from "../../_demo/content";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MediaGallery, type PropertyMediaItem } from "./PropertyMedia";

const artwork = (width: number, height: number, color: string, _label: string) => sampleArtwork(color, width, height);

const landscape: PropertyMediaItem[] = [
  { src: artwork(1200, 800, "#b8dcf0", "Capa"), alt: "Capa de uma coleção de documentos" },
  { src: artwork(1200, 800, "#f1c99b", "Versão A"), alt: "Primeira composição editorial" },
  { src: artwork(1200, 800, "#c8d4f0", "Versão B"), alt: "Segunda composição editorial" },
];

function Frame({ children, width = 720 }: { children: React.ReactNode; width?: number }) {
  return <div style={{ width: `min(100%, ${width}px)` }}>{children}</div>;
}

const meta = {
  id: "components-molecules-propertymedia",
  title: "Componentes/Moléculas/MediaGallery",
  component: MediaGallery,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: { items: landscape },
} satisfies Meta<typeof MediaGallery>;
export default meta;
type Story = StoryObj<typeof MediaGallery>;

export const Paisagem: Story = { render: (args) => <Frame><MediaGallery {...args} /></Frame> };
export const Retrato: Story = { render: (args) => <Frame width={520}><MediaGallery {...args} items={[{ src: artwork(600, 1000, "#c7dded", "Foto vertical"), alt: "Composição em formato vertical" }]} fit="contain" /></Frame> };
export const Quadrada: Story = { render: (args) => <Frame width={560}><MediaGallery {...args} items={[{ src: artwork(800, 800, "#e0c3a5", "Foto quadrada"), alt: "Composição em formato quadrado" }]} aspectRatio="1 / 1" /></Frame> };
export const Panoramica: Story = { render: (args) => <Frame><MediaGallery {...args} items={[{ src: artwork(1800, 500, "#b7dbee", "Panorâmica"), alt: "Composição em formato panorâmico" }]} aspectRatio="16 / 7" fit="contain" /></Frame> };
export const Pequena: Story = { render: (args) => <Frame><MediaGallery {...args} items={[{ src: artwork(240, 160, "#d3dff0", "240 × 160"), alt: "Imagem em resolução pequena" }]} /></Frame> };

export const Carregando: Story = { render: (args) => <Frame><MediaGallery {...args} loading /></Frame> };

export const Erro: Story = {
  render: (args) => {
    const [retrying, setRetrying] = useState(false);
    return (
      <Frame>
        <MediaGallery
          {...args}
          items={retrying ? landscape : [{ src: "invalid://property-photo", alt: "Imagem do conteúdo" }]}
          errorMessage={retrying ? undefined : "A origem da foto não respondeu."}
          onRetry={() => setRetrying(true)}
        />
      </Frame>
    );
  },
};
