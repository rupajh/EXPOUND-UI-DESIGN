import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar.jsx';
import Header from './components/header/Header.jsx';
import { Col, Row } from 'react-bootstrap';
import PageBody from './components/content/PageBody.jsx';
import NavBar2 from './components/NavBar2.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div>
      <Row>
        <Col>
          <NavBar2 />
        </Col>
      </Row>
      <div className='header-section'>
        <Header />
        <PageBody />
      </div>
      <Footer />
    </div>


  );
}

export default App;
