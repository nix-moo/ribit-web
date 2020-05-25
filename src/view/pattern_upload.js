import React from 'react';
import { Content } from 'carbon-components-react';
// import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import Head from '../components/header';
import PatternInfo from '../components/pattern_info';
import PatternText from '../components/pattern_text';
import '../app.scss';

const PatternUpload = () => {
  return (
    <div>
      <Head />
      <Content>
        <PatternInfo />
        <PatternText />
      </Content>
    </div>
  );
};

export default PatternUpload;
