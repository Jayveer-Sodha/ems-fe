import React from "react";
import HeaderComponent from "./components/headerComponent/HeaderComponent";

import { Paper } from "@material-ui/core";
import { ColorContextProvider } from "./components/headerComponent/ColorModeContext";

function App() {
  return (
    <ColorContextProvider>
      <React.Fragment>
        <Paper style={{ height: "100vh" }}>
          <HeaderComponent />
        </Paper>
      </React.Fragment>
    </ColorContextProvider>
  );
}

export default App;
