import { useEffect, useState } from "react";

const useObserveAppState = (state, node, path) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const nodeData = state.get(node);

    if (path) {
      if (JSON.stringify(data) !== JSON.stringify(nodeData[path])) {
        setData(nodeData[path]);
      }
    } else {
      if (JSON.stringify(data) !== JSON.stringify(nodeData)) {
        setData(nodeData);
      }
    }
  }, [state]);

  return data;
};

export default useObserveAppState;
