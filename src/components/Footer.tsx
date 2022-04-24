import react from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background);
  color: var(--text);
  height: 5rem;
  max-height: 5rem;
  p {
    margin: 1.5rem;
  }
  div {
    display: flex;
  }
`

export default function Footer({shopName}:{shopName: string}) {
  return <StyledFooter>
    <div>
    <p>{shopName}</p>
    <p>Make your dreams come true.™</p>
    </div>
    <p>Copyleft &copy; All Wrongs Reserved. </p>
  </StyledFooter>
}