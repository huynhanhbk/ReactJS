import React from 'react';
import styled from 'styled-components';
import { foods } from '../data/FoodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
  border: 2px solid black;
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function Menu() {
  return (
    <MenuStyled>
      {/* Trả về mảng thuộc tính đếm được của các cặp [key, value] với object đã cho, tương tự như dùng vặp lặp for...in. 
      Object.entries() là một method tạo một nested array với key/value của một Object.*/}
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food img={food.img}>
                <FoodLabel>{food.name}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
