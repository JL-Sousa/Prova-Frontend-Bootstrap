import React, { useState } from 'react';
import './navbar.css';
import {
  BsBuilding,
  BsPeople,
  BsCalendar,
  BsFileEarmarkText,
  BsBullseye,
  BsReverseLayoutTextSidebarReverse,
  BsFileEarmarkDiff,
  BsPeopleCircle,
  BsBellFill
} from "react-icons/bs";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText } from 'reactstrap';

function Header() {

   const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className='container-navbar'>
      <Col xs='2'>
       AAA
      </Col>
      <Col xs="8">
         <Navbar color="light" light expand="md">
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">
                  <span><BsCalendar className='icon-nav' /></span>
                  Agenda
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/clientes">
                  <span><BsPeople className='icon-nav' /></span>
                  Clientes
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/imoveis">
                   <span><BsBuilding className='icon-nav' /></span>
                  Imóveis</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <span><BsFileEarmarkText className='icon-nav' /></span>
                  Contratos</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                   <span><BsBullseye className='icon-nav' /></span>
                  Carreiras</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <span><BsReverseLayoutTextSidebarReverse className='icon-nav' /></span>
                  Eventos</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <span>< BsFileEarmarkDiff className='icon-nav' /></span>
                  Indique um corretor</NavLink>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
      </Col>
      <Col xs='2' className='nav-user'>
        <span><BsBellFill className='icon-nav' /></span>
        <span><BsPeopleCircle className='icon-nav' /></span>
      </Col>
    </Container>
  )
}

export { Header}
