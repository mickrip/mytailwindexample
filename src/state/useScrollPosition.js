import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState();

  const handleThing = throttle(() => {
    setScrollY(window.scrollY);
  }, 1000);

  useEffect(() => {
    window.addEventListener("scroll", handleThing);
    handleThing();
    return () => {
      window.removeEventListener("scroll", handleThing);
    };
  }, [handleThing]);
  return {
    scrollY
  };
};

export default useScrollPosition;
