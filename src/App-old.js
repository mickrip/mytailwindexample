//import "./styles/tailwind-built.css";
import React from "react";
import AppStateProvider from "./statemachine/AppStateProvider";
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
    <AppStateProvider
      containers={containers}
      middleware={[persistLocalStorage(persistences)]}
    >
      <Home />
    </AppStateProvider>
  );
}

export default App;
