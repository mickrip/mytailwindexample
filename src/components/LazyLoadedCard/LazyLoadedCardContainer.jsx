import React from "react";
import LazyLoadedCardContainerStyles from "./LazyLoadedCardContainerStyles.jsx";

const LazyLoadedCardContainer = ({ children }) => {
  return (
    <LazyLoadedCardContainerStyles>{children}</LazyLoadedCardContainerStyles>
  );
};

export default LazyLoadedCardContainer;
