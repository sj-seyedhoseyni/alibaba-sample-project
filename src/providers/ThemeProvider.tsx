"use client";

import { createContext, type FC, memo, type PropsWithChildren, useCallback, useEffect } from "react";
import useLocalStorage from "~/utils/hooks/useLocalStorage";

/**
 * :::: Types & Enums ::::
 */
export enum PaletteMode {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContextProps = { mode: PaletteMode; togglePaletteMode: () => void };

/**
 * :::: Theme Context ::::
 */
export const ThemeContext = createContext<ThemeContextProps>({ mode: PaletteMode.LIGHT, togglePaletteMode: () => null });

/**
 * :::: Theme Provider ::::
 */
const ThemeProvider: FC<PropsWithChildren> = props => {
  const { children } = props;

  const [paletteMode, setPaletteMode] = useLocalStorage<PaletteMode>("mode");

  const handleChangePaletteMode = useCallback((mode: PaletteMode) => {
    if (mode === PaletteMode.DARK) {
      document.documentElement.classList.add("dark");
      setPaletteMode(PaletteMode.DARK);
    } else {
      document.documentElement.classList.remove("dark");
      setPaletteMode(PaletteMode.LIGHT);
    }
  }, []);

  const togglePaletteMode = useCallback(() => {
    handleChangePaletteMode(paletteMode === PaletteMode.DARK ? PaletteMode.LIGHT : PaletteMode.DARK);
  }, [paletteMode]);

  useEffect(() => {
    if (
      (paletteMode && paletteMode === PaletteMode.DARK) ||
      (!paletteMode && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      handleChangePaletteMode(PaletteMode.DARK);
    } else {
      handleChangePaletteMode(PaletteMode.LIGHT);
    }
  }, []);

  return <ThemeContext.Provider value={{ mode: paletteMode, togglePaletteMode }}>{children}</ThemeContext.Provider>;
};

export default memo(ThemeProvider);
