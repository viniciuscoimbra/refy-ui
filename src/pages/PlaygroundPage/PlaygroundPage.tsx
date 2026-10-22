import { useState } from 'react';
import {
  AppShell, Avatar, AvatarGroup, Badge, Button, Card, CardHeader, Callout,
  Checkbox, CodeBlock, Command, ContentCard, DecisionActions, Drawer,
  EventTimeline, Input, KanbanBoard, LineChart, Menu, Modal, PageHeader,
  PersonCell, ProgressBar, RadioGroup, SchedulePicker, SectionHeader,
  Select, SettingRow, SettingRowGroup, Stat, StatGroup, Table, Tabs, Textarea,
  ThemeProvider, ToastRegion, Tooltip, UsageMeter, ApprovalWorkbench,
  ChoiceCard, ChoiceCardGroup, Accordion, IconButton,
} from '../../index';
import type { ThemeMode, FontSet, DecisionAction } from '../../index';
import { fontSets } from '../../lib/fontSets';
import { skins } from '../../stories/skins';
import { TypographySample } from '../../stories/TypographySample';
import { sampleArtwork } from '../../_demo/content';
import { Icons } from '../../_demo/icons';
import styles from './PlaygroundPage.module.css';
import { ComponentArea } from './ComponentArea';
import { componentAreas, componentCatalog, type ComponentAreaId } from './catalog';

const workspaceAreas = { overview: 'Visão geral', work: 'Trabalho', library: 'Biblioteca', settings: 'Configurações' };
const areas = { ...workspaceAreas, ...componentAreas };
type Area = keyof typeof areas;
const initialProjects = [
  { id: 'aurora', name: 'Projeto Aurora', owner: 'Ana Lima', status: 'Em andamento', progress: 72 },
  { id: 'horizonte', name: 'Projeto Horizonte', owner: 'Bruno Reis', status: 'Em revisão', progress: 90 },
  { id: 'origem', name: 'Projeto Origem', owner: 'Clara Dias', status: 'Planejado', progress: 18 },
];
const components = [
  ['AppShell', 'components-organisms-appshell--completo'],
  ['Table', 'components-organisms-table--data-table'],
  ['Charts', 'components-organisms-charts--line'],
  ['KanbanBoard', 'components-organisms-kanbanboard--padrao'],
  ['ApprovalWorkbench', 'components-organisms-approvalworkbench--em-analise'],
  ['EventTimeline', 'components-organisms-eventtimeline--cronologia'],
  ['ContentCard / MediaGallery', 'components-organisms-propertycard--grid'],
  ['SchedulePicker', 'components-organisms-visitschedulepicker--multi-dia'],
  ['Modal', 'components-organisms-modal--cancelar-plano'],
  ['Drawer', 'components-organisms-drawer--direita'],
  ['Card', 'components-molecules-card--simples'],
  ['SettingRow', 'components-molecules-settingrow--playground'],
  ['PersonCell', 'components-molecules-personcell--pessoa'],
  ['Stat', 'components-molecules-stat--basico'],
  ['UsageMeter', 'components-molecules-usagemeter--saudavel'],
  ['DecisionActions', 'components-molecules-propertyactiongroup--tres-acoes'],
  ['Menu', 'components-molecules-menu--playground'],
  ['Button', 'components-atoms-button--todas-variantes'],
];

