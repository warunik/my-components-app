import React, { HTMLAttributes, useContext, useEffect } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import { ILayoutStyles, LayoutProviderContext, useMainContent, useNavbarContent, useSidebarContent } from '../provider/LayoutProvider.jsx';

export interface ILayoutDiv extends HTMLAttributes<HTMLDivElement> {
  _theme: Theme;
  _layoutstyle: ILayoutStyles;
}

export interface LayoutProps {
  sidebarContent: React.ReactNode;
  navbarContent: React.ReactNode;
  mainContent: React.ReactNode;
}

const DivBase = ({ _theme, _layoutstyle, ...props }: ILayoutDiv) => <div {...props} />;

const LayoutDiv = styled(DivBase)<ILayoutDiv>`
  display: flex;
  height: 100%;
  overflow-x: hidden;

  .hm-nav {
    min-width: ${(props) => props._layoutstyle.navBarMinWidth};
    width: ${(props) => props._layoutstyle.navBarWidth};
    height: 100%;
    border-right: 1px solid ${(props) => props._theme.color.outline};
    //z-index: 200;
  }

  .hm-nav-display-none {
    display: none;
  }

  .hm-nav-small {
    position: absolute;
  }

  .hm-main {
    flex-grow: 1;
    //z-index: 100;
    height: 100%;
    overflow-y: scroll;
    width: ${(props) => props._layoutstyle.newMainWidth};
  }

  .hm-sidebar {
    min-width: ${(props) => props._layoutstyle.sideBarMinWidth};
    width: ${(props) => props._layoutstyle.sideBarWidth};
    overflow-y: scroll;
    height: 100%;
    //z-index: 300;
    right: 0;
    display: block;
  }

  .hm-sidebar-display-none {
    display: none;
  }

  .hm-sidebar-small {
    position: absolute;
  }

  .slide-right {
    animation: slide-right 0.5s ease-in-out forwards;
  }

  @keyframes slide-right {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .slide-left {
    animation: slide-left 0.5s ease-in-out forwards;
  }

  @keyframes slide-left {
    0% {
      transform: translateX(-${(props) => props._layoutstyle.navBarWidth});
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

export const Layout = (props: LayoutProps) => {
  const theme = useContext(HMThemeContext);
  const layoutProvider = useContext(LayoutProviderContext);
  const navbarContext = useNavbarContent();
  const mainContext = useMainContent();
  const sidebarContext = useSidebarContent();

  useEffect(() => {
    navbarContext.setNavbarContent(props.navbarContent);
    mainContext.setMainContent(props.mainContent);
    sidebarContext.setSidebarContent(props.sidebarContent);
  }, [
    props.navbarContent,
    props.mainContent,
    props.sidebarContent,
    mainContext,
    navbarContext,
    sidebarContext,
  ]);
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'layoutstyle'}>
      <LayoutDiv _layoutstyle={layoutProvider?.layoutStyle} _theme={theme}>
        <div className={layoutProvider.layoutStyle.navBarClassNames}>
          {navbarContext.navbarContent}
        </div>
        <div className={layoutProvider.layoutStyle.mainClassNames}>
          {mainContext.mainContent}
        </div>
        <div className={layoutProvider.layoutStyle.sideBarClassNames}>
          {sidebarContext.sidebarContent}
        </div>
      </LayoutDiv>
    </StyleSheetManager>
  );
};
