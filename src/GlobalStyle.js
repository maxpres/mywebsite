import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0 ;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

html{
  /* font-size: 10px; */
  font-size: 62.5%;
}

body{
    background: #000000;
    font-family: "Lobster", sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    color:#fff;
}

button {
  width: 50%;
  height: auto;
  margin: 2rem 0.3rem;
  padding: 1rem;
  font-size: 0.9rem;
  background-color: rgb(255, 255, 255);
  color: #000;
}

`;

export default GlobalStyle;
