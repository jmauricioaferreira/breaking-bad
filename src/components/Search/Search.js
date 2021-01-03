import React, { useState } from "react";
import { Container } from "../Search/styles";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <Container>
      <form action="">
        <input
          type="text"
          placeholder="Pesquisar personagens"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </Container>
  );
};

export default Search;
