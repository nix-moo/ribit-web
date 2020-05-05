import React from 'react';
import { Content } from 'carbon-components-react';
import Head from './components/header';
import Form from './components/form';
import './app.scss';

const PatternUpload = () => {
  return (
    <div>
      <Head />
      <Content>
        <Form />
      </Content>
    </div>
  );
};

export default PatternUpload;
