import React from "react";
import styled from "styled-components";
import { foods } from "../data/FoodData";
import { FoodGrid, Food, FoodLabel } from "./FoodGrid";
import { formatPrice } from "../data/FoodData";

const MenuStyled = styled.div`
  height: auto;
  margin: 0px 400px 50px 20px;
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {/* Trả về mảng thuộc tính đếm được của các cặp [key, value] với object đã cho, tương tự như dùng vặp lặp for...in. 
      Object.entries() là một method tạo một nested array với key/value của một Object.*/}
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
