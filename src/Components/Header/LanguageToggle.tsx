import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactToggle from 'react-toggle';
import pl from '../../assets/svg/pl.svg';
import en from '../../assets/svg/en.svg';
import styled from 'styled-components';

enum Language {
  English = 'en',
  Polski = 'pl'
}
const Toggle = styled.div`
  .react-toggle-track {
    background-image: url(${pl});
    background-position: right;
    background-repeat: no-repeat;
  }
  .react-toggle--checked {
    .react-toggle-track {
      background-image: url(${en});
      background-repeat: no-repeat;
    }
  }
`;

const LanguageToggle: FunctionComponent = () => {
  const { i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === Language.English ? Language.Polski : Language.English);
  };

  function changeLanguage(lng: Language) {
    return () => {
      i18n.changeLanguage(lng);
    };
  }

  return (
    <Toggle>
      <ReactToggle defaultChecked={false} icons={false} onChange={onToggle} />
    </Toggle>
  );
};

export default LanguageToggle;
