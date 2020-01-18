import "./styles/tailwind-built.css";
import React from "react";
import AppStateWrapper from "./statemachine/AppStateWrapper";
import useScrollPosition from "./state/useScrollPosition";
import Home from "./components/Home/Home";

const containers = { scrollposition: useScrollPosition };

function App() {
  return (
    <AppStateWrapper containers={containers}>
      <Home />
    </AppStateWrapper>
  );
}

export default App;
