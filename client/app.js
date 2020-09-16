import React from 'react';
// Carbon stylesheet
// import './app.scss'

import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Header } from './components';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Routes />
      </Content>
    </>
  );
};

export default App;
