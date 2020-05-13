import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'styled-bootstrap-grid';

const getMessage = (msg: string) => msg;
const ProfileSection = styled.section`
  width: 100%;
  flex-direction: column;
  background-color: #424242;
  background-attachment: fixed;
  background-size: cover;
  line-height: 1.8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Card = styled.div`
  border-radius: 0.5rem;
  border-color: coral;
  border-width: thin;
`;
const CardContent = styled.div`
  padding: 15px;
`;
interface Props {
  sectionRef:React.RefObject<HTMLElement>
}
const Profile:FunctionComponent<Props> = ({sectionRef}) => {
  return (
    <ProfileSection ref={sectionRef}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{getMessage('general.programing')}</h3>
                {getMessage('about.programing')}
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{getMessage('general.sports')}</h3>
                {getMessage('about.sports')}
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{getMessage('general.about')}</h3>
                {getMessage('about.me')}
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <h3>{getMessage('general.hobby')}</h3>
                {getMessage('about.hobby')}
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProfileSection>
  );
};

export default Profile;
