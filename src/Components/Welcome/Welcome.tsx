import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic';
import Section from '../Section/Section';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { cardColor, helloColor, section1Color } from '../../themes/colors';
import { useTranslation } from 'react-i18next';

interface Props {
  element: React.RefObject<HTMLDivElement>;
}
const WelcomeSection = styled(Section)`
  background-color: ${section1Color};
  padding-top: 100px;
  height: 100vh;
  align-content: center;
`;
const Hello = styled.label`
  & {
    background-image: ${cardColor};
    border-radius: 3px;
    position: relative;
    left: 50%;
    width: 6rem;
    height: 2rem;
  }
  &:after {
    content: '';
    width: 0;
    position: absolute;
    left: 1rem;
    top: 2rem;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid ${helloColor};
  }
`;
const HelloWorld = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  #name {
    font-size: xx-large;
    font-weight: bold;
  }
  span {
    font-size: larger;
  }
`;
const Welcome: FunctionComponent<Props> = ({ element }) => {
  const { t } = useTranslation();
  return (
    <WelcomeSection>
      <Container>
        <Row alignItems={'center'} justifyContent={'center'}>
          <Col xs={12} lg={8}>
            <ProfilePic />
          </Col>
          <Col xs={12} lg={4}>
            <HelloWorld ref={element}>
              <Hello htmlFor={'name'}>{t('welcome.hello')}</Hello>
              <div id={'name'}>Adam Kamiński</div>
              <span>{t('welcome.dev')}</span>
            </HelloWorld>
          </Col>
        </Row>
      </Container>
    </WelcomeSection>
  );
};

export default Welcome;
