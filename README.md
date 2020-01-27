# TailWind RCA Example

https://mytailwindexample.mickrip.now.sh/


# react-app-state

React-app state management using hooks.

## Example 1: A simple counter

[![Edit react-app-state simple boilerplate example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elastic-mayer-uim7m?fontsize=14&hidenavigation=1&theme=dark)

```jsx harmony
// a simple 'counter' hook
const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
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

```

### Things to note here

- state can only be mutated with functions (ie `increment`/`decrement`)
- You can choose the shape of the returning object. (if you wish to separate values and functions for example.)
- You have the complete power of hooks from a state container. ie. `useEffect` and `useReducer`. Custom hooks are also possible.

## Example 2: Accessing all state from a state container

I've managed to write whole apps without using this technique, but it's there if you need it.

[![Edit react-app-state example #2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-app-state-example-1-2xzmg?fontsize=14&hidenavigation=1&theme=dark)

```jsx harmony
// a simple counter hook
const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return {
    increment,
    decrement,
    count
  };
};

// another hook. 1st parameter passes down state
const useAnotherStateContainer = state => {
  const stateCounter = (state.counter && state.counter.count) || 0;

  useEffect(() => {
    console.log("new counter state", stateCounter);
  }, [stateCounter]);

  return {
    countDoubled: stateCounter * 2
  };
};

// Define some state containers
const containers = {
  counter: useCounter,
  example: useAnotherStateContainer
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
  const { count, increment, decrement } = useAppState("counter");
  const { countDoubled } = useAppState("example");

  return (
    <div>
      count: {count} (doubled: {countDoubled})
      <br />
      <button onClick={increment}>up</button>
      <button onClick={decrement}>down</button>
    </div>
  );
};
```

## Example 3: Async/Promises

Async data handling should be fairly straightforward. You're managing
state along the same lines as if you were doing it inside a component. 

[![Edit react-app-state example #3](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-app-state-example-2-31xcy?fontsize=14&hidenavigation=1&theme=dark)

```jsx harmony
const getData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("We have data");
    }, 1000);
  });

// This state container contains a promise.
// usePromise shouldn't run anything.
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
      <div>{dataApi.data}</div>
      <button onClick={() => refreshDataApi()}>Refresh</button>
      {dataApi.isFetching && <div>FETCHING</div>}
    </>
  );
};

```


