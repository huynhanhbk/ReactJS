import React, { useState } from 'react';
import { Navbar } from './navbar/Navbar';
import { Banner } from './banner/Banner';
import { Menu } from './menu/Menu';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <div>{openFood}</div>
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
