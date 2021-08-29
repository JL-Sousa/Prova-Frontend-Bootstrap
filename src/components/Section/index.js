import React from 'react';
import './styles.css';
import { Container, Col, Button } from 'reactstrap';
import { FcGoogle } from "react-icons/fc";



function Section(props) {
  return (
    <Container className='container-section'>
      <Col xs='6'>
        <section className='section-page'>
          <span>{<props.icone className='icon-nav-section' />}</span>
          <p> {props.title} |</p>
        </section>
      </Col>
      <Col xs='6'>
        <Button className="button-section" size="sm">
          <FcGoogle className='icon-nav-section' />
          Integrar com Google
        </Button>
      </Col>
    </Container>
  )
}

export {Section}
