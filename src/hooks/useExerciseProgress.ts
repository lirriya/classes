import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_PREFIX = "alinas-notes:progress:";

export interface ExerciseProgressValue {
  solved: Record<string, boolean>;
  isSolved: (id: string) => boolean;
  solve: (id: string) => void;
  reset: () => void;
}

const noOpProgress: ExerciseProgressValue = {
  solved: {},
  isSolved: () => false,
  solve: () => undefined,
  reset: () => undefined,
};

export const ExerciseProgressContext =
  createContext<ExerciseProgressValue>(noOpProgress);

function load(key: string): Record<string, boolean> {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null) {
      return parsed as Record<string, boolean>;
    }
    return {};
  } catch {
    return {};
  }
}

export function useExerciseProgress(slug: string): ExerciseProgressValue {
  const key = STORAGE_PREFIX + slug;
  const [store, setStore] = useState(() => ({
    slug,
    solved: load(STORAGE_PREFIX + slug),
  }));

  if (store.slug !== slug) {
    setStore({ slug, solved: load(STORAGE_PREFIX + slug) });
  }

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(store.solved));
    } catch {
      return;
    }
  }, [key, store.solved]);

  const solve = useCallback((id: string) => {
    setStore((prev) =>
      prev.solved[id] ? prev : { ...prev, solved: { ...prev.solved, [id]: true } },
    );
  }, []);

  const reset = useCallback(() => {
    setStore((prev) => ({ ...prev, solved: {} }));
  }, []);

  const solved = store.solved;

  const isSolved = useCallback((id: string) => Boolean(solved[id]), [solved]);

  return useMemo(
    () => ({ solved, isSolved, solve, reset }),
    [solved, isSolved, solve, reset],
  );
}

export function useExerciseProgressContext(): ExerciseProgressValue {
  return useContext(ExerciseProgressContext);
}
