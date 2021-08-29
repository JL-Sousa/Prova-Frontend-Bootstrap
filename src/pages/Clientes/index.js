import React from 'react';
import './styles.css';
import { Container, Row } from 'reactstrap';
import { Section } from '../../components/Section';
import {BsPeople} from "react-icons/bs";

function Clientes() {
  return (
    <Container className='container-clientes'>
      <Row>
        <Section icone={BsPeople} title='clientes' />
      </Row>
    <div>
      <h1>Pagina em Desenvolvimento</h1>
    </div>
    </Container>
    
  )
}

export {Clientes}
