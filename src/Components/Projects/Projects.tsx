import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import { getMessage } from '../../i18n';
import Section from '../Section/Section';
import axios from 'axios';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { cardColor, section2Color } from '../../themes/colors';

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
  return new Date(date) > new Date(year - 1, month, day);
};

const Card = styled.div`
  border-radius: 2rem;
  border-width: thick;
  background-color: ${cardColor};
  padding: 2rem;
  margin: 2rem;
`;
const Projects: FunctionComponent<Props> = ({ sectionRef }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [{ loading, error }, setState] = useState({ loading: true, error: false });
  const list = useMemo(() => projects.filter((obj) => filterByDate(obj.updated_at)), [projects]);

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

  return (
    <ProjectsSection ref={sectionRef}>
      <SectionTitle title={getMessage('section.title.projects')} />
      {loading && 'loading...'}
      {error && 'Request error'}
      {!loading && !error && (
        <Container>
          <Row>
            {list.map((item, i) => (
              <Col key={i} lg={6} xs={12}>
                <Card>
                  <h3>{item.name}</h3>
                  {item.description}
                  <br />
                  <a href={item.html_url}>{getMessage('general.github.link')}</a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </ProjectsSection>
  );
};

export default Projects;
