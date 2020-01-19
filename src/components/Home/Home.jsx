import React from "react";
import HomeStyles from "./HomeStyles.jsx";
import Card from "../Card/Card";
import CardContainer from "../Card/CardContainer";

const arrayOfThings = [...Array(800).keys()];

const Home = () => {
  return (
    <HomeStyles>
      <CardContainer>
        {arrayOfThings.map((v, k) => {
          return <Card key={k} />;
        })}
      </CardContainer>
    </HomeStyles>
  );
};

export default Home;
