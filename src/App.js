import React, { useState } from 'react';
import { Navbar } from './navbar/Navbar';
import { Banner } from './banner/Banner';
import { Menu } from './menu/Menu';
import { FoodDialog } from './foodDialog/FoodDialog';
import { GlobalStyle } from './styles/GlobalStyle';
import { Order } from './order/Order';
import { useOpenFood } from './hooks/useOpenFood';
import { useOrders } from './hooks/useOrders';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
