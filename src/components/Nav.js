import React from "react"
import { NavWrapper } from "../elements"
import { Link } from "gatsby"
import styled from "styled-components"
import { Feather } from "react-feather"
import { ButtonWrapper } from "../elements"

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <Feather color="black" size={24} />
      </Link>
      <LinksWrapper>
        <li>
          <Link to="/design-lab">Design lab</Link>
        </li>
        <li>
          <a href="https://github.com/hawyar">GitHub</a>
        </li>
        <li>
          <Link>
            <ButtonWrapper>Let's talk</ButtonWrapper>
          </Link>
        </li>
      </LinksWrapper>
    </NavWrapper>
  )
}

const LinksWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    margin-right: 2rem;

    :last-child {
      margin-right: 0;
    }

    a {
      font-size: 1rem;

      color: ${props => props.theme.color.blue};
      text-decoration: none;
      font-weight: 600;
      letter-spacing: -0.03rem;
    }
  }

  @media screen ();
`

export default Nav
