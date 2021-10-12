import React from 'react';
import About from '../components/About';
import Home from '../components/Home';
import Works from '../components/Works';
import Contact from '../components/Contact';
import PageLayout from '../Page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageLayout>
            <Home />
          </PageLayout>
        </Route>
        <Route exact path="/about">
          <PageLayout>
            <About />
          </PageLayout>
        </Route>
        <Route exact path="/works">
          <PageLayout>
            <Works />
          </PageLayout>
        </Route>
        <Route exact path="/contact">
          <PageLayout>
            <Contact />
          </PageLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
