import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import edu_lines from '../../assets/images/edu_lines.png';
import net from '../../assets/images/net.png';
import network from '../../assets/svg/network.svg';
import Section from '../Section/Section';
import { cardColor, invertColor, section2Color } from '../../themes/colors';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import theme from 'styled-theming';

const EduSection = styled(Section)`
  background-color: ${section2Color};
`;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const Background = styled.div`
  & {
    position: relative;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media (min-width: 992px) {
      background-image: url(${edu_lines});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    filter: ${invertColor};
  }
`;
const appendRem = (amount: number, append?: boolean) => (append ? `${amount}rem` : '0');
const Card = styled.div<{ lt?: boolean; rt?: boolean; lb?: boolean; rb?: boolean }>`
  background-image: ${cardColor};
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  border-radius: 1rem;
  min-height: 10vh;
  margin: 1rem;
  @media (min-width: 992px) {
    margin: ${({ lt, rt, lb, rb }) => {
      if (lt) return '2rem 8rem 2rem 1rem';
      if (rt) return '4rem 2rem 0 8rem';
      if (lb) return '0 13rem 0 0';
      if (rb) return '2rem 0 0 14rem';
    }};
  }
  div {
    font-size: large;
    font-weight: bold;
  }
`;
const Education: FunctionComponent<Props> = ({ sectionRef }) => {
  const { t } = useTranslation();

  return (
    <EduSection ref={sectionRef}>
      <SectionTitle title={t('section.title.education')} />
      <Container>
        <Background>
          <Row>
            <Col lg={6} xs={12}>
              <Card lt>
                <div>{t('edu.highschool')}</div>
                <span>{t('edu.schoolprofile')}</span>
              </Card>
            </Col>
            <Col lg={6} xs={12}>
              <Card rt>
                <div>{t('edu.university')}</div>
                <span>{t('edu.belhior')}</span>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12}>
              <Card lb>
                <div>{t('edu.university')}</div>
                <span>{t('edu.master')}</span>
              </Card>
            </Col>
            <Col lg={6} xs={12}>
              <Card rb>
                <div>{t('edu.academy')}</div>
                <span>{t('edu.boot')}</span>
              </Card>
            </Col>
          </Row>
        </Background>
      </Container>
    </EduSection>
  );
};

export default Education;
