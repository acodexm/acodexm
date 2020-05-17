import React, { FunctionComponent } from 'react';
import ReactToggle from 'react-toggle';
import styled from 'styled-components';
import moon from '../../assets/svg/moon.svg';
import sun from '../../assets/svg/sun.svg';

const Toggle = styled.div`
  margin: auto 1rem;
  .react-toggle-track {
    background-image: url(${moon});
    background-position: right;
    background-repeat: no-repeat;
    background-color: #27536b;
  }
  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #27536b;
  }
  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #128d15;
  }
  .react-toggle--checked {
    .react-toggle-track {
      background-color: #128d15;
      background-image: url(${sun});
      background-repeat: no-repeat;
      background-position: left;
    }
  }
`;
const ThemeToggle: FunctionComponent<{ onChangeTheme(): void }> = ({ onChangeTheme }) => {
  const onToggle = () => {
    onChangeTheme();
  };

  return (
    <Toggle>
      <ReactToggle defaultChecked={false} icons={false} onChange={onToggle} />
    </Toggle>
  );
};

export default ThemeToggle;
