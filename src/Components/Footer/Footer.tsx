import React from 'react';
import styled from 'styled-components';
import { backgroundColor, textColor } from '../../themes/colors';
import { useTranslation } from 'react-i18next';

const t = (msg: string) => msg;

const SFooter = styled.footer`
  a {
    color: ${textColor};
  }
  background: ${backgroundColor};
  box-shadow: 0 0.3rem 0.3rem rgba(0, 26, 254, 0.31);
  padding: 1rem;
  margin-top: auto;
  text-align: end;
  z-index: 20;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <SFooter>
      <a href="https://github.com/acodexm">{t('my.github')}</a>
    </SFooter>
  );
};

export default Footer;
