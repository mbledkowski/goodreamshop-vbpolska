import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Inner = styled.nav`
  display: flex;
  > ul {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
    margin: auto;
    padding: 0;
    > li {
      margin: 0 1rem;
    }
  }
  @media(max-width: 512px) {
    > ul {
      flex-flow: row wrap;
    }
  }
`;

const StyledLi = styled.li`
  > a {
    text-decoration: none;
  }
`;

const FirstLi = styled(StyledLi)`
  > a {
    color: var(--color);
  }
`;

const ThirdLi = styled(StyledLi)`
  > a {
    color: var(--second-color);
  }
`;

const SecondLi = styled(StyledLi)`
  > a {
    color: var(--third-color);
  }
`;

export default function Navbar() {
  return <Inner>
    <ul>
      <FirstLi><Link to="/">Home</Link></FirstLi>
      <SecondLi><Link to="/products">Products</Link></SecondLi>
      <ThirdLi><Link to="/about">About</Link></ThirdLi>
    </ul>
  </Inner>
};