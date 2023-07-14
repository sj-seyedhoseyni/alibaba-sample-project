import { useContext } from "react";
import { ThemeContext, type ThemeContextProps } from "~/providers/ThemeProvider";

const useTheme = (): ThemeContextProps => {
  const { mode, togglePaletteMode } = useContext(ThemeContext);

  return { mode, togglePaletteMode };
};

export default useTheme;
