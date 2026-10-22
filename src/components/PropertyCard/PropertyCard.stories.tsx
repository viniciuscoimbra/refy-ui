import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { ContentCard } from './PropertyCard';
import { sampleContent } from '../../_demo/content';
const meta = {
  id: 'components-organisms-propertycard', title: 'Componentes/Organismos/ContentCard', component: ContentCard, tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Card de conteúdo com mídia, título, metadados e ações. Use nas composições de coleção, lista ou revisão. PropertyCard permanece como nome compatível; prefira subtitle, value e valueSuffix.' } } },
  args: { ...sampleContent, detailsAction: <Button size="sm">Ver detalhes</Button> },
} satisfies Meta<typeof ContentCard>;
export default meta;
type Story = StoryObj<typeof ContentCard>;
export const Grid: Story = { render: args => <div style={{maxWidth:440}}><ContentCard {...args}/></div>, args:{layout:'grid',actions:false} };
export const Lista: Story = { args: { layout: 'list', actions: false } };
export const Deck: Story = { render: args => <div style={{maxWidth:600}}><ContentCard {...args}/></div>, args: { layout: 'deck', actions: {} } };
export const ConteudoExtremo: Story = { args: { layout: 'list', title: 'Um guia completo de colaboração com referências detalhadas para equipes que precisam organizar decisões, arquivos e responsabilidades', subtitle: 'Coleção compartilhada / Orientações de trabalho / Documentos revisados pela equipe de operações', value:'1.240 arquivos',valueSuffix:'em 18 coleções', facts:[...sampleContent.facts!,{label:'Atualização',value:'há 3 minutos'}],summary:'Este conteúdo extenso verifica a leitura, o alinhamento da mídia e o acesso às ações em uma composição real, incluindo valores longos e vários atributos.' } };
