import react from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Inner = styled.header`
  display: flex;
  flex-flow: row nowrap;
  background-color: var(--background);
`;
const Title = styled.h1`
  margin: 1rem;
  font-size: 1.5rem;
  color: white;
`;

export default function Header(props: {shopName:string}) {
  return <Inner>
    <Link to="/"><Title>{props.shopName}</Title></Link>
    <Navbar/>
  </Inner>
};