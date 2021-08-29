import React from 'react';
import './styles.css';
import { Container, Row } from 'reactstrap';
import { Section } from '../../components/Section';
import {BsBuilding} from "react-icons/bs";

function Imoveis() {
  return (
    <Container className='container-imoveis'>
      <Row>
        <Section icone={BsBuilding} title='imoveis' />
      </Row>
    <div>
      <h1>Pagina em Desenvolvimento</h1>
    </div>
    </Container>
    
  )
}

export {Imoveis}
