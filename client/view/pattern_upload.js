import React from 'react';
import PatternInfo from '../components/pattern_info';
import PatternText from '../components/pattern_text';

const PatternUpload = () => {
  return (
    <div>
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col-md-16 bx--col-lg-8">
            <PatternInfo />
          </div>
          <div className="bx--col-md-16 bx--col-lg-8">
            <PatternText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternUpload;
