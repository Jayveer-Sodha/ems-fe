import React from "react";
import HeaderComponent from "./components/headerComponent/HeaderComponent";

import { Paper } from "@material-ui/core";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <React.Fragment>
        <Paper style={{ height: "100vh" }}>
          <HeaderComponent />
        </Paper>
      </React.Fragment>
    </ContextProvider>
  );
}

export default App;
