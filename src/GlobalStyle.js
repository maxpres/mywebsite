import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0 ;
    box-sizing: border-box;

}

body{
    background: #000000;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    color:#fff;
}

button {
  width: 50%;
  height: auto;
  margin: 20px 3px;
  padding: 10px;
  font-size: 0.9rem;
  background-color: rgb(255, 255, 255);
  color: #000;
}

`;

export default GlobalStyle;
