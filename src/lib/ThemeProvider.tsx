import { createContext, useContext, useState } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import "../styles/scoped.css";

export type ThemeMode = "light" | "dark" | "editorial";
export type ThemeTokens = Partial<Record<`--${string}`, string | number>>;
export interface RefyTheme {
  /** Identificador da aplicação; não controla o modo. */
  name: string;
  tokens?: ThemeTokens;
  modes?: Partial<Record<ThemeMode, ThemeTokens>>;
}
interface ThemeScope {
  theme?: RefyTheme;
  mode: ThemeMode;
  portal: HTMLDivElement | null;
}
const Context = createContext<ThemeScope>({ mode: "light", portal: null });

export interface ThemeProviderProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  theme?: RefyTheme;
  mode?: ThemeMode;
  children: ReactNode;
}

/** Escopo de identidade/modo. Não muda estado dos filhos ao trocar a aparência. */
export function ThemeProvider({ theme, mode, style, children, ...rest }: ThemeProviderProps) {
  const parent = useContext(Context);
  const identity = theme ?? parent.theme;
  const appearance = mode ?? parent.mode;
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);
  const variables = { ...identity?.tokens, ...identity?.modes?.[appearance] };
  for (const [key, value] of Object.entries(variables)) {
    if (!/^--[\w-]+$/.test(key) || !["string", "number"].includes(typeof value)) {
      throw new Error(`Token de tema inválido: ${key}`);
    }
  }
  return <Context.Provider value={{ theme: identity, mode: appearance, portal }}>
    <div {...rest} data-refy-scope="" data-refy-brand={identity?.name ?? "refy"} data-theme={appearance}
      style={{ ...variables, ...style } as CSSProperties}>
      {children}
      <div ref={setPortal} data-refy-portal="" style={{ display: "contents" }} />
    </div>
  </Context.Provider>;
}

/** Portais permanecem no escopo visual da instância, inclusive nos escopos aninhados. */
export function useThemePortal() {
  return useContext(Context).portal;
}