/** Demo page composition, deliberately not exported as a design-system organism. */
export function PlaygroundPage({ mode, fonts, onModeChange: setMode, onFontsChange: setFonts }: { mode: ThemeMode; fonts: FontSet; onModeChange: (mode: ThemeMode) => void; onFontsChange: (fonts: FontSet) => void }) {
  const [skin, setSkin] = useState<keyof typeof skins>('refy');
  const [area, setArea] = useState<Area>('overview');
  const [selectedComponent, setSelectedComponent] = useState('');
  const [workView, setWorkView] = useState('list');
  const [projects, setProjects] = useState(initialProjects);
  const [name, setName] = useState('');
  const [creating, setCreating] = useState(false);
  const [configuration, setConfiguration] = useState(false);
  const [search, setSearch] = useState(false);
  const [notice, setNotice] = useState('');
  const [menu, setMenu] = useState(false);
  const [visibility, setVisibility] = useState('Equipe');
  const [workspace, setWorkspace] = useState('Estúdio Aurora');
  const [description, setDescription] = useState('Um espaço para criar, revisar e compartilhar projetos.');
  const [notifications, setNotifications] = useState(true);
  const [summary, setSummary] = useState(true);
  const [frequency, setFrequency] = useState('weekly');
  const [decision, setDecision] = useState<DecisionAction>();
  const [review, setReview] = useState('content');
  const [approved, setApproved] = useState<string[]>([]);
  const [availability, setAvailability] = useState<Record<string, string[]>>({});
  const identity = { ...skins[skin].theme, name: skins[skin].theme?.name ?? 'refy', tokens: { ...skins[skin].theme?.tokens, ...fontSets[fonts].tokens } };
  const snippet = `import { ThemeProvider, fontSets } from '@refy/ui';\nimport '@refy/ui/tokens.css';\nimport '@refy/ui/styles.css';\nimport '@refy/ui/fonts.css';\n\nconst theme = ${JSON.stringify({ ...identity, tokens: skins[skin].theme?.tokens ?? {} }, null, 2)};\ntheme.tokens = { ...theme.tokens, ...fontSets.${fonts}.tokens };\n\n<ThemeProvider theme={theme} mode="${mode}">\n  <MinhaAplicacao />\n</ThemeProvider>`;
  const controls = <>
    <Select label="Modo" value={mode} onChange={e => setMode(e.target.value as ThemeMode)}><option value="light">Claro</option><option value="dark">Escuro</option><option value="editorial">Editorial</option></Select>
    <Select label="Aparência" value={skin} onChange={e => setSkin(e.target.value as keyof typeof skins)}>{Object.entries(skins).map(([id, item]) => <option value={id} key={id}>{item.label}</option>)}</Select>
    <Select label="Conjunto de fontes" value={fonts} onChange={e => setFonts(e.target.value as FontSet)}>{Object.entries(fontSets).map(([id, item]) => <option value={id} key={id}>{item.label}</option>)}</Select>
  </>;
  const projectTable = <Table caption="Projetos da equipe" rows={projects} rowKey={r => r.id} searchable searchPlaceholder="Filtrar projetos…" pagination={{ pageSize: 5, pageSizeOptions: [5, 10] }} minTableWidth={540} columns={[
    { key: 'name', header: 'Projeto', sortable: true, cell: r => <PersonCell size="sm" name={r.name} secondary={r.owner} avatar={<Avatar initials={r.name.slice(8, 10).toUpperCase()} size="sm" shape="square" />} /> },
    { key: 'status', header: 'Estado', filterable: true, cell: r => <Badge tone={r.status === 'Em revisão' ? 'warn' : 'neutral'}>{r.status}</Badge> },
    { key: 'progress', header: 'Progresso', sortable: true, align: 'num', cell: r => <div className={styles.progress}><span>{r.progress}%</span><ProgressBar value={r.progress} size="sm" /></div> },
    { key: 'action', header: 'Ação', cell: r => <Button size="sm" variant="ghost" onClick={() => { setArea('work'); setWorkView('review'); setNotice(`${r.name} aberto para revisão nesta demonstração.`); }}>Revisar</Button> },
  ]} />;
  return <ThemeProvider theme={identity} mode={mode} className={styles.root} data-testid="playground">
    <header className={styles.toolbar} aria-label="Personalizar aplicação">
      <div className={styles.toolbarTitle}><strong>Playground Refy</strong><span>Experimente a sua identidade</span></div>
      <div className={styles.controls}>{controls}</div>
      <Button onClick={() => setConfiguration(true)}>Usar no meu projeto</Button>
    </header>
    <AppShell responsiveSidebar sidebar={{
      brand: 'refy', activeId: area,
      workspace: { name: workspace, role: 'Ambiente de demonstração', initials: 'EA' },
      account: { name: 'Ana Lima', email: 'ana@example.com', initials: 'AL' },
      cta: { label: 'Novo projeto', icon: Icons.plus, onClick: () => setCreating(true) },
      groups: [
        { section: 'Workspace', items: Object.entries(workspaceAreas).map(([id, label]) => ({ id, label, icon: id === 'overview' ? Icons.dashboard : id === 'work' ? Icons.projects : id === 'library' ? Icons.competitors : Icons.settings })) },
        { section: 'Todos os componentes', items: Object.entries(componentAreas).map(([id, label]) => ({ id, label, icon: Icons.projects })) },
      ],
      onNavigate: item => setArea(item.id as Area),
    }} topbar={{
      crumbs: [{ label: workspace, onClick: () => setArea('overview') }, { label: areas[area] }],
      searchPlaceholder: 'Encontrar uma área…', onSearchClick: () => setSearch(true),
      actions: <><Tooltip label="Avisos da equipe"><IconButton aria-label="Notificações" icon={Icons.bell} onClick={() => setNotice('Tudo em dia. Esta demonstração usa dados locais.')} /></Tooltip><Avatar initials="AL" size="md" /></>,
    }}>
      <div className={styles.stack}>
        <PageHeader eyebrow={area in componentAreas ? 'Todos os componentes · exemplos interativos' : 'Workspace de exemplo · dados locais'} title={areas[area]} lead={area in componentAreas ? 'Escolha um componente. Tema, aparência e fontes do topo também se aplicam aqui.' : area === 'overview' ? 'Um lugar para acompanhar o trabalho, organizar ideias e colaborar.' : area === 'work' ? 'Da lista à revisão, os mesmos componentes e a mesma identidade.' : area === 'library' ? 'Referências, decisões e uma agenda compartilhada.' : 'As preferências continuam preenchidas quando você troca a aparência.'}
          actions={area in componentAreas ? undefined : <Button variant="primary" leadingIcon={Icons.plus} onClick={() => setCreating(true)}>Criar projeto</Button>} />
        {area in componentAreas && <ComponentArea area={area as ComponentAreaId} selected={selectedComponent} onSelect={setSelectedComponent} mode={mode} fonts={fonts} />}
        {area === 'overview' && <>
          <StatGroup><Stat label="Projetos ativos" value={projects.length} description="Neste workspace" /><Stat label="Conclusão do ciclo" value="72%" delta={{ value: '+8%', trend: 'up' }} /><Stat label="Próxima revisão" value="24" unit="out." description="Equipe de criação · 10h" /></StatGroup>
          <div className={styles.columns}>
            <Card><LineChart title="Evolução das entregas" label="Entregas por semana" data={[8, 12, 10, 18, 22, 28]} xLabels={['S1', 'S2', 'S3', 'S4', 'S5', 'S6']} yTitle="Entregas" /></Card>
            <Card><CardHeader title="Equipe e capacidade" /><div className={styles.stack}><AvatarGroup items={[{ name: 'Ana Lima', initials: 'AL' }, { name: 'Bruno Reis', initials: 'BR' }, { name: 'Clara Dias', initials: 'CD' }]} /><UsageMeter label="Atividades concluídas" used={36} limit={50} /><UsageMeter label="Espaço da biblioteca" used={4} limit={20} unit="GB" /><Button onClick={() => setArea('settings')}>Gerenciar workspace</Button></div></Card>
          </div>
          <Card><CardHeader title="Projetos em movimento" action={<Button size="sm" variant="ghost" onClick={() => setArea('work')}>Ver trabalho</Button>} />{projectTable}</Card>
          <EventTimeline title="Últimas atividades" context="Atualizações e decisões da equipe." density="compact" events={[
            { id: '1', timestamp: '2026-10-22T10:30:00-03:00', title: 'Referências atualizadas', description: 'A biblioteca está pronta para a próxima revisão.', actor: { name: 'Ana Lima', initials: 'AL' }, action: <Button size="sm" onClick={() => setArea('library')}>Abrir biblioteca</Button> },
            { id: '2', timestamp: '2026-10-22T09:15:00-03:00', title: 'Projeto Horizonte enviado para revisão', actor: { name: 'Bruno Reis', initials: 'BR' }, status: { label: 'em revisão', tone: 'warn' } },
          ]} />
        </>}
        {area === 'work' && <Tabs value={workView} onChange={setWorkView} items={[
          { id: 'list', label: 'Lista', content: <Card>{projectTable}</Card> },
          { id: 'board', label: 'Quadro', content: <KanbanBoard columns={['Planejado', 'Em andamento', 'Em revisão'].map(status => ({ id: status, title: status, items: projects.filter(p => p.status === status).map(p => ({ id: p.id, title: p.name, description: p.owner, footer: <Button size="sm" onClick={() => { setProjects(rows => rows.map(row => row.id === p.id ? { ...row, status: status === 'Planejado' ? 'Em andamento' : status === 'Em andamento' ? 'Em revisão' : 'Planejado' } : row)); }}>Mover para {status === 'Planejado' ? 'andamento' : status === 'Em andamento' ? 'revisão' : 'planejado'}</Button> })) }))} /> },
          { id: 'review', label: 'Revisão', content: <ApprovalWorkbench activeId={review} onActiveChange={setReview} items={[{ id: 'content', label: 'Conteúdo' }, { id: 'delivery', label: 'Entrega' }].map(item => ({ ...item, state: approved.includes(item.id) ? 'complete' : item.id === review ? 'in-progress' : 'not-started' }))}>
            <Card><div className={styles.stack}><SectionHeader title={review === 'content' ? 'Revisão de conteúdo' : 'Revisão da entrega'} sub="Registre uma decisão para este exemplo." /><Callout title="Critérios da revisão">Clareza, consistência e informações completas.</Callout><Textarea label="Observações" placeholder="O que precisa ser ajustado?" /><DecisionActions activeAction={decision} onAction={action => { setDecision(action); setNotice(action === 'select' ? 'Item aprovado nesta demonstração.' : action === 'save' ? 'Item salvo para revisar depois.' : 'Ajuste solicitado nesta demonstração.'); if (action === 'select') setApproved(ids => [...new Set([...ids, review])]); }} /></div></Card>
          </ApprovalWorkbench> },
        ]} />}
        {area === 'library' && <>
          <div className={styles.twoColumns}>{['Referências visuais', 'Guia de conteúdo'].map((title, i) => <ContentCard key={title} title={title} subtitle={i ? '12 páginas · atualizado hoje' : '8 referências · equipe de criação'} media={[{ src: sampleArtwork(i ? '#c6cde3' : '#c7d9ce'), alt: `Capa abstrata de ${title}` }, { src: sampleArtwork('#e3d6c6'), alt: 'Variação da capa' }]} badges={[{ label: 'Compartilhado', tone: 'neutral' }]} summary="Material de exemplo para explorar mídia, conteúdo e ações." actions={false} detailsAction={<Button onClick={() => setNotice(`${title}: conteúdo selecionado na biblioteca.`)}>Selecionar material</Button>} />)}</div>
          <Card><CardHeader title="Agendar revisão" /><SchedulePicker value={availability} onChange={setAvailability} defaultActiveDate={new Date(2026, 9, 24)} minDate={new Date(2026, 9, 22)} /><div className={styles.actions}><Button variant="primary" onClick={() => setNotice(Object.values(availability).some(times => times.length > 0) ? 'Disponibilidade registrada nesta sessão.' : 'Selecione ao menos um dia e horário para registrar.')}>Registrar disponibilidade</Button></div></Card>
          <Accordion items={[{ id: 'sharing', title: 'Quem pode acessar os materiais?', content: 'Os participantes deste workspace de demonstração. No seu produto, conecte a política de acesso da aplicação.' }, { id: 'data', title: 'Meus dados são enviados?', content: 'Não. Os exemplos permanecem na memória desta página e são restaurados ao recarregar.' }]} />
        </>}
        {area === 'settings' && <div className={styles.twoColumns}>
          <Card><CardHeader title="Perfil do workspace" /><form className={styles.stack} onSubmit={e => { e.preventDefault(); if (workspace.trim()) setNotice('Preferências salvas nesta demonstração.'); }}>
            <Input label="Nome do workspace" value={workspace} onChange={e => setWorkspace(e.target.value)} required block />
            <Textarea label="Descrição" value={description} onChange={e => setDescription(e.target.value)} block />
            <RadioGroup name="frequency" label="Resumo de atividades" value={frequency} onChange={setFrequency} options={[{ value: 'daily', label: 'Diário' }, { value: 'weekly', label: 'Semanal' }]} />
            <Checkbox label="Incluir projetos concluídos no resumo" checked={summary} onChange={e => setSummary(e.target.checked)} />
            <Button type="submit" variant="primary">Salvar preferências</Button>
          </form></Card>
          <div className={styles.stack}><Card><CardHeader title="Preferências de trabalho" /><SettingRowGroup><SettingRow title="Avisos da equipe" description="Receber atualizações dos projetos." switchProps={{ checked: notifications, onChange: e => setNotifications(e.target.checked) }} /><SettingRow title="Acesso ao workspace" description={visibility} actions={<Badge tone="success">Ativo</Badge>} /></SettingRowGroup></Card>
          <Card><CardHeader title="Compartilhamento padrão" /><ChoiceCardGroup label="Visibilidade" columns={1} value={visibility} onChange={value => setVisibility(String(value))}><ChoiceCard value="Equipe" title="Equipe" description="Colaboração com todos os integrantes." /><ChoiceCard value="Privado" title="Privado" description="Apenas pessoas convidadas." /></ChoiceCardGroup></Card>
          <Callout title="Sua aplicação, sua identidade">Use os controles no topo para testar cores, geometria e fontes. Os dados preenchidos permanecem aqui.</Callout></div>
        </div>}
        <details className={styles.inventory}><summary>Quais componentes formam esta aplicação?</summary><p>As quatro telas compõem átomos, moléculas e organismos. Todas as {componentCatalog.length} famílias estão disponíveis nas áreas de componentes do menu, com a mesma personalização.</p><nav aria-label="Componentes usados">{components.map(([name, id]) => <a key={id} href={`./?path=/story/${id}&globals=theme:${mode};fonts:${fonts}`} target="_top">{name}</a>)}</nav></details>
      </div>
    </AppShell>
    <Modal open={creating} onClose={() => setCreating(false)} title="Criar projeto">
      <form className={styles.stack} onSubmit={e => { e.preventDefault(); if (!name.trim()) return; setProjects(items => [...items, { id: `project-${items.length}`, name: name.trim(), owner: 'Ana Lima', status: 'Planejado', progress: 0 }]); setNotice(`Projeto ${name.trim()} criado.`); setCreating(false); setName(''); }}>
        <Input label="Nome do projeto" value={name} onChange={e => setName(e.target.value)} required block />
        <Menu open={menu} onOpenChange={setMenu} entries={['Equipe', 'Privado'].map(label => ({ id: label, label, onSelect: () => setVisibility(label) }))}><Button type="button" onClick={() => setMenu(!menu)}>Visibilidade: {visibility}</Button></Menu>
        <Callout title="Demonstração">O projeto será incluído na lista desta sessão.</Callout>
        <div className={styles.actions}><Button type="button" onClick={() => setCreating(false)}>Cancelar</Button><Button variant="primary" type="submit">Criar</Button></div>
      </form>
    </Modal>
    <Drawer open={configuration} onOpenChange={setConfiguration} title="Leve a identidade para seu projeto" width={740}>
      <div className={styles.stack}><div className={styles.controls}>{controls}</div><TypographySample value={fonts} /><CodeBlock label="Configuração da aplicação" language="tsx" code={snippet} /><p>Fontes opcionais, locais e com licença OFL. Substitua MinhaAplicacao pela composição das suas telas.</p></div>
    </Drawer>
    <Command open={search} onOpenChange={setSearch} placeholder="Encontrar área ou componente…" items={[...Object.entries(areas).map(([id, label]) => ({ id, label, group: 'Áreas' })), ...componentCatalog.map(entry => ({ id: `component:${entry.id}`, label: entry.label, group: 'Componentes' }))]} onSelect={item => { const entry = componentCatalog.find(entry => item.id === `component:${entry.id}`); if (entry) { setArea(entry.area); setSelectedComponent(entry.id); } else setArea(item.id as Area); setSearch(false); }} />
    <ToastRegion toasts={notice ? [{ id: 'playground-notice', title: notice, duration: 5000 }] : []} onDismiss={() => setNotice('')} />
  </ThemeProvider>;
}
