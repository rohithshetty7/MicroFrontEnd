import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

export default ({history}) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
