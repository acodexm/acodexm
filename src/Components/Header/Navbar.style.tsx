import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { backgroundColor, highlightColor, linkColor, textColor } from '../../themes/colors';

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
  text-transform: uppercase;
  background-color: ${backgroundColor};
  padding: 0.5rem 2.5rem;
  position: absolute;
  z-index: 10;
  height: 10vh;
  width: 100%;
  ${({ sticky }) =>
    sticky
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          box-shadow: 1px 1px 1px #222;
          animation: ${moveDown} 0.5s ease-in-out;
        `
      : ''};
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: flex;
  }
`;
const Navbox = styled.div<{ open?: boolean }>`
  display: flex;
  height: auto;
  align-items: center;
  @media (max-width: 1200px) {
    ul {
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
    }
    position: absolute;
    width: 100%;
    background-color: ${backgroundColor};
    transition: all 0.3s ease-in-out;
    left: 0;
    top: 8vh;
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;

const Hamburger = styled.div<{ open?: boolean }>`
  background-color: ${textColor};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${textColor};
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;
const rotate = keyframes`
  0% {
    transform: rotateY(360deg);
}
  100% {
    transform: rotateY(0rem);
}
`;
const NavLogo = styled.div<{ sticky?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  h1 {
    color: ${textColor};
  }
  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    ${(props) =>
      props.sticky
        ? css`
            animation: ${rotate} 0.7s ease-in;
          `
        : ''}
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
const NavLink = styled.li`
  text-decoration: none;
  color: ${linkColor};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    content: '.';
    color: transparent;
    background: ${highlightColor};
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: ${highlightColor};
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

export { NavLink, NavLinks, NavLogo, Nav, Navbox, Hamburger, Toggle };
