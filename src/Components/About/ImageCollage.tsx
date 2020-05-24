import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import snowboard from '../../assets/images/snowboard.png';
import wind from '../../assets/images/windsurfing.png';
import mountain from '../../assets/images/mountain.png';
import asia from '../../assets/images/asia.png';
import laptop from '../../assets/images/laptop.png';
import { invertColor } from '../../themes/colors';
import LoadingHandler from '../Loading/LoadingHandler';

interface OwnProps {}

type Props = OwnProps;
const backgroundImage = css`
  img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 200px;
    min-width: 150px;
    min-height: 150px;
    object-fit: cover;
  }
`;
const Collage = styled.div`
  margin: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(3, 200px);
  .a {
    grid-column: 1;
    grid-row: 1;
    ${backgroundImage}
  }
  .b {
    grid-column: 2;
    filter: ${invertColor};
    grid-row: 1;
    ${backgroundImage}
  }
  .c {
    grid-column: 1;
    grid-row: 2;
    ${backgroundImage}
  }
  .d {
    grid-column: 2;
    grid-row: 2;
    ${backgroundImage}
  }
  .e {
    grid-column: 1/3;
    grid-row: 3;
    ${backgroundImage}
  }
`;
const ImageCollage: FunctionComponent<Props> = (props) => {
  return (
    <Collage>
      <div className={'a'}>
        <LoadingHandler>
          <img src={wind} alt="" />
        </LoadingHandler>
      </div>
      <div className={'b'}>
        <LoadingHandler>
          <img src={asia} alt="" />
        </LoadingHandler>
      </div>
      <div className={'c'}>
        <LoadingHandler>
          <img src={laptop} alt="" />
        </LoadingHandler>
      </div>
      <div className={'d'}>
        <LoadingHandler>
          <img src={snowboard} alt="" />
        </LoadingHandler>
      </div>
      <div className={'e'}>
        <LoadingHandler>
          <img src={mountain} alt="" />
        </LoadingHandler>
      </div>
    </Collage>
  );
};

export default ImageCollage;
