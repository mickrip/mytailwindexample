import { useState, useEffect } from "react";
import usePromise from "../statemachine/hooks/usePromise";

const fakePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("win");
    }, 1500);
  });
};

const useCounter = (dispatch, state) => {
  const [count, setCount] = useState(0);
  const externalData = usePromise(fakePromise);

  useEffect(() => {
    if (state.localStorageInit) {
      setCount(state.localStorageInit.counter.count);
    }
  }, [state.localStorageInit]);

  return {
    externalData,
    setCount,
    increment: () => {
      setCount(count + 1);
    },
    count,
    foocount: count
  };
};

export default useCounter;
