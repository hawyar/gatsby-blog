import styled from "styled-components"

export const HeroWrapper = styled.section`
  grid-column: 2 / span 12;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: blue;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    background-color: red;
  }
`
