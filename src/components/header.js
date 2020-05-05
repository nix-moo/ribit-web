import React from 'React';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react';
import Search20 from '@carbon/icons-react/lib/search/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

const Head = () => {
  return (
    <div className="container">
      <Header aria-label="RibIt">
        <SkipToContent />
        <HeaderName href="#" prefix="Rib">
          It
        </HeaderName>
        <HeaderNavigation aria-label="RibIt">
          <HeaderMenuItem href="/patterns">Patterns</HeaderMenuItem>
          <HeaderMenuItem href="/projects">Projects</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Account Menu" onClick={() => {}}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </div>
  );
};

export default Head;
