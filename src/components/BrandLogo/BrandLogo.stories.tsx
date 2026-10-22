import type { Meta, StoryObj } from "@storybook/react";
import { BrandLogo } from "./BrandLogo";
const meta = { id: "components-atoms-brandlogo",
  title: "Componentes/Átomos/BrandLogo", component: BrandLogo, tags: ["autodocs"], args: { size: "md" } } satisfies Meta<typeof BrandLogo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Assinatura: Story = {};
export const Simbolo: Story = { args: { markOnly: true } };
export const SemAnimacao: Story = { args: { animated: false } };
