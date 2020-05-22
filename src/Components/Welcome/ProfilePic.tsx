import React, { FunctionComponent } from 'react';
import acodexm from '../../assets/images/acodexm.png';
import styled from 'styled-components';
interface OwnProps {}

type Props = OwnProps;
const ProfilePicture = styled.div`
  display: flex;
  float: left;
  margin: 3rem;
  img {
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 800px;
    min-width: 150px;
    min-height: 150px;
  }
`;
const ProfilePic: FunctionComponent<Props> = (props) => {
  return (
    <ProfilePicture>
      <img src={acodexm} alt="acodexm" />
    </ProfilePicture>
  );
};

export default ProfilePic;
