import React, { FunctionComponent, useState } from 'react';
import acodexm from '../../assets/images/acodexm.png';
import profile_lines from '../../assets/images/profile_lines.png';
import styled from 'styled-components';
import { backgroundColor, section1Color } from '../../themes/colors';
import { useSetState } from '../../hooks/useSetState';
import LoadingHandler from '../Loading/LoadingHandler';
interface OwnProps {}

type Props = OwnProps;
const ProfilePicture = styled.div`
  display: flex;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 800px;
    min-width: 150px;
    min-height: 150px;
  }
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: radial-gradient(transparent 20%, ${section1Color} 60%);
  }
  :after {
    content: '';
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background-image: url(${profile_lines});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
const ProfilePic: FunctionComponent<Props> = (props) => {
  return (
    <LoadingHandler>
      <ProfilePicture>
        <img src={acodexm} alt="acodexm" />
      </ProfilePicture>
    </LoadingHandler>
  );
};

export default ProfilePic;
