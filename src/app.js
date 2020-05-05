import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import Head from './components/header';
import Form from './components/form';
import './app.scss';

ReactDOM.render(
  <Router>
    <div>
      <Head />
      <Content>
        <Form />
      </Content>
    </div>
  </Router>,
  document.getElementById('app')
);
