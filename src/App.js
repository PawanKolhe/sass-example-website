import './App.scss';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="App__Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
