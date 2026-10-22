import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DecisionDeck, type DecisionDeckItem } from './SwipeDeck';
import { sampleContent, sampleArtwork } from '../../_demo/content';
const items: DecisionDeckItem[] = [
 {id:'a',...sampleContent},
 {id:'b',...sampleContent,title:'Referências de interface',subtitle:'Coleção de design · atualizada ontem',media:[{src:sampleArtwork('#cbd4e4'),alt:'Prévia de referências de interface'}]},
 {id:'c',...sampleContent,title:'Organização de arquivos',subtitle:'Coleção da equipe · versão 2',media:[{src:sampleArtwork('#e5d5bd'),alt:'Prévia de organização de arquivos'}]},
];
const meta = {id:'components-organisms-swipedeck',title:'Componentes/Organismos/DecisionDeck',component:DecisionDeck,tags:['autodocs'],args:{items},parameters:{docs:{description:{component:'Fila de revisão de conteúdo. Botões são o caminho principal; gesto e teclado oferecem as mesmas decisões: descartar, salvar e selecionar. O consumidor decide o efeito de cada ação.'}}}} satisfies Meta<typeof DecisionDeck>;
export default meta;
type Story=StoryObj<typeof DecisionDeck>;
export const Gesto:Story={args:{gestureEnabled:true}};
export const Teclado:Story={args:{gestureEnabled:true}};
export const MovimentoReduzido:Story={args:{motion:'reduced'}};
export const FimDaFila:Story={render:()=>{const[index,setIndex]=useState(items.length);return <DecisionDeck items={items} index={index} onReset={()=>setIndex(0)}/>;}};
