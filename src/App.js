import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Header } from './components/Navbar/navbar';
import { Section } from './components/Section/section';


function App(props) {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Section />
      </Row>
    </Container>
  );
}

export default App;
