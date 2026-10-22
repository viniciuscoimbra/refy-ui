# Dependências e fontes

A licença MIT na raiz cobre o código Refy de autoria de Vinícius Coimbra. Cada dependência mantém sua própria licença e avisos; consulte os pacotes e o lockfile.

- React e React DOM são dependências fornecidas pela aplicação consumidora.
- D3 Array, Scale e Shape são dependências da biblioteca para gráficos.
- Storybook, Vite, TypeScript e os demais pacotes de desenvolvimento são ferramentas usadas para desenvolver e compilar o projeto.
- Inter, Space Grotesk e JetBrains Mono são redistribuídas em formato WOFF2 variável (subconjunto latino), sob SIL Open Font License. Arquivos e licenças originais ficam em `src/assets/fonts/`. Origem: Google Fonts e repositório oficial google/fonts, obtidos em 22/10/2026. O catálogo as carrega localmente. Consumidores podem importar `@refy/ui/fonts.css` ou fornecer suas próprias fontes; `tokens.css` não inicia conexões externas.

Nenhuma licença de software concede, por si só, direitos sobre marcas de produtos ou materiais de terceiros. Os assets de clientes da árvore original não fazem parte desta distribuição.

## Conjuntos tipográficos do playground

Arquivos WOFF2 latinos e OFL obtidos em 22/10/2026 pela API CSS de Google Fonts e por `google/fonts/ofl/<família>/OFL.txt`. As fontes não são modificadas. IBM Plex Mono contém pesos estáticos 400/500/600/700; as demais novas famílias são variáveis 400–700. Carregamento local e sob demanda pelo navegador, sem chamadas ao Google na aplicação.

| Família | Origem e informações | Licença no pacote |
|---|---|---|
| Manrope | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/manrope) | `manrope-OFL.txt` |
| Source Sans 3 | [Adobe](https://github.com/adobe-fonts/source-sans) | `sourcesans3-OFL.txt` |
| Source Code Pro | [Adobe](https://github.com/adobe-fonts/source-code-pro) | `sourcecodepro-OFL.txt` |
| IBM Plex Sans e Mono | [IBM](https://github.com/IBM/plex) | `ibmplexsans-OFL.txt`, `ibmplexmono-OFL.txt` |
| DM Sans | [Google Fonts / DM](https://github.com/googlefonts/dm-fonts) | `dmsans-OFL.txt` |
| Geist Mono | [Vercel](https://vercel.com/font) | `geistmono-OFL.txt` |
