import { useLayoutEffect, useRef } from "react";
import type { RefObject } from "react";

type Layer = "floating" | "toast" | "tooltip";
type Entry = { element: HTMLElement; layer: Layer; scope: HTMLElement | null; escape?: () => void };
const priority: Record<Layer, number> = { floating: 0, toast: 1, tooltip: 2 };
const documents = new WeakMap<Document, { entries: Entry[]; onKey: (event: KeyboardEvent) => void }>();

/** Política do DS: superfícies por abertura, avisos acima delas e ajuda por último. */
export function registerTopLayer(entry: Entry) {
  const doc = entry.element.ownerDocument;
  let state = documents.get(doc);
  if (!state) {
    const entries: Entry[] = [];
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      const target = event.target as HTMLElement;
      const active = [...entries].reverse().filter(item => item.escape && (
        item.layer === "tooltip" || item.element.contains(target) || item.scope?.contains(target) ||
        (item.scope?.closest('[aria-modal="true"]') && item.scope.closest('[aria-modal="true"]') === target.closest?.('[aria-modal="true"]'))
      )).sort((a, b) => priority[b.layer] - priority[a.layer])[0];
      if (!active) return;
      event.preventDefault(); event.stopPropagation(); active.escape?.();
    };
    state = { entries, onKey };
    documents.set(doc, state);
    doc.addEventListener("keydown", onKey, true);
  }
  const stack = state.entries;
  stack.push(entry);
  entry.element.showPopover?.();
  const focused = doc.activeElement as HTMLElement | null;
  for (const higher of stack.filter(item => priority[item.layer] > priority[entry.layer]).sort((a, b) => priority[a.layer] - priority[b.layer])) {
    // Reordenar não deve reiniciar a entrada de um aviso que já estava visível.
    const animations = higher.element.getAnimations?.({ subtree: true }).map(animation => ({
      target: (animation.effect as KeyframeEffect | null)?.target,
      name: (animation as CSSAnimation).animationName,
      time: animation.currentTime,
    })) ?? [];
    if (higher.element.hidePopover && higher.element.matches(":popover-open")) higher.element.hidePopover();
    higher.element.showPopover?.();
    for (const animation of higher.element.getAnimations?.({ subtree: true }) ?? []) {
      const previous = animations.find(item => item.target === (animation.effect as KeyframeEffect | null)?.target && item.name === (animation as CSSAnimation).animationName);
      if (previous?.time != null) animation.currentTime = previous.time;
      else if (Number.isFinite(animation.effect?.getComputedTiming().endTime)) animation.finish();
    }
  }
  if (focused?.isConnected && doc.activeElement !== focused) focused.focus({ preventScroll: true });
  return () => {
    const index = stack.indexOf(entry);
    if (index >= 0) stack.splice(index, 1);
    if (entry.element.hidePopover && entry.element.matches(":popover-open")) entry.element.hidePopover();
    if (stack.length === 0) {
      doc.removeEventListener("keydown", state.onKey, true);
      documents.delete(doc);
    }
  };
}

export function useTopLayer<T extends HTMLElement>(ref: RefObject<T | null>, layer: Layer, enabled = true, onEscape?: () => void, scope?: RefObject<HTMLElement | null>, portalContainer?: Element | null) {
  const closeRef = useRef(onEscape);
  closeRef.current = onEscape;
  // A new portal container remounts the node even when the ref object stays the same.
  useLayoutEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;
    const previousFocus = element.ownerDocument.activeElement as HTMLElement | null;
    const trigger = element.parentElement?.querySelector<HTMLElement>("[aria-haspopup]") ?? previousFocus;
    return registerTopLayer({ element, layer, scope: scope?.current ?? element.parentElement, escape: onEscape ? () => {
      closeRef.current?.();
      if (layer === "floating") {
        const target = trigger?.isConnected ? trigger : element.closest<HTMLElement>('[aria-modal="true"]');
        target?.focus({ preventScroll: true });
      }
    } : undefined });
  }, [ref, layer, enabled, scope, !!onEscape, portalContainer]);
}
