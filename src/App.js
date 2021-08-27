import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Header } from './components/Navbar/navbar';
import {Routes} from './routes';


function App(props) {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Routes />
    </Container>
  );
}

export default App;
