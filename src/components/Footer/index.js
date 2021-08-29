import React from 'react';
import './styles.css';
import { BsChatSquareFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Container, Button, Col } from 'reactstrap';

function Footer() {
  return (
    <Container className='container-footer'>
      <Col className='footer-info'>
        <section>
          <p>Appé Digital-2020- Todos os direitos reservados</p>
          <p>www.appedigital.com.br</p>
        </section>
         <Button className="button-footer" size="sm">
          <BsChatSquareFill id='icon-button-footer' />
          Fale com Appé Digital
        </Button>
      </Col>
      <Col className='footer-redes-sociais'>
        <p>Blog</p>
        <section className='footer-icon-social'>
           <FaFacebookF id='icon-button-footer' />
           <FaInstagram id='icon-button-footer' />
           <FaYoutube id='icon-button-footer' />
           <FaLinkedinIn id='icon-button-footer' />
        </section>
      </Col>
      
    </Container>
  )
}

export {Footer}
