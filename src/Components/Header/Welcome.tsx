import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic';
import Section from '../Section/Section';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { backgroundColor, section1Color } from '../../themes/colors';

interface Props {
  element: React.RefObject<HTMLDivElement>;
}
const WelcomeSection = styled(Section)`
  background-color: ${section1Color};
  padding-top: 100px;
  height: 100vh;
`;
const HelloWorld = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Welcome: FunctionComponent<Props> = ({ element }) => {
  return (
    <WelcomeSection>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <ProfilePic />
          </Col>
          <Col xs={12} lg={6}>
            <HelloWorld ref={element}>
              <h1>Adam Kamiński</h1>
              <h2>Creative web developer</h2>
            </HelloWorld>
          </Col>
        </Row>
      </Container>
    </WelcomeSection>
  );
};

export default Welcome;
