//import "./styles/tailwind-built.css";
import React, { useEffect, useState } from "react";
import AppStateProvider from "./statemachine/AppStateProvider";
import useScrollPosition from "./state/useScrollPosition";
import Home from "./components/Home/Home";
//import useCounter from "./state/useCounter";
import persistLocalStorage from "./statemachine/middleware/persistLocalStorage";
import { useAppState } from "./statemachine";
import usePromise from "./statemachine/hooks/usePromise";

// fake promise
const getData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("We have data");
    }, 1000);
  });

// only has a promise
const useExampleContainer = () => {
  const [dataApi, refreshDataApi] = usePromise(getData);
  return { dataApi, refreshDataApi };
};

// Define some state containers
const containers = {
  example: useExampleContainer
};

// Wrap your app with AppStateProvider
function App() {
  return (
    <AppStateProvider containers={containers}>
      <MyComponent />
    </AppStateProvider>
  );
}

// A child component
const MyComponent = () => {
  const { dataApi, refreshDataApi } = useAppState("example");

  useEffect(() => {
    refreshDataApi();
  }, [refreshDataApi]);

  return (
    <>
      <div>{dataApi.data || " "}</div>
      <button onClick={() => refreshDataApi()}>Refresh</button>
      {dataApi.isFetching && <div>FETCHING</div>}
    </>
  );
};

export default App;
