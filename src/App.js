import React from 'react';
import { Navbar } from './navbar/Navbar';
import { Banner } from './banner/Banner';
import { Menu } from './menu/Menu';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
