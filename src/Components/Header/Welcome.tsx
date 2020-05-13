import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const WelcomeSection = styled.section`
  background-color: #1f1f1f;
  background-attachment: fixed;
  background-size: cover;
  line-height: 1.8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
interface Props {
  element: React.RefObject<HTMLDivElement>;
}
const Welcome: FunctionComponent<Props> = ({ element }) => {
  return (

      <WelcomeSection>
        <div ref={element}>takie tam</div>
      </WelcomeSection>
  );
};

export default Welcome;
