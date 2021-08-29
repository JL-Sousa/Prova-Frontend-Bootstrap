import React from 'react';
import './styles.css';
import { Container, Row } from 'reactstrap';
import { Section } from '../../components/Section';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";


import { BsCalendar } from "react-icons/bs";

function Home() {

  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  return (
    <Container>
       <Row>
        <Section icone={BsCalendar} title='agenda' />
      </Row>
      <div id='calendar'>
        <FullCalendar 
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: 'visita a cliente', date: '2021-08-03' }
          ]}
          dateClick={handleDateClick}
          />
        </div>
    </Container>
  )
}

export { Home }


