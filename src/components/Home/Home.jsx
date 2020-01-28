import React from "react";
import HomeStyles from "./HomeStyles.jsx";

import { useAppState } from "../../statemachine";

const Home = () => {
  const { count, increment, externalData } = useAppState("counter");

  return (
    <HomeStyles>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment()}>CLick here</button>

      <button onClick={() => externalData.refresh()}>
        Get DATA {externalData.data}
      </button>

      {externalData.isFetching && <div>FETCHING</div>}
    </HomeStyles>
  );
};

export default Home;
