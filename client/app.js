// import 'core-js/modules/es7.array.includes';
// import 'core-js/modules/es6.array.fill';
// import 'core-js/modules/es6.string.includes';
// import 'core-js/modules/es6.string.trim';
// import 'core-js/modules/es7.object.values';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Head from './components/header';
import PatternUpload from './view/pattern_upload';
import LandingPage from './view/landing';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <Head />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/pattern_upload" component={PatternUpload} />
          </Switch>
        </Content>
      </>
    );
  }
}
