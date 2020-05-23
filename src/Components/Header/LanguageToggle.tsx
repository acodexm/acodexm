import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactToggle from 'react-toggle';
import pl from '../../assets/svg/pl.svg';
import en from '../../assets/svg/en.svg';
import styled from 'styled-components';
import { useSetStateWithStorage } from '../../hooks/useSetState';
import LocalStorage from '../../utils/localStorage';

enum Language {
  English = 'en',
  Polski = 'pl'
}
const Toggle = styled.div`
  .react-toggle-track {
    background-image: url(${en});
    background-position: right;
    background-repeat: no-repeat;
  }
  .react-toggle--checked {
    .react-toggle-track {
      background-image: url(${pl});
      background-position: left;
      background-repeat: no-repeat;
    }
  }
`;
const isChecked = () => (LocalStorage.getItem('APPLICATION_LANGUAGE') || { lang: 'en' }).lang === 'en';
const LanguageToggle: FunctionComponent = () => {
  const { i18n } = useTranslation();
  const [{ lang }, setLang] = useSetStateWithStorage({ lang: Language.English }, 'APPLICATION_LANGUAGE');
  const onToggle = () => {
    const nextLang = lang === Language.Polski ? Language.English : Language.Polski;
    setLang({ lang: nextLang });
    i18n.changeLanguage(nextLang);
  };

  return (
    <Toggle>
      <ReactToggle defaultChecked={isChecked()} icons={false} onChange={onToggle} />
    </Toggle>
  );
};

export default LanguageToggle;
