import React, { FunctionComponent } from 'react';
import Logo from '../../assets/icons/acodexm.png';
import styled, { css, keyframes } from 'styled-components';
interface Section {
  name: string;
  scrollTo(): void;
}
interface Props {
  sticky: boolean;
  sections: Section[];
}
const moveDown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`;
const Nav = styled.nav<{ sticky: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  position: absolute;
  z-index: 1;
  width: 100%;
  ${({ sticky }) =>
    sticky
      ? css`
          background: #333;
          position: fixed;
          top: 0;
          left: 0;
          box-shadow: 1px 1px 1px #222;
          animation: ${moveDown} 0.5s ease-in-out;
        `
      : ''}
`;

const rotate = keyframes`
  0% {
    transform: rotateY(360deg);
}
  100% {
    transform: rotateY(0rem);
}
`;
const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    animation: ${rotate} 0.7s ease-in-out 0.5s;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin: 0.4rem 1rem 0 0;
    padding: 0 0.3rem;
    cursor: pointer;
  }
`;
const Navbar: FunctionComponent<Props> = ({ sticky, sections }) => {
  return (
    <Nav sticky={sticky}>
      <NavLogo>
        {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
        <h1> Acodexm</h1>
      </NavLogo>
      <NavLinks>
        {sections.map(({ name, scrollTo }, i) => (
          <li key={i} onClick={scrollTo}>
            {name}
          </li>
        ))}
      </NavLinks>
    </Nav>
  );
};
export default Navbar;
