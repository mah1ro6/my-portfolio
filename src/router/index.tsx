import React from 'react';
import About from '../components/About';
import Home from '../components/Home';
import Works from '../components/Works';
import Contact from '../components/Contact';
import { HeaderLayout } from '../layout/HeaderLayout';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        </Route>
        <Route exact path="/about">
          <HeaderLayout>
            <About />
          </HeaderLayout>
        </Route>
        <Route exact path="/works">
          <HeaderLayout>
            <Works />
          </HeaderLayout>
        </Route>
        <Route exact path="/contact">
          <HeaderLayout>
            <Contact />
          </HeaderLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
