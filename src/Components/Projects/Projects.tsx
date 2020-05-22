import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import project_bg from '../../assets/images/project_bg.png';
import github_bg from '../../assets/images/github.png';
import Section from '../Section/Section';
import axios from 'axios';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { cardColor, section2Color } from '../../themes/colors';
import { useTranslation } from 'react-i18next';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsSection = styled(Section)`
  background-color: ${section2Color};
  min-height: 50vh;
`;
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
  min-height: 20vh;
  min-width: 25vh;
  cursor: pointer;
  border-radius: 2rem;
  background-image: ${cardColor}, url(${github_bg});
  background-repeat: no-repeat;
  background-blend-mode: darken;
  background-position: center;
  background-size: contain;
  padding: 2rem;
  margin: 2rem;
`;
const Card = styled.div`
  color: white;
  min-height: 20vh;
  min-width: 25vh;
  cursor: pointer;
  border-radius: 2rem;
  background-image: url(${project_bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem;
  margin: 2rem;
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
    <ProjectsSection ref={sectionRef}>
      <SectionTitle title={t('section.title.projects')} />
      {loading && 'loading...'}
      {error && 'Request error'}
      {!loading && !error && (
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
            <Github onClick={() => window.open('https://github.com/acodexm/repositories', '_blank')} />
          </Row>
        </Container>
      )}
    </ProjectsSection>
  );
};

export default Projects;
