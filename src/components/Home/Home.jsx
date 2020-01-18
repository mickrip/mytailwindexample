import React from "react";
import HomeStyles from "./HomeStyles.jsx";
import LazyLoadedCard from "../LazyLoadedCard/LazyLoadedCard";
import LazyLoadedCardContainer from "../LazyLoadedCard/LazyLoadedCardContainer";

const arrayOfThings = [...Array(800).keys()];

const Home = () => {
  return (
    <HomeStyles>
      <LazyLoadedCardContainer>
        {arrayOfThings.map((v, k) => {
          return <LazyLoadedCard key={k} />;
        })}
      </LazyLoadedCardContainer>
    </HomeStyles>
  );
};

export default Home;
