import { useEffect, useState } from "react";
import { BrandLogo } from "../BrandLogo";
import type { BrandLogoBrand } from "../BrandLogo";
import { Drawer } from "../Drawer";
import { IconButton } from "../IconButton";
import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Sidebar } from "../Sidebar";
import type { SidebarProps } from "../Sidebar";
import { Topbar } from "../Topbar";
import type { TopbarProps } from "../Topbar";
import styles from "./AppShell.module.css";

/** Props for the authenticated application shell layout. */
export interface AppShellProps {
  /** Props repassadas à Sidebar. */
  sidebar: SidebarProps;
  /** Props repassadas à Topbar. */
  topbar: TopbarProps;
  /** Largura máxima da coluna de conteúdo. Default 1240px. */
  contentMaxWidth?: number;
  responsiveSidebar?: boolean;
  navigationLabel?: string;
  /** Tema explícito. Omitido, herda o tema global do Storybook/app. */
  theme?: "light" | "dark" | "editorial";
  children: ReactNode;
  className?: string;
}

/**
 * Layout completo do app autenticado: [Sidebar] [Topbar + conteúdo].
 * É só composição — não duplica estilo dos filhos.
 */
export function AppShell({
  sidebar,
  topbar,
  contentMaxWidth = 1240,
  responsiveSidebar = false,
  navigationLabel = "Abrir navegação",
  theme,
  children,
  className,
}: AppShellProps) {
  const [mobile, setMobile] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  useEffect(() => {
    if (!responsiveSidebar) return;
    const query = window.matchMedia("(max-width: 720px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [responsiveSidebar]);
  const drawerNavigation = responsiveSidebar && mobile;
  const navigationBrand = typeof sidebar.brand === "string" && ["refy"].includes(sidebar.brand) ? <BrandLogo brand={sidebar.brand as BrandLogoBrand}/> : sidebar.brand ?? "Navegação";
  return (
    <div className={cn(styles.shell, className)} data-theme={theme}>
      {drawerNavigation ? <Drawer open={navigationOpen} onOpenChange={setNavigationOpen} side="left" title={navigationBrand} className={styles.navigationDrawer}><div className={styles.mobileNavigation}><Sidebar {...sidebar} showHeader={false} mode="expanded" onModeChange={()=>setNavigationOpen(false)} onNavigate={item=>{sidebar.onNavigate?.(item);setNavigationOpen(false);}}/></div></Drawer> : <Sidebar {...sidebar} />}
      <main className={styles.main}>
        <Topbar {...topbar} leading={drawerNavigation ? <><IconButton aria-label={navigationLabel} variant="ghost" aria-expanded={navigationOpen} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>} onClick={()=>setNavigationOpen(true)}/>{topbar.leading}</> : topbar.leading} />
        <div className={styles.body}>
          <div className={styles.content} style={{ maxWidth: contentMaxWidth }}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
