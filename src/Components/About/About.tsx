import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import SectionTitle from '../Section/SectionTitle';
import Section from '../Section/Section';
import { cardColor, section2Color } from '../../themes/colors';
import { useTranslation } from 'react-i18next';

const AboutSection = styled(Section)`
  background-color: ${section2Color};
  min-height: 50vh;
`;
const Card = styled.div`
  border-radius: 1rem;
  border-color: coral;
  border-width: thick;
  margin: 2rem;
  padding: 1rem;
  background-color: ${cardColor};
`;
const CardContent = styled.div`
  padding: 15px;
`;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const About: FunctionComponent<Props> = ({ sectionRef }) => {
  const { t } = useTranslation();
  return (
    <AboutSection ref={sectionRef}>
      <SectionTitle title={t('section.title.about')} />
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{t('general.programing')}</h3>
                {t('about.programing')}
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{t('general.sports')}</h3>
                {t('about.sports')}
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{t('general.about')}</h3>
                {t('about.me')}
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{t('general.hobby')}</h3>
                {t('about.hobby')}
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
