import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';

interface W {
  items: any[];
}
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: black;
  margin: 5px;
  border: unset;
  &:hover {
    background: #5b0500;
  }
  a {
    padding: 0;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      padding: 10px;
    }
  }
`;

const Waves: FunctionComponent<W> = ({ items }) => (
  <Container>
    <Row style={{ justifyContent: 'center' }}>
      {items.map((item, i) => (
        <div key={i}>
          <Circle>
            <a href={item.url}>
              <img src={item.icon} alt="icon" />
            </a>
          </Circle>
        </div>
      ))}
    </Row>
  </Container>
);
export default Waves;
