import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import project_bg from '../../assets/images/project_bg.png';
import github_bg from '../../assets/images/github.png';
import Section from '../Section/Section';
import axios from 'axios';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { cardColor, textColor } from '../../themes/colors';
import { useTranslation } from 'react-i18next';
import LoadingHandler from '../Loading/LoadingHandler';

const ProjectsSection = styled(Section)``;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const filterByDate = (date: any) => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  return new Date(date) > new Date(year - 2, month, day);
};
const Github = styled.div`
  color: white;
  min-width: 25vh;
  width: 90%;
  height: 90%;
  cursor: pointer;
  border-radius: 2rem;
  background-image: ${cardColor}, url(${github_bg});
  background-repeat: no-repeat;
  background-blend-mode: darken;
  background-position: center;
  background-size: contain;
  padding: 1rem;
  margin: 1rem;
`;
const Card = styled.div`
  color: ${textColor};
  width: 90%;
  height: 90%;
  min-width: 25vh;
  cursor: pointer;
  border-radius: 2rem;
  background-image: ${cardColor}, url(${project_bg});
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: exclusion;
  background-size: cover;
  padding: 1rem;
  margin: 1rem;
`;
const Projects: FunctionComponent<Props> = ({ sectionRef }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [{ loading, error }, setState] = useState({ loading: true, error: false });
  const list = useMemo(
    () => projects.filter((obj) => filterByDate(obj.updated_at)).filter(({ description }) => description),
    [projects]
  );

  const getRepos = () => {
    setState({ loading: true, error: false });
    axios('https://api.github.com/users/acodexm/repos')
      .then(({ data }) => {
        setProjects(data);
        setState({ loading: false, error: false });
      })
      .catch((err) => {
        setState({ loading: false, error: true });
        console.error(err.message);
      });
  };
  useEffect(() => {
    getRepos();
  }, []);
  const { t } = useTranslation();

  return (
    <ProjectsSection ref={sectionRef} mode={'secondary'}>
      <SectionTitle title={t('section.title.projects')} />
      <LoadingHandler loading={loading} error={error} preventDisplayContent style={{ margin: '2rem' }}>
        <Container>
          <Row style={{ justifyContent: 'center' }}>
            {list.map((item, i) => (
              <Col key={i} col>
                <Card onClick={() => window.open(item.html_url, '_blank')}>
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </Card>
              </Col>
            ))}
            <Col col>
              <Github onClick={() => window.open('https://github.com/acodexm/repositories', '_blank')} />
            </Col>
          </Row>
        </Container>
      </LoadingHandler>
    </ProjectsSection>
  );
};

export default Projects;
