import { useContext } from 'react';
import { LayoutProviderContext } from '../provider/LayoutProvider.jsx';
import HMIconly, { HMIcons } from './HMIconly.jsx';
import { HMThemeContext } from '../provider/ThemeProvider.jsx';

export const NavBarToggle = () => {
  const layoutProvider = useContext(LayoutProviderContext);
  const theme = useContext(HMThemeContext);
  layoutProvider.navBarContent.showNavBar;
  return (
    <div
      onClick={() => {
        layoutProvider.navBarContent.toggleNavBar(!layoutProvider.navBarContent.showNavBar);
      }}
    >
      <HMIconly
        name={HMIcons.Menu}
        size={'large'}
        primaryColor={theme.color.alternate.primary}
      />
    </div>
  );
};
