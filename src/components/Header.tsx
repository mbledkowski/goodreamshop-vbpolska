import react from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Inner = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: var(--background);
  height: 4rem;
`;
const Title = styled.h1`
  margin: 1rem;
  font-size: 1.5rem;
  color: var(--text)
`;

export default function Header(props: {shopName:string}) {
  return <Inner>
    <Link to="/"><Title>{props.shopName}</Title></Link>
    <Navbar/>
  </Inner>
};