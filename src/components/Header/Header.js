import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
    </Container>
  );
};

export default Header;
