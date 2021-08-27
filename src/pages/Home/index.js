import React from 'react';
import './styles.css';
import { Container, Row } from 'reactstrap';
import { Section } from '../../components/Section';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { Calendar } from '@fullcalendar/core/';
import ptBr from '@fullcalendar/core/locales/pt-br';

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
            { title: 'event 1', date: '2019-04-01' },
            { title: 'event 2', date: '2021-08-02' }
          ]}
          dateClick={handleDateClick}
          />
        </div>
    </Container>
  )
}

export { Home }


