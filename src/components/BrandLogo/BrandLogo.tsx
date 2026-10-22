import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";
import styles from "./BrandLogo.module.css";

export type BrandLogoBrand = "refy";
export type BrandLogoSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface BrandLogoProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  brand?: BrandLogoBrand;
  size?: BrandLogoSize;
  tone?: "default" | "inverse";
  animated?: boolean;
  markOnly?: boolean;
  /** Marca fornecida pelo consumidor. Não inclui assets de terceiros no Refy. */
  children?: ReactNode;
}

/** Assinatura do Refy. Marcas de produtos podem ser fornecidas pela aplicação. */
export function BrandLogo({ brand = "refy", size = "sm", tone = "default", animated = true, markOnly = false, children, className, ...rest }: BrandLogoProps) {
  return <span role="img" aria-label={brand} className={cn(styles.logo, styles.refy, styles[size], styles[tone], markOnly && styles.markOnly, !animated && styles.static, className)} {...rest}>
    {children ?? <><span aria-hidden="true" className={markOnly ? styles.monogram : styles.word}>{markOnly ? "r" : "refy"}</span>
    {!markOnly && <span aria-hidden="true" className={styles.dot} />}</>}
  </span>;
}
