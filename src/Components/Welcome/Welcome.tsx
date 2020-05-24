import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic';
import Section from '../Section/Section';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { cardColor, helloColor } from '../../themes/colors';
import { useTranslation } from 'react-i18next';

interface Props {
  element: React.RefObject<HTMLDivElement>;
}
const WelcomeSection = styled(Section)`
  padding-top: 100px;
  height: 100vh;
  align-content: center;
  justify-content: center;
`;
const Hello = styled.label`
  & {
    background-image: ${cardColor};
    border-radius: 3px;
    position: relative;
    left: 50%;
    width: max-content;
    padding: 0 1rem;
    height: 3rem;
    font-size: 1.6rem;
    @media (max-width: 1100px) {
      font-size: 1rem;
      height: 2rem;
    }
  }
  &:after {
    content: '';
    width: 0;
    position: absolute;
    left: 1rem;
    top: 3rem;
    @media (max-width: 1100px) {
      top: 2rem;
    }
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
  font-size: 2rem;
  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }
  #name {
    @media (max-width: 1100px) {
      font-size: 2rem;
    }
    font-size: 4rem;
    font-weight: bold;
  }
`;
const Welcome: FunctionComponent<Props> = ({ element }) => {
  const { t } = useTranslation();
  return (
    <WelcomeSection mode={'primary'}>
      <Container fluid>
        <Row justifyContent={'center'} alignItems={'center'} style={{ maxWidth: '1500px', margin: 'auto' }}>
          <Col sm={10} lg={6}>
            <ProfilePic />
          </Col>
          <Col sm={12} lg={6}>
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
