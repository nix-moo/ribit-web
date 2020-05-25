// import 'core-js/modules/es7.array.includes';
// import 'core-js/modules/es6.array.fill';
// import 'core-js/modules/es6.string.includes';
// import 'core-js/modules/es6.string.trim';
// import 'core-js/modules/es7.object.values';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import PatternUpload from './view/pattern_upload';
import './app.scss';

ReactDOM.render(
  <Router>
    <div className="bx--grid bx--grid--full-width">
      <PatternUpload />
    </div>
  </Router>,
  document.getElementById('app')
);
