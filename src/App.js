import React, { useContext } from "react";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";

import Nav from "./components/Nav/Nav";
import GlobalStyle from "./GlobalStyle";
import { Helmet } from "react-helmet";

function App() {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Max Pres | Front End Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="testing" />
      </Helmet>
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
