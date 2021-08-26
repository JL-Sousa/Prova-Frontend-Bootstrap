import React from 'react';
import './section.css';
import { Container, Row, Col } from 'reactstrap';

function Section() {
  return (
    <Container className='container-section'>
      <Col xs='6'>..1</Col>
      <Col xs='6'>..2</Col>
    </Container>
  )
}

export {Section}
