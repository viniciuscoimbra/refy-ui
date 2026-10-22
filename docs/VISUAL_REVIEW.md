# Revisão visual — 22/10/2026

Referência de identidade: c3f03fd. Estado anterior às correções: 6e3e3c1.
Revisor: Codex, agente; não é aprovação humana ou independente.
Mudança: [restore-refy-visual-coherence](../openspec/changes/restore-refy-visual-coherence/).

## Evidência

- 383 stories carregadas em 375/1280px; 92 famílias com amostras nos três modos e duas larguras.
- 1348 casos: zero erros de renderização e zero elementos fora da página no detector.
- 291 amostras de contraste de texto por axe: zero violações detectadas após as correções. O detector não certifica gradientes, todos os estados, gestos ou conformidade global.
- Inspeção visual das pranchas das famílias, com ampliação de telas, sobreposições e falhas. Não é comparação pixel a pixel de todas as variantes contra Figma.
- Capturas integrais antes/depois em [public/review](../public/review), com viewport inicial 375×900 ou 1280×900, Chromium e movimento reduzido.
- [Comparação das aparências nos três modos](../public/review/skins.png).
- [Relatório de casos](../public/review/catalog.json). Capturas individuais da varredura local: /tmp/refy-catalog-review; pranchas preservadas neste repositório.

## Correções verificadas

| Problema | Correção | Por que |
|---|---|---|
| Fontes declaradas, mas ausentes no catálogo | Inter, Space Grotesk e JetBrains Mono locais | Recuperar métricas e hierarquia originais sem depender da rede |
| Canvas e exemplos de largura fixa | Limites responsivos e espaçamento coerente | A página não pode crescer além do viewport |
| Tabela, calendário duplo, breadcrumb, gráfico donut | Rolagem limitada à tabela; meses e legenda reorganizados; trilha truncada com nome completo acessível | Preservar conteúdo e ações |
| Acordeão branco no modo escuro | Superfície semântica | Texto e superfície precisam mudar juntos |
| CodeBlock invertido com texto claro sobre fundo claro | Superfície escura estável, personalizável | Preservar a intenção original do bloco de código |
| Galeria presa em carregamento com imagem local/em cache | Resultado associado à origem; removido reset posterior ao carregamento | Não encobrir uma imagem já carregada |
| Seleção múltipla começava com o primeiro chip cortado | Rolagem inicial no começo; deslocamento ao acrescentar seleção | Preservar a leitura inicial e a visibilidade da mudança |
| CTA da Sidebar redefinia Button | Reuso dos estilos de Button | Mesmos tokens e estados em toda composição |
| Links, estados e textos secundários com baixo contraste | Papéis de texto existentes; removida opacidade adicional; ajuste de on-good editorial | Legibilidade sem trocar a identidade de marca |
| Sucesso escuro herdava a cor da marca | Separado o papel good da cor primária, preservando seu verde original | Trocar a marca não deve tornar o sucesso roxo ou amarelo |
| Marcação e indicador ativo brancos em cores de marca claras | Checkbox e Switch usam on-primary como fallback, mantendo overrides próprios | O contraste acompanha a cor escolhida pela aplicação |
| Nomes e exemplos de negócio | Aliases genéricos e conteúdo de colaboração | Reutilização sem impor domínio imobiliário/SEO |
| Personalização só por cor | Hooks de borda, geometria, superfícies e estados | Contorno quadrado e degradê arredondado com a mesma implementação |

## Amostras por família

A primeira story de cada família representa seu repouso ou estado inicial. Outras stories foram carregadas nas duas larguras; os testes de interação são separados. Menus, modais e drawers abertos têm regressão própria em tests/core.spec.ts e tests/visual.spec.ts.

