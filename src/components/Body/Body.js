import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "../CharacterGrid/CharacterGrid";
import { Container } from "./styles";
import Search from "../Search/Search";

const Body = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}
      `);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <Container>
      <div>
        <Search getQuery={(q) => setQuery(q)} />
      </div>
      <div>
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </Container>
  );
};

export default Body;
