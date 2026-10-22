## Context

Há tokens usados pelo Button que só existem no modo escuro. Precisamos de um contrato de fundação completo por tema e validação que detecte aliases quebrados antes da publicação.

Baseline observado: c3f03fd, biblioteca 0.4.0. As specs desta mudança descrevem resultados futuros, não evidência de que já existem.

## Goals / Non-Goals

Objetivo: Contrato de tokens e temas.

Não objetivos: Trocar a identidade Refy pela do PCF, gerar uma biblioteca Figma, criar centenas de tokens sem uso ou remover aliases públicos sem migração.

## Decisions

1. Usar primitivas e tokens semânticos; criar tokens de componente apenas quando houver necessidade distinta documentada.
2. Gerar CSS da fonte estruturada e conferir a equivalência em CI; preservar nomes públicos por aliases quando viável.
3. Validar todos os temas atualmente oferecidos: light, dark e editorial. A política proposta é claro como padrão sem data-theme; qualquer mudança no padrão exige nota de migração.

Alternativa descartada: alterar toda a biblioteca de uma vez e promover o catálogo pelo build/quantidade de stories. Essa abordagem não permite atribuir comportamento e falhas a contratos verificados. Reutilizar helpers/componentes atuais antes de criar abstrações ou dependências.

4. Separar identidade de produto de modo de aparência. Cada instância resolve base → identidade → modo → ajustes de componente documentados. Os nomes e a API exata serão definidos na implementação, sem prometer um ThemeProvider já existente. O padrão claro continua no Refy sem configuração; padrões atuais dos produtos precisam de mapeamento explícito.
5. Reutilizar variáveis CSS e composição por props/slots já existentes. Promover apenas hooks visuais necessários e observados (fontes, densidade, tamanhos, espaçamento, raios, bordas, sombras e quebra de texto), preservando defaults. Um provider só será introduzido se necessário para contexto/portais. Não oferecer CSS arbitrário sobre seletores internos como contrato público.
6. Isolar escopos, inclusive aninhados e portais de Menu, Modal, Drawer, Tooltip e ToastRegion. Uma troca de marca/modo não pode reiniciar formulário, mover foco ou mudar eventos e semântica. Estilos globais/reset não podem contaminar o host.
7. Assets e configuração de cada produto ficam na aplicação ou em pacote próprio. BrandLogo e componentes compostos devem aceitar a identidade por extensão genérica, sem enumerar marcas privadas no núcleo. Rejeitamos copiar componentes por marca e reintroduzir logos proprietários na biblioteca pública.

Levantamento somente de leitura em 21/10/2026: Plyngo declara dependência local de @refy/ui, resolve fontes no Storybook, usa plyngo-tokens.css e verifica patches que incluem hooks visuais e diferenças funcionais. Isso não comprova consumo do pacote compilado pela aplicação inteira. O bioma mantém uma cópia de tokens Refy em sua IDE; o mapa local contém caminhos antigos, portanto a integração atual precisa de confirmação. Dommus/Domuz é a origem da extração da biblioteca pública. Nenhum dos três está homologado na nova distribuição.

## Risks / Trade-offs

Uma renomeação ampla pode quebrar consumidores. Valores literais justificados por geometria óptica podem existir, mas precisam de exceção documentada; não confundir variáveis opcionais locais com tokens obrigatórios.

Dependência de execução: gate aprovado de `establish-refy-governance` com referência ao commit e revisão. Artefatos prontos não implementam o gate automaticamente.

## Migration Plan

Capturar o baseline antes de mudar. Resolver lacunas como --on-primary e --primary-container; manter tabela antes/depois, aliases depreciados e versão de remoção proposta, sem remoção nesta fase.

Validação: cumprir cenários positivos e negativos das specs e guardar resultados por requisito. Se houver falha, manter tarefa e gate abertos; reverter alteração isolada quando necessário, preservando a evidência da falha.

Migração de temas por produto: inventariar aliases, defaults e hooks antes de alterar a fonte; manter um de–para versionado. Patches funcionais (por exemplo foco e variantes de Drawer) precisam de análise de contrato própria, não serão disfarçados de tokens. Baselines detalhados ficam privados; fixtures públicas são sintéticas.

## Open Questions

Aprovar mudanças visuais necessárias para contraste e confirmar política de carregamento de fontes externas. Valores exatos serão decididos com os pares e estados medidos, não inventados no planejamento.