| Família | Story amostrada | Modos / largura | Revisão |
|---|---|---|---|
| Átomos / Avatar | components-atoms-avatar--iniciais | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / Badge | components-atoms-badge--success | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / BrandLogo | components-atoms-brandlogo--assinatura | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / Button | components-atoms-button--primary | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / Checkbox | components-atoms-checkbox--checkbox-padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / Chip | components-atoms-chip--filtros-de-severidade | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / Divider | components-atoms-divider--horizontal | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / Fab | components-atoms-fab--fab-padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 1](../public/review/catalog/01.png) |
| Átomos / GoogleButton | components-atoms-googlebutton--continuar | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / IconButton | components-atoms-iconbutton--ghost-icon | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / Input | components-atoms-input--input-padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / Kbd | components-atoms-kbd--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / Otp | components-atoms-otp--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / Pagination | components-atoms-pagination--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / ProgressBar | components-atoms-progressbar--saudavel | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / RadioGroup | components-atoms-radiogroup--ciclo-de-cobranca | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 2](../public/review/catalog/02.png) |
| Átomos / Range | components-atoms-range--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / Segmented | components-atoms-segmented--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / Select | components-atoms-select--select-padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / Skeleton | components-atoms-skeleton--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / Slider | components-atoms-slider--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / StatusDot | components-atoms-statusdot--padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / Switch | components-atoms-switch--desligado | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / Textarea | components-atoms-textarea--textarea-padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 3](../public/review/catalog/03.png) |
| Átomos / ToggleGroup | components-atoms-togglegroup--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / Accordion | components-molecules-accordion--accordion-single | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / AvatarGroup | components-molecules-avatargroup--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / BillingCard | components-molecules-billingcard--completo | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / Breadcrumb | components-molecules-breadcrumb--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / ButtonGroup | components-molecules-buttongroup--horizontal | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / Calendar | components-molecules-calendar--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / Callout | components-molecules-callout--info | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 4](../public/review/catalog/04.png) |
| Moléculas / Card | components-molecules-card--simples | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / ChoiceCard | components-molecules-choicecard--escolha-de-tema | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / CodeBlock | components-molecules-codeblock--snippet | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / Combobox | components-molecules-combobox--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / ConnectorCard | components-molecules-connectorcard--conectado | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / DangerZone | components-molecules-dangerzone--excluir-conta | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / EmptyState | components-molecules-emptystate--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / FabMenu | components-molecules-fabmenu--fechado | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 5](../public/review/catalog/05.png) |
| Moléculas / FileUpload | components-molecules-fileupload--selecao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / HelpField | components-molecules-helpfield--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / HelpMenu | components-molecules-helpmenu--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / HoverCard | components-molecules-hovercard--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / Menu | components-molecules-menu--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / Multiselect | components-molecules-multiselect--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / NavCard | components-molecules-navcard--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / NotificationBell | components-molecules-notificationbell--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 6](../public/review/catalog/06.png) |
| Moléculas / PageHeader | components-molecules-pageheader--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / PersonCell | components-molecules-personcell--pessoa | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / PhoneInput | components-molecules-phoneinput--padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / PlanCard | components-molecules-plancard--padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / Popover | components-molecules-popover--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / PostalCodeInput | components-molecules-postalcodeinput--padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / DecisionActions | components-molecules-propertyactiongroup--tres-acoes | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / MediaGallery | components-molecules-propertymedia--paisagem | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 7](../public/review/catalog/07.png) |
| Moléculas / ScoreGauge | components-molecules-scoregauge--basico | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / SectionHeader | components-molecules-sectionheader--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / SettingRow | components-molecules-settingrow--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / SettingsSubnav | components-molecules-settingssubnav--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / Snackbar | components-molecules-snackbar--desfazer | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / SplitButton | components-molecules-splitbutton--secondary | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / Stat | components-molecules-stat--basico | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / StickyBar | components-molecules-stickybar--padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 8](../public/review/catalog/08.png) |
| Moléculas / StickyFooter | components-molecules-stickyfooter--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / TableOfContents | components-molecules-tableofcontents--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / Tabs | components-molecules-tabs--sublinhado | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / Toast | components-molecules-toast--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / Tooltip | components-molecules-tooltip--no-botao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / UsageMeter | components-molecules-usagemeter--saudavel | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / UserMenu | components-molecules-usermenu--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / VoiceRecorder | components-molecules-voicerecorder--idle | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 9](../public/review/catalog/09.png) |
| Moléculas / WizardStepper | components-molecules-wizardstepper--horizontal | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Moléculas / WorkspaceSwitcher | components-molecules-workspaceswitcher--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Organismos / ApprovalWorkbench | components-organisms-approvalworkbench--em-analise | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Organismos / AppShell | components-organisms-appshell--completo | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Organismos / Charts | components-organisms-charts--line | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Organismos / Command | components-organisms-command--aberta | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Organismos / Drawer | components-organisms-drawer--direita | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Organismos / EventTimeline | components-organisms-eventtimeline--cronologia | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 10](../public/review/catalog/10.png) |
| Organismos / GeoAreaPicker | components-organisms-geoareapicker--raio | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / GuidedTour | components-organisms-guidedtour--multi-etapas | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / IntentComposer | components-organisms-intentcomposer--idle | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / KanbanBoard | components-organisms-kanbanboard--padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / Matrix2x2 | components-organisms-matrix2x2--playground | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / Modal | components-organisms-modal--cancelar-plano | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / ContentCard | components-organisms-propertycard--grid | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / Sidebar | components-organisms-sidebar--expandida | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 11](../public/review/catalog/11.png) |
| Organismos / DecisionDeck | components-organisms-swipedeck--gesto | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 12](../public/review/catalog/12.png) |
| Organismos / Table | components-organisms-table--data-table | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 12](../public/review/catalog/12.png) |
| Organismos / Topbar | components-organisms-topbar--padrao | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 12](../public/review/catalog/12.png) |
| Organismos / SchedulePicker | components-organisms-visitschedulepicker--multi-dia | claro, escuro, editorial · 375/1280 | revista pelo agente · [prancha 12](../public/review/catalog/12.png) |

## Limites que continuam abertos

- Aprovação estética do mantenedor: a revisão do agente não substitui sua avaliação.
- Roteiro manual NVDA/VoiceOver adiado a pedido do mantenedor; não bloqueia esta recuperação visual nem equivale a certificação.
- Homologação e migração em Dommus/Domuz, Plyngo, bioma e GF não executadas.
- Google Maps, login externo e microfone real dependem do ambiente consumidor; nesta revisão entram os estados demonstráveis sem credenciais/hardware.
- Páginas são demonstrações com estado local. Rotas secundárias do painel indicam o ponto de integração; não prometem um backend ou um produto completo.
- Não há alegação de equivalência pixel a pixel com um Figma externo ou de estabilidade de todas as 92 famílias.
