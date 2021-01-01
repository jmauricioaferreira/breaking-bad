import React from "react";
import { Container } from "../Characters/styles";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Container>
      {items.map((item) => (
        <h1 key={item.char_id}>{item.name}</h1>
      ))}
      ;
    </Container>
  );
};

export default CharacterGrid;
