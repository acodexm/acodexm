import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Toggle from 'react-toggle';
// import { ReactComponent as Pl } from 'svg-country-flags/svg/pl.svg';
// import { ReactComponent as En } from 'svg-country-flags/svg/en.svg';

enum Language {
  English = 'en',
  Polski = 'pl'
}

const LanguageToggle: FunctionComponent<{}> = () => {
  const { i18n } = useTranslation();
  const [state, setState] = useState(false);

  const onToggle = (event: any) => {
    console.log(event);
    // setState(event);
    // i18n.changeLanguage(event ? Language.Polski : Language.English);
  };

  function changeLanguage(lng: Language) {
    return () => {
      i18n.changeLanguage(lng);
    };
  }

  return (
    <Toggle
      defaultChecked={state}
      // icons={{
      //   checked: <Pl />,
      //   unchecked: <En />
      // }}
      onChange={onToggle}
    />
  );
};

export default LanguageToggle;
