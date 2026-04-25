import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import AuthApp from './components/AuthApp';
import { Switch, Route } from 'react-router-dom';
export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider >
    </BrowserRouter>
  );
};
