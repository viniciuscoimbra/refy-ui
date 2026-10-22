# Refy UI

Biblioteca de componentes React e TypeScript criada por Vinícius Coimbra, distribuída sob a licença MIT. O Refy reúne componentes reutilizáveis, tokens visuais e um Storybook para consultar exemplos e estados.

Você usa os componentes para montar as páginas do seu sistema. O Refy cuida da apresentação e das interações de interface; sua aplicação continua responsável por dados, autenticação, permissões e regras de negócio.

## Começar pelo catálogo

Requisitos: Node.js 22 e npm. Esta versão foi verificada com React 19; o manifesto aceita React e React DOM a partir da versão 18, cuja compatibilidade ainda precisa de uma verificação específica.

```bash
git clone https://github.com/viniciuscoimbra/refy-ui.git
cd refy-ui
npm ci
npm run storybook
```

Abra http://localhost:6006. O catálogo mostra os componentes e seus exemplos. A barra de temas oferece `light`, `dark` e `editorial`.

## Usar em um projeto React

O código está disponível neste repositório. O pacote `@refy/ui` ainda não foi publicado no npm. Para instalar esta versão em outro projeto, gere o pacote local:

```bash
# Dentro do repositório refy-ui
npm pack
```

Isso compila a biblioteca e gera `refy-ui-0.4.0.tgz`. No projeto que vai usar os componentes:

```bash
npm install /caminho/para/refy-ui-0.4.0.tgz
```

O projeto consumidor precisa ter `react` e `react-dom` instalados. No arquivo de entrada, importe os estilos uma vez:

```tsx
import '@refy/ui/tokens.css';
import '@refy/ui/global.css';
import '@refy/ui/styles.css';
```

Depois, componha a tela:

```tsx
import { Button, Input } from '@refy/ui';

export function Cadastro() {
  return (
    <div data-theme="light">
      <Input label="Nome completo" placeholder="Digite seu nome" />
      <Button variant="primary" onClick={() => console.log('Salvar')}>
        Salvar
      </Button>
    </div>
  );
}
```

O reset de `global.css` afeta a aplicação inteira. Avalie esse efeito ao integrar em um sistema existente. Os temas devem ser definidos com `data-theme` no elemento raiz da aplicação ou no contêiner desejado.

## Atomic Design

- **Átomos:** controles básicos, como Button, Input e Checkbox.
- **Moléculas:** pequenas composições, como campos com ajuda, busca e notificações.
- **Organismos:** estruturas reutilizáveis, como navegação e áreas de trabalho.
- **Páginas de exemplo:** composições desses componentes; não se tornam componentes universais só por serem uma página.

O código de cada família fica em `src/components/Nome`, com implementação, estilos, stories e exportação. Tokens ficam em `src/tokens/tokens.css`; a API pública fica em `src/index.ts`.

## Personalizar e criar uma derivação

Um produto pode usar os componentes e definir seus próprios tokens, identidade e composições. Preserve a licença e o aviso de autoria do código Refy que for reutilizado. Uma derivação pode manter seu próprio repositório, nome de pacote e ciclo de versões.

Esta distribuição contém a biblioteca Refy. Protótipos internos, backend, dados operacionais e assets de clientes não fazem parte deste repositório. A versão pública de BrandLogo oferece a assinatura Refy; marcas de produtos devem ser fornecidas pela aplicação.

## Desenvolver e verificar

```bash
npm run check              # tipos, build e verificações básicas
npm run build-storybook    # gera o catálogo em storybook-static/
npm pack --dry-run         # confere os arquivos que entram no pacote
```

O workflow do GitHub executa essas verificações em pushes e pull requests. Os testes básicos não substituem a validação de acessibilidade, navegadores e fluxos de cada aplicação. As funcionalidades de mapa e gravação de voz dependem de serviços/permissões do navegador e não são configuradas automaticamente pela biblioteca.

## Contribuir

Abra uma issue descrevendo o problema ou a proposta. Para uma alteração, crie uma branch, preserve a API existente quando possível e atualize as stories afetadas. Rode as verificações antes de enviar um pull request. Não inclua credenciais, dados de clientes ou materiais sem permissão de distribuição.

## Licença e origem

Copyright © 2026 Vinícius Coimbra. Código sob [MIT](LICENSE).

A primeira extração pública parte do pacote local `@refy/ui` 0.4.0 que era mantido junto ao projeto Dommuz. Esta cópia independente preserva os componentes da biblioteca e retira as integrações e marcas específicas daquele produto. Os projetos internos originais não são publicados nem alterados por esta extração.

Dependências e fontes externas mantêm suas próprias licenças. Consulte [os avisos de terceiros](THIRD_PARTY_NOTICES.md).

## Segurança

Consulte [SECURITY.md](SECURITY.md) para relatar problemas e conferir os alertas conhecidos das ferramentas de desenvolvimento. O servidor local do Storybook não deve ser exposto à internet.

## Processo de evolução

A evolução da qualidade do Refy é planejada em [OpenSpec](openspec/README.md), na ordem: governança, fundação e temas, componentes essenciais, documentação e release/adoção. Cada mudança registra proposta, design, requisitos com cenários de aceite e tarefas com evidências esperadas.

Esse programa está em planejamento. Artefatos validados não significam componentes certificados ou implementação concluída; a execução segue o gate de entrada de cada fase.

## Temas por aplicação

Use a mesma implementação com identidade e modos independentes via ThemeProvider. Veja [instalação e customização](docs/THEMING.md), [de–para dos consumidores](docs/CONSUMERS.md) e [inventário de tokens](docs/TOKEN_INVENTORY.md). Os exemplos são sintéticos; os produtos existentes ainda não estão homologados na nova distribuição.

A execução atual e os limites estão nos [contratos essenciais](docs/CORE_CONTRACTS.md) e no [roteiro assistivo pendente](docs/ASSISTIVE_QA.md). O CI mantém regressão por navegador/tema/viewport; referências visuais exigem revisão antes de atualização.
