import './App.css';
import { Container, Row } from 'reactstrap';
import { Header } from './components/Navbar/';
import {Routes} from './routes';
import {Footer} from './components/Footer';


function App(props) {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Routes />
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
