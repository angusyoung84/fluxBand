import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import BandsList from './components/BandsList';
import Band from './components/Band';
import './index.css';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BandsList} />
        <Route path="/band/:name" component={Band} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
router, document.getElementById('root')
);
