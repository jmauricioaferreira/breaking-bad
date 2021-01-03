import React from "react";
import { Container } from "../CharacterCard/styles";

const CharacterCard = ({ item }) => {
  return (
    <Container>
      <div>
        <div>
          <img src={item.img} alt="" />
        </div>
        <div>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default CharacterCard;
