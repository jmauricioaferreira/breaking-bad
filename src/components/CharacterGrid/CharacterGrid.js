import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Container } from "../CharacterGrid/styles";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Container>
      {items.map((item) => (
        <CharacterCard key={item.char_id} item={item}></CharacterCard>
      ))}
      ;
    </Container>
  );
};

export default CharacterGrid;
