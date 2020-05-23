import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import snowboard from '../../assets/images/snowboard.png';
import wind from '../../assets/images/windsurfing.png';
import mountain from '../../assets/images/mountain.png';
import asia from '../../assets/images/asia.png';
import laptop from '../../assets/images/laptop.png';

interface OwnProps {}

type Props = OwnProps;
const backgroundImage = (src: any) => css`
  background-image: url(${src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
    ${backgroundImage(wind)}
  }
  .b {
    grid-column: 2;
    grid-row: 1;
    ${backgroundImage(asia)}
  }
  .c {
    grid-column: 1;
    grid-row: 2;
    ${backgroundImage(laptop)}
  }
  .d {
    grid-column: 2;
    grid-row: 2;
    ${backgroundImage(snowboard)}
  }
  .e {
    grid-column: 1/3;
    grid-row: 3;
    ${backgroundImage(mountain)}
  }
`;
const ImageCollage: FunctionComponent<Props> = (props) => {
  return (
    <Collage>
      <div className={'a'} />
      <div className={'b'} />
      <div className={'c'} />
      <div className={'d'} />
      <div className={'e'} />
    </Collage>
  );
};

export default ImageCollage;
