import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import styles from "./Switch.module.css";

/** Props for the Switch control. */
export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Rótulo acessível quando não há <label> visível associado. */
  "aria-label"?: string;
  label?: ReactNode;
  icon?: ReactNode;
  appearance?: "plain" | "control";
}

/** Toggle on/off com semântica de switch; usa a cor primary do tema quando ligado. */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, disabled, label, icon, appearance = "plain", ...rest },
  ref
) {
  return (
    <label className={cn(styles.wrap, appearance === "control" && styles.control, disabled && styles.disabled, className)}>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      {label && <span>{label}</span>}
      <input ref={ref} type="checkbox" role="switch" className={styles.input} disabled={disabled} {...rest} />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
    </label>
  );
});
