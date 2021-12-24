import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { createContext } from "react";
export const ColorModeContext = createContext({
  toggleMode: () => {},
  darkMode: true,
});

export const ColorContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleMode: () => setDarkMode(!darkMode),
      darkMode,
    }),
    [darkMode]
  );
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
