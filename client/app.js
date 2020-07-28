import React from 'react';

// Carbon stylesheet
// import './app.scss'

import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Navbar } from './components';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Routes />
      </Content>
    </>
  );
};

export default App;
