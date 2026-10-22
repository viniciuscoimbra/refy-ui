import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import styles from "./Chip.module.css";

export type ChipTone = "neutral" | "critical" | "warning" | "success" | "info";
export type ChipSelectionMode = "toggle" | "radio";

/** Props for the selectable Chip control. */
export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  /** Estado selecionado (filtro ativo). */
  selected?: boolean;
  /** Contador à direita (ex.: número de itens no filtro). */
  count?: number;
  /** Ponto semântico opcional para filtros de severidade/status. */
  tone?: ChipTone;
  /** Toggle usa `aria-pressed`; radio usa `role=radio` + `aria-checked`. */
  selectionMode?: ChipSelectionMode;
  /** Revela o check animado quando selecionado. */
  showCheck?: boolean;
  /** Ícone de fechar — dispara onRemove. */
  removable?: boolean;
  onRemove?: () => void;
  leadingIcon?: ReactNode;
  children: ReactNode;
}

/**
 * Chip / filter-chip. Clicável para alternar seleção; opcionalmente removível.
 * A seleção inverte o par semântico, preservando contraste também em hover.
 */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { selected = false, count, tone = "neutral", selectionMode = "toggle", showCheck = false, removable = false, onRemove, onClick, leadingIcon, className, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(styles.chip, styles[`tone-${tone}`], selected && styles.selected, className)}
      role={selectionMode === "radio" ? "radio" : undefined}
      aria-checked={selectionMode === "radio" ? selected : undefined}
      aria-pressed={selectionMode === "toggle" ? selected : undefined}
      onClick={(event) => {
        onClick?.(event);
        if (removable) onRemove?.();
      }}
      {...rest}
    >
      {showCheck && (
        <span className={styles.check} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </span>
      )}
      {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
      {tone !== "neutral" && <span className={styles.dot} aria-hidden="true" />}
      <span className={styles.label}>{children}</span>
      {typeof count === "number" && <span className={styles.count}>{count}</span>}
      {removable && (
        <span
          className={styles.remove}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </span>
      )}
    </button>
  );
});
