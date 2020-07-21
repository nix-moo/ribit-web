import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';
import './app.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

// If I end up using Redux again, I'll use these.

// import {Provider} from 'react-redux'
// import history from './history'
// import store from './store'

/*
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
 */
