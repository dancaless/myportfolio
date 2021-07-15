import Header from '../header/header'
import { Col, Row, Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import Contact from '../contact/contact';
import Footer from '../fotter/footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Container fluid={true}>
          <Header />
        </Container>

        <Switch>
          <Route path="/" component={AboutPage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Container fluid={true}>
          <Footer />
        </Container>
      </Router>

    </>
  );
}

export default App;

