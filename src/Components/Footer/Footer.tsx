import React from 'react';
import styled from 'styled-components';

const getMessage = (msg: string) => msg;

const SFooter = styled.footer`
  a {
    color: #efefef;
  }
  background: #290000;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 26, 254, 0.31);
  padding: 1rem;
  margin-top: auto;
  text-align: end;
  z-index: 1000;
`;

const Footer = () => {
  return (
    <SFooter>
      <a href="https://github.com/acodexm">{getMessage('my.github')}</a>
    </SFooter>
  );
};

export default Footer;
