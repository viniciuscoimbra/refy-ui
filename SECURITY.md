# Segurança

Não publique credenciais ou dados de clientes em issues, pull requests ou exemplos. Para relatar uma vulnerabilidade, use o recurso de relato privado de segurança do GitHub quando estiver habilitado; evite abrir uma issue pública com detalhes exploráveis.

A biblioteca e as ferramentas de desenvolvimento têm conjuntos de dependências diferentes. Confira ambos:

```bash
npm audit --omit=dev
npm audit
```

Na preparação desta versão, em 21/10/2026, as dependências de execução não apresentaram alertas no npm audit. Após atualizar Storybook e Vite, restaram três alertas moderados na cadeia de desenvolvimento de `@storybook/addon-essentials` → `@storybook/addon-actions` → `uuid`. O npm propõe um downgrade incompatível do addon como correção automática. Essa migração não foi aplicada; a atualização dessa cadeia permanece pendente. O resultado pode mudar com novos avisos no registro.

Referência do alerta: https://github.com/advisories/GHSA-w5hq-g745-h8pq

O Storybook local escuta em 127.0.0.1 por padrão. Não use o servidor de desenvolvimento como serviço público. Para disponibilizar o catálogo, gere a saída estática com `npm run build-storybook` e hospede `storybook-static/`.
