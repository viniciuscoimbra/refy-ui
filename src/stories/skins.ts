import type { RefyTheme } from "../lib/ThemeProvider";

export const skins: Record<
  "refy" | "outline" | "gradient",
  { label: string; description: string; theme?: RefyTheme }
> = {
  refy: {
    label: "Refy",
    description:
      "A referência original: verde, geometria discreta e tipografia precisa.",
  },
  outline: {
    label: "Contorno",
    description: "Cantos retos, bordas espessas e superfícies sólidas.",
    theme: {
      name: "outline",
      tokens: {
        "--control-radius": "0px",
        "--card-radius": "0px",
        "--dialog-radius": "0px",
        "--drawer-radius": "0px",
        "--checkbox-radius": "0px",
        "--control-border-width": "3px",
        "--card-border-width": "3px",
        "--dialog-border-width": "3px",
        "--button-height-md": "42px",
        "--button-height-sm": "34px",
        "--field-height": "44px",
        "--button-primary-shadow": "3px 3px 0 var(--ink-1)",
        "--button-primary-border": "var(--ink-1)",
        "--button-secondary-border": "var(--ink-1)",
        "--button-secondary-border-hover": "var(--ink-1)",
        "--field-border": "var(--ink-1)",
        "--border": "var(--ink-1)",
        "--field-label-font": "var(--font-body)",
        "--field-label-transform": "none",
        "--field-label-tracking": "0",
        "--field-label-size": "13px",
      },
      modes: {
        light: {
          "--primary": "#f4cb4b",
          "--primary-hover": "#e8b932",
          "--primary-container": "#d9a51c",
          "--on-primary": "#27251c",
          "--on-primary-container": "#27251c",
          "--primary-ink": "#625000",
        },
        dark: {
          "--primary": "#f4cb4b",
          "--primary-hover": "#ffdc75",
          "--primary-container": "#e8b932",
          "--on-primary": "#27251c",
          "--on-primary-container": "#27251c",
          "--primary-ink": "#f4cb4b",
        },
        editorial: {
          "--primary": "#f4cb4b",
          "--primary-hover": "#e8b932",
          "--primary-container": "#d9a51c",
          "--on-primary": "#27251c",
          "--on-primary-container": "#27251c",
          "--primary-ink": "#625000",
        },
      },
    },
  },
  gradient: {
    label: "Degradê",
    description:
      "Controles arredondados, bordas suaves e um degradê na ação principal.",
    theme: {
      name: "gradient",
      tokens: {
        "--control-radius": "20px",
        "--card-radius": "24px",
        "--dialog-radius": "24px",
        "--drawer-radius": "24px",
        "--checkbox-radius": "6px",
        "--button-height-md": "42px",
        "--button-height-sm": "34px",
        "--field-height": "44px",
        "--card-padding": "24px",
        "--button-primary-background":
          "linear-gradient(115deg, #5143a9, #b02e72)",
        "--button-primary-background-hover":
          "linear-gradient(115deg, #40358b, #92245d)",
        "--button-primary-background-active":
          "linear-gradient(115deg, #342970, #771b4b)",
        "--button-primary-foreground": "#ffffff",
        "--button-primary-foreground-hover": "#ffffff",
        "--button-primary-foreground-active": "#ffffff",
        "--button-primary-shadow": "0 3px 10px #5143a933",
        "--field-label-font": "var(--font-body)",
        "--field-label-transform": "none",
        "--field-label-tracking": "0",
        "--field-label-size": "13px",
      },
      modes: {
        light: {
          "--primary": "#6251b4",
          "--primary-hover": "#5143a9",
          "--primary-container": "#40358b",
          "--on-primary": "#ffffff",
          "--on-primary-container": "#ffffff",
          "--primary-ink": "#5143a9",
        },
        dark: {
          "--primary": "#c9baff",
          "--primary-hover": "#dfd4ff",
          "--primary-container": "#5143a9",
          "--on-primary": "#2e2356",
          "--on-primary-container": "#ffffff",
          "--primary-ink": "#c9baff",
        },
        editorial: {
          "--primary": "#6251b4",
          "--primary-hover": "#5143a9",
          "--primary-container": "#40358b",
          "--on-primary": "#ffffff",
          "--on-primary-container": "#ffffff",
          "--primary-ink": "#5143a9",
        },
      },
    },
  },
};
