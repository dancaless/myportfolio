import Header from '../header/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import Footer from '../fotter/footer';
// import Error from '../error/error';
import './App.scss';


function App() {
  return (
    <div className='app'>
      <Router basename='myportfolio'>
        <Header />
        <Switch>
          <Route path="/" component={AboutPage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

