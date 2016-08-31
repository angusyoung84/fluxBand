import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteBinderIndexRoute, IndexRoute, browserHistory } from 'react-router';
import Binder from './components/Binder';
import BandsList from './components/BandsList';
import Band from './components/Band';
import './index.css';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Router path="/" component={Binder}>
        <IndexRoute component={BandsList} />
        <Router path="/band/:name" component={Band} />
      </Router>
    </Router>
  </Provider>
)

ReactDOM.render(
router, document.getElementById('root')
);
