import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import Section from '../Section/Section';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import brain from '../../assets/images/brain.png';
import nask from '../../assets/images/nask.png';
import LoadingImgHandler from '../Loading/LoadingImgHandler';

const WorkSection = styled(Section)``;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const Position = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  img {
    display: flex;
    max-width: 500px;
    max-height: 300px;
    min-height: 100px;
    min-width: 100px;
    width: 100%;
    height: 100%;
  }
`;
const ExperienceYears = styled.div`
   {
    position: relative;
    left: -8rem;
    width: 20vh;
    margin: auto;
    text-align: start;
    span {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }
`;
const PracticeYears = styled.div`
   {
    position: relative;
    top: -6rem;
    left: -2rem;
    width: 17vh;
    margin: auto;
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
    <WorkSection ref={sectionRef} mode={'primary'}>
      <SectionTitle title={t('section.title.work')} />
      <Container>
        <Row alignItems={'center'}>
          <Col lg={6} sm={12}>
            <LoadingImgHandler>
              <Position>
                <img src={brain} alt="brain" />
                <PracticeYears>
                  <span>8</span>
                  <br />
                  <span>{t('work.practice')}</span>
                </PracticeYears>
              </Position>
            </LoadingImgHandler>
          </Col>
          <Col lg={6} sm={12}>
            <LoadingImgHandler>
              <Position>
                <img src={nask} alt="nask" />
                <ExperienceYears>
                  <span>2 {t('work.experience')}</span>
                </ExperienceYears>
              </Position>
            </LoadingImgHandler>
          </Col>
        </Row>
      </Container>
    </WorkSection>
  );
};

export default Work;
