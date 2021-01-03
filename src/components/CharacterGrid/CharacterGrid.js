import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Container } from "../CharacterGrid/styles";
import Spinner from "../Spinner/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
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
