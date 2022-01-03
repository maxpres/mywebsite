import React, { useContext } from "react";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";

import Nav from "./components/Nav/Nav";
import GlobalStyle from "./GlobalStyle";

function App() {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
