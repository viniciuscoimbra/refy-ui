import { Component, Suspense, lazy } from 'react';
import type { ReactNode } from 'react';
import { Button, Callout, Select } from '../../index';
import type { ThemeMode, FontSet } from '../../index';
import { componentCatalog, type ComponentAreaId, type DemoModule } from './catalog';
import styles from './PlaygroundPage.module.css';

// Reuse each catalog example in the current theme tree, without another provider or iframe.
const examples = Object.fromEntries(componentCatalog.map(entry => [entry.id, lazy(async () => {
  const module = await entry.load() as DemoModule;
  const meta = module.default;
  const story = module[entry.story];
  const Render = story.render ?? meta.render ?? meta.component;
  const args = { ...meta.args, ...story.args };
  let Demo = () => <Render {...args} />;
  for (const decorate of [...(story.decorators ?? []), ...(meta.decorators ?? [])]) {
    const Child = Demo;
    Demo = () => decorate(Child);
  }
  return { default: () => <div data-demo-ready=""><Demo /></div> };
})]));

class DemoBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    return this.state.error ? <Callout tone="danger" title="Não foi possível abrir este exemplo">Recarregue a página para tentar novamente.</Callout> : this.props.children;
  }
}

export function ComponentArea({ area, selected, onSelect, mode, fonts }: { area: ComponentAreaId; selected: string; onSelect: (id: string) => void; mode: ThemeMode; fonts: FontSet }) {
  const items = componentCatalog.filter(entry => entry.area === area);
  const entry = items.find(item => item.id === selected) ?? items[0];
  const index = items.indexOf(entry);
  const Demo = examples[entry.id];
  return <section className={styles.componentArea} aria-label="Explorar componentes">
    <div className={styles.componentChooser}>
      <Select label="Componente desta área" value={entry.id} onChange={event => onSelect(event.target.value)} block>
        {items.map(item => <option value={item.id} key={item.id}>{item.label}</option>)}
      </Select>
      <div className={styles.actions}>
        <Button disabled={index === 0} onClick={() => onSelect(items[index - 1].id)}>Anterior</Button>
        <Button disabled={index === items.length - 1} onClick={() => onSelect(items[index + 1].id)}>Próximo</Button>
      </div>
    </div>
    <header className={styles.componentHeading}>
      <div><h2>{entry.label}</h2><p>{entry.level} · {index + 1} de {items.length} nesta área · {componentCatalog.length} famílias no playground</p></div>
      <a href={`./?path=/story/${entry.storyId}&globals=theme:${mode};fonts:${fonts}`} target="_top">Ver no catálogo</a>
    </header>
    {entry.note && <p className={styles.demoNote}>{entry.note}</p>}
    <div className={styles.demoStage} data-testid="component-demo" data-component={entry.id}>
      <DemoBoundary key={entry.id}><Suspense fallback={<p role="status">Carregando exemplo…</p>}><Demo /></Suspense></DemoBoundary>
    </div>
  </section>;
}
