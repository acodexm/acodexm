import React, { FunctionComponent, useEffect, useState } from 'react';
import Logo from '../../assets/images/acodexm.png';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Toggle, Hamburger, Nav, Navbox, NavLink, NavLinks, NavLogo } from './Navbar.style';

interface Section {
  name: string;
  scrollTo(): void;
}
interface Props {
  sticky: boolean;
  sections: Section[];
  onChangeTheme(): void;
}

const Navbar: FunctionComponent<Props> = ({ sticky, sections, onChangeTheme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [lock, setLock] = useState(false);
  useEffect(() => setNavbarOpen(false), [sticky]);
  const toggle = () => setLock((prevState) => !prevState);

  return (
    <Nav sticky={(sticky || lock) && window.scrollY > 100} onMouseEnter={toggle} onMouseLeave={toggle}>
      <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>{navbarOpen ? <Hamburger open /> : <Hamburger />}</Toggle>
      <NavLogo sticky={sticky} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        <img src={Logo} alt="logo" className="navbar--logo" />
        <h1> Acodexm</h1>
      </NavLogo>
      <Navbox open={navbarOpen}>
        <NavLinks>
          {sections.map(({ name, scrollTo }, i) => (
            <NavLink key={i} onClick={scrollTo}>
              {name}
            </NavLink>
          ))}
        </NavLinks>
      </Navbox>
      <div style={{ display: 'flex' }}>
        <ThemeToggle onChangeTheme={onChangeTheme} />
        <LanguageToggle />
      </div>
    </Nav>
  );
};
export default Navbar;
