import React from "react";
import LazyLoadedCardContainerStyles from "./CardContainerStyles.jsx";

const CardContainer = ({ children }) => {
  return (
    <LazyLoadedCardContainerStyles>{children}</LazyLoadedCardContainerStyles>
  );
};

export default CardContainer;
