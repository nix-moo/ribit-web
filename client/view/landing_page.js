import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">LG 1</div>
        </div>
        <div className="bx--row landing-page__r2">
          <div className="bx--col-md-4 bx--col-lg-7">MD 4 | LG 7</div>
          <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            MD 4 | LG 8
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
