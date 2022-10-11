import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../styles/colors";
import { Title } from "../styles/title";

const NavbarStyted = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 30px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

export function Navbar() {
  return (
    <NavbarStyted>
      <Logo>
        PizzaShopMinMin{" "}
        <span role="img" aria-label="pizza slice">
          🍕
        </span>
      </Logo>
    </NavbarStyted>
  );
}
