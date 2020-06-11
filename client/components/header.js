import React from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'react-router-dom';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

const Head = () => {
  return (
    <Header aria-label="RibIt">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="RibIt">
        Web Portal
      </HeaderName>
      <HeaderNavigation aria-label="RibIt">
        <HeaderMenuItem element={Link} to="/pattern_upload">
          Patterns
        </HeaderMenuItem>
        <HeaderMenuItem element={Link} to="/projects">
          Projects
        </HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Settings" onClick={() => {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Account" onClick={() => {}}>
          <UserAvatar20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};
export default Head;
