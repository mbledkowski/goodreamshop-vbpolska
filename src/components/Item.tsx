import react from 'react';
import styled from 'styled-components';

const Inner = styled.section`
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--third-color);
  width: 28rem;
  max-width: 94vw;
  height: 54rem;
  border-radius: 2rem;
  margin: 2rem;
  border: var(--second-color) solid .5rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.4);
  > img {
    border-radius: 1.5rem;
    width: 100%;
    aspect-ratio: 448/608;
  }
  .bottom-card {
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    bottom: 0;
    padding: 2rem;
    > h1 {
      color: white;
      font-size: 2rem;
      line-height: 1rem;
    }
  }
  @media (max-width: 30rem) {
    height: unset;
    margin: 2rem 0;
  }
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  position: relative;
  top: -4rem;
  margin: 0 3% -4rem;
  width: 94%;
  background: var(--color);
  border-radius: 1.5rem;
  height: 3rem;
  border: none;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.4);
  &:active {
    box-shadow: none;
    transform: translateY(.4rem);
  }
`

interface Props {
  name: string;
  description: string;
  rating: number;
  price: number;
  img: string;
}

export default function Item({ name, description, rating, price, img }: Props) {
  return <Inner>
    <img src={img + "?fit=crop&w=448&h=608"} alt={name + " image"}/>
    <StyledButton>Buy Now</StyledButton>
    <div className="bottom-card">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>
        <span>Rating: <b>{rating}/5</b> </span>
        <span>Price: <b>{price}¢</b> </span>
      </p>
    </div>
  </Inner>
};