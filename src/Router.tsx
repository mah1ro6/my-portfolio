import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
