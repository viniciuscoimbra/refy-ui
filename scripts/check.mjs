import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button, Input, BrandLogo, ThemeProvider, ContentCard, PropertyCard, MediaGallery, PropertyMedia, SchedulePicker, VisitSchedulePicker, DecisionActions, DecisionDeck } from '../dist/index.js';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
assert.equal(pkg.license, 'MIT');
assert.match(readFileSync('LICENSE', 'utf8'), /Copyright \(c\) 2026 Vinícius Coimbra/);
for (const target of ['dist/index.js', 'dist/index.d.ts', 'dist/style.css', 'src/tokens/tokens.css', 'src/styles/global.css']) assert(existsSync(target), `Arquivo de distribuição ausente: ${target}`);
const loading = renderToStaticMarkup(React.createElement(Button, { loading: true }, 'Salvar'));
assert.match(loading, /disabled/);
assert.match(loading, /aria-busy="true"/);
const input = renderToStaticMarkup(React.createElement(Input, { label: 'Nome', required: true }));
assert.match(input, /Nome/);
assert.match(input, /required/);
const wordmark = renderToStaticMarkup(React.createElement(BrandLogo));
const mark = renderToStaticMarkup(React.createElement(BrandLogo, { markOnly: true, animated: false }));
assert.match(wordmark, /role="img" aria-label="refy"/);
assert.match(wordmark, />refy</);
assert.match(mark, />r</);
assert.doesNotMatch(mark, />refy</);
const css = readFileSync('src/tokens/tokens.css', 'utf8');
for (const theme of ['light', 'dark', 'editorial']) assert(css.includes(`[data-theme="${theme}"]`));
assert.doesNotMatch(css, /data-theme="dommus/);
assert(!existsSync('src/prototypes'), 'Protótipos internos não pertencem ao repositório público');
console.log('OK: distribuição, MIT, temas e renderização de Button, Input e BrandLogo.');

assert.throws(() => renderToStaticMarkup(React.createElement(ThemeProvider, { theme: { name: 'bad', tokens: { color: 'red' } } }, 'x')), /Token de tema inválido/);
const scoped = renderToStaticMarkup(React.createElement(ThemeProvider, { theme: { name: 'synthetic', tokens: { '--radius-default': '12px' } } }, 'x'));
assert.match(scoped, /data-refy-brand="synthetic"/);
assert.match(scoped, /data-theme="light"/);
assert.match(scoped, /--radius-default:12px/);

// Canonical names keep the existing implementation and translate only the domain event.
assert.equal(ContentCard, PropertyCard);
assert.equal(MediaGallery, PropertyMedia);
assert.equal(SchedulePicker, VisitSchedulePicker);
let decision;
const actions = DecisionActions({ activeAction: 'select', onAction: value => { decision = value; } });
assert.equal(actions.props.activeAction, 'visit');
actions.props.onAction('visit');
assert.equal(decision, 'select');
const deck = DecisionDeck({ items: [], onAction: (action, item) => { decision = [action, item.id]; } });
deck.props.onAction('visit', { id: 'example' });
assert.deepEqual(decision, ['select', 'example']);
for (const file of ['inter', 'space-grotesk', 'jetbrains-mono']) {
  assert(existsSync(`src/assets/fonts/${file}-latin.woff2`));
  assert(existsSync(`src/assets/fonts/${file}-OFL.txt`));
}
console.log('OK: nomes canônicos, compatibilidade de eventos e fontes locais licenciadas.');
