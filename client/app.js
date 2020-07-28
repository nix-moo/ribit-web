import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Head from './components/header';
import PatternUpload from './view/pattern_upload';
import LandingPage from './view/landing';

// import './app.scss';

export default class App extends Component {
  render() {
    return (
      <Content>
        <Head />
        <PatternUpload />
        <LandingPage />
      </Content>
    );
  }
}
