import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Item from '../components/Item';
import dreams from '../data/dreams.json';

// interface Dreams {
//   name: string;
//   description: string;
//   rating: number;
//   price: number;
//   img: string;
// }[];

const Inner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  > .sorting {
    display: flex;
    flex-flow: row wrap;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

function sorting(sortType: string) {
  let sorted = dreams;
  switch (sortType) {
    case "name":
      sorted = dreams.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      break;
    case "priceAsc":
      sorted = dreams.sort((a, b) => {
        return a.price - b.price
      })
      break;
    case "priceDesc":
      sorted = dreams.sort((a, b) => {
        return b.price - a.price
      })
      break;
    case "ratingAsc":
      sorted = dreams.sort((a, b) => {
        return a.rating - b.rating
      })
      break;
    case "ratingDesc":
      sorted = dreams.sort((a, b) => {
        return b.rating - a.rating
      })
      break;
    case "default":
      sorted = dreams.sort((a, b) => {
        return a.id - b.id
      })
  }
  return sorted;
};

export default function Products() {
  const [sortType, setSortType] = useState("default");
  return <Inner>
    <h1>Products</h1>
    <p>
      List of products
    </p>
    <div className="sorting">
      <p>
        Sort by:
      </p>
      <select name="sort" value={sortType} onChange={x => setSortType(x.target.value)}>
        <option value="default">Default</option>
        <option value="name">Name</option>
        <option value="priceAsc">Price</option>
        <option value="priceDesc">Price Descending</option>
        <option value="ratingAsc">Rating</option>
        <option value="ratingDesc">Rating Descending</option>
      </select>
    </div>
    <StyledMain>
      {
        sorting(sortType).map(x => {
          return <Item name={x.name} description={x.description} rating={x.rating} price={x.price} img={x.img} key={x.name} />
        })}
    </StyledMain>
  </Inner>;
}