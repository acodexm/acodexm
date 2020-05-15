import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Toggle from 'react-toggle';

const ThemeToggle: FunctionComponent<{ onChangeTheme(): void }> = ({ onChangeTheme }) => {
  const [state, setState] = useState(false);

  const onToggle = () => {
    setState(!state);
    onChangeTheme();
  };

  return (
    <Toggle
      defaultChecked={state}
      icons={{
        checked: <FontAwesomeIcon icon={faSun} />,
        unchecked: <FontAwesomeIcon icon={faMoon} />
      }}
      onChange={onToggle}
    />
  );
};

export default ThemeToggle;
