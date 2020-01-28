//import "./styles/tailwind-built.css";
import React, { useEffect, useState } from "react";
import AppStateProvider from "./statemachine/AppStateProvider";
import useScrollPosition from "./state/useScrollPosition";
import Home from "./components/Home/Home";
//import useCounter from "./state/useCounter";
import persistLocalStorage from "./statemachine/middleware/persistLocalStorage";
import { useAppState } from "./statemachine";
import usePromise from "./statemachine/hooks/usePromise";

const useCounter = (state, dispatch) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    dispatch({ type: "hello", payload: "desc" });
    setCount(count + 1);
  };
  const decrement = () => {
    dispatch({ type: "hello", payload: "desc" });
    setCount(count - 1);
  };

  return {
    increment,
    decrement,
    count
  };
};

// Define some state containers
const containers = {
  counter: useCounter
};

// Wrap your app with AppStateProvider
const App = () => {
  return (
    <AppStateProvider containers={containers}>
      <MyComponent />
    </AppStateProvider>
  );
};

// A child component
const MyComponent = () => {
  // hooks remain persistent app-wide
  const { count, increment, decrement } = useAppState("counter");

  return (
    <>
      count: {count}
      <br />
      <button onClick={increment}>up</button>
      <button onClick={decrement}>down</button>
    </>
  );
};

export default App;
