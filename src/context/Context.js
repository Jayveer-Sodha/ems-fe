import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { createContext } from "react";
import { orange, red } from "@material-ui/core/colors";
export const Context = createContext({
  toggleMode: () => {},
  darkMode: true,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
  open: false,
});

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const context = {
    toggleMode: () => setDarkMode(!darkMode),
    darkMode,
    handleDrawerOpen: () => {
      setOpen(true);
    },

    handleDrawerClose: () => {
      setOpen(false);
    },
    open,
  };
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: red,
      secondary: orange,
      
    },
  });

  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
