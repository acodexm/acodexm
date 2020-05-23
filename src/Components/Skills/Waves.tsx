import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import { cardColor, circleHighlightColor, highlightColor } from '../../themes/colors';
interface Icon {
  name: string;
  url: string;
  icon: any;
}
interface Props {
  items: Icon[];
}
const Circle = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  top: 2rem;
  border-radius: 50px;
  background: black;
  margin: 5px;
  border: unset;
  &:hover {
    background-color: ${circleHighlightColor};
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
const Label = styled.div`
  height: 70px;
  display: flex;
  align-items: flex-end;
  font-size: 1.2rem;
  justify-content: center;
  background-image: ${cardColor};
  border: 2px solid black;
  border-radius: 1rem;
`;
const Waves: FunctionComponent<Props> = ({ items }) => (
  <Container fluid>
    <Row justifyContent="center">
      {items.map((item, i) => (
        <div key={i}>
          <Col>
            <Circle>
              <a href={item.url}>
                <img src={item.icon} alt="icon" />
              </a>
            </Circle>
            <Label>
              <span>{item.name}</span>
            </Label>
          </Col>
        </div>
      ))}
    </Row>
  </Container>
);
export default Waves;
