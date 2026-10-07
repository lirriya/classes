import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGsapReveal(
  ref: RefObject<HTMLElement | null>,
  dependency: unknown,
): void {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      element,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
    );
    return () => {
      tween.kill();
    };
  }, [ref, dependency]);
}

export function useGsapStagger(
  ref: RefObject<HTMLElement | null>,
  selector: string,
  dependency: unknown,
): void {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;
    const items = element.querySelectorAll(selector);
    if (items.length === 0) return;
    const tween = gsap.fromTo(
      items,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      },
    );
    return () => {
      tween.kill();
    };
  }, [ref, selector, dependency]);
}
