import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import Section from '../Section/Section';
import { section1Color, textColor } from '../../themes/colors';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import brain from '../../assets/images/brain.png';
import nask from '../../assets/images/nask.png';

const WorkSection = styled(Section)`
  background-color: ${section1Color};
  min-height: 50vh;
`;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const Experience = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  img {
    display: flex;
    max-width: 40vh;
    max-height: 20vh;
    min-height: 10vh;
    min-width: 10vh;
    width: 100%;
    height: 100%;
  }
  div {
    position: absolute;
    top: 8rem;
    width: 20vh;
    margin: auto;
    left: 0;
    text-align: start;
    span {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }
`;
const Practice = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  img {
    max-width: 40vh;
    display: flex;
    max-height: 20vh;
    min-height: 10vh;
    min-width: 10vh;
    width: 100%;
    height: 100%;
  }
  div {
    position: absolute;
    top: 6rem;
    width: 20vh;
    margin: auto;
    left: 2rem;
    text-align: start;
    span {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }
`;
const Work: FunctionComponent<Props> = ({ sectionRef }) => {
  const { t } = useTranslation();
  return (
    <WorkSection ref={sectionRef}>
      <SectionTitle title={t('section.title.work')} />
      <Container>
        <Row alignItems={'center'}>
          <Col lg={6} sm={12}>
            <Practice>
              <img src={brain} alt="brain" />
              <div>
                <span>8</span>
                <br />
                <span>{t('work.practice')}</span>
              </div>
            </Practice>
          </Col>
          <Col lg={6} sm={12}>
            <Experience>
              <img src={nask} alt="nask" />
              <div>
                <span>2 {t('work.experience')}</span>
              </div>
            </Experience>
          </Col>
        </Row>
      </Container>
    </WorkSection>
  );
};

export default Work;
