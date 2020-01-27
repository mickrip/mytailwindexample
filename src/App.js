//import "./styles/tailwind-built.css";
import React from "react";
import AppStateWrapper from "./statemachine/AppStateWrapper";
import useScrollPosition from "./state/useScrollPosition";
import Home from "./components/Home/Home";
import useCounter from "./state/useCounter";

import persistLocalStorage from "./statemachine/middleware/persistLocalStorage";

const containers = {
  scrollposition: useScrollPosition,
  counter: useCounter
};

const persistences = [{ container: "counter", key: "count" }];

function App() {
  return (
    <AppStateWrapper
      containers={containers}
      middleware={[persistLocalStorage(persistences)]}
    >
      <Home />
    </AppStateWrapper>
  );
}

export default App;
