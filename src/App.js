import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <Header />
      <Body />

      <GlobalStyles />
    </>
  );
};

export default App;
