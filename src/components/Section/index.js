import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'reactstrap';

function Section(props) {
  return (
    <Container className='container-section'>
      <Col xs='6'>
        <section className='section-page'>
          <span>{<props.icone className='icon-nav-section' />}</span>
          <p> {props.title} |</p>
        </section>
      </Col>
      <Col xs='6'>..2</Col>
    </Container>
  )
}

export {Section}
