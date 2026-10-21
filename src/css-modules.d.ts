/// <reference types="vite/client" />

// Permite importar *.module.css em arquivos .tsx com tipagem.
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.png" {
  const src: string;
  export default src;
}
