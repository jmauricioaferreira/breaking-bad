import React, { useState, useEffect } from "react";
import axios from "axios";

import CharacterGrid from "../CharacterGrid/CharacterGrid";

const Body = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters
      `);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Body;
