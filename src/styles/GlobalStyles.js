import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

html {
  background-color: #2A292E;
}


h1,
h2,
h3,
h4,
p {
  margin: 0px;
  color: #e1e1e1;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
`;
