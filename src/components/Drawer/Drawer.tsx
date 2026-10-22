import { useId, useRef } from "react";
import type { ReactNode } from "react";
import { IconButton } from "../IconButton";
import { cn } from "../../lib/cn";
import { useDialogFocusTrap } from "../../lib/useDialogFocusTrap";
import styles from "./Drawer.module.css";

export type DrawerSide = "left" | "right" | "bottom" | "full";

/** Props for the Drawer component. */
export interface DrawerProps {
  /** Painel visível (controlado — overlay não tem estado interno). */
  open: boolean;
  /** Pedido de fechamento: Esc, scrim ou botão ×. */
  onOpenChange: (open: boolean) => void;
  /** `left`/`right` = lateral; `bottom` = inferior; `full` = dinâmica em tela inteira. */
  side?: DrawerSide;
  /** Título no cabeçalho. */
  title?: ReactNode;
  /** Rodapé fixo (ações). */
  footer?: ReactNode;
  /** Largura do painel lateral. Ignorada nos painéis inferior e de tela inteira. */
  width?: number | string;
  children: ReactNode;
  /** Esconde o botão × do cabeçalho. */
  hideClose?: boolean;
  className?: string;
}

/**
 * Drawer — painel deslizante; `side="bottom"` usa a variação inferior.
 *
 * Scrim atrás (clique fecha), Esc fecha, botão × no cabeçalho. Estrutura
 * head/body/foot com o body rolável. `role="dialog"` + `aria-modal`.
 * Controlado por `open`/`onOpenChange` — sem estado global.
 *
 *   <Drawer open={open} onOpenChange={setOpen} side="right" title="Detalhes">…</Drawer>
 */
export function Drawer({
  open,
  onOpenChange,
  side = "right",
  title,
  footer,
  width,
  children,
  hideClose,
  className,
}: DrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useDialogFocusTrap(open, panelRef, () => onOpenChange(false));

  if (!open) return null;

  return (
    <>
      <div data-refy-scrim="" className={styles.scrim} aria-hidden="true" onClick={() => onOpenChange(false)} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={!title ? "Painel" : undefined}
        tabIndex={-1}
        className={cn(styles.panel, styles[side], className)}
        style={side === "bottom" || side === "full" || width == null ? undefined : { width }}
      >
        {side === "bottom" && <span className={styles.grab} aria-hidden="true" />}
        {(title || !hideClose) && (
          <div className={styles.head}>
            {title && <h2 id={titleId} className={styles.title}>{title}</h2>}
            {!hideClose && (
              <IconButton
                size="sm"
                aria-label="Fechar"
                className={styles.close}
                onClick={() => onOpenChange(false)}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
                }
              />
            )}
          </div>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.foot}>{footer}</div>}
      </div>
    </>
  );
}
