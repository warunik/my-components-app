import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LAYOUT_CONFIG } from '../../config/constants';

// Define interfaces for context values
export interface ILayoutStyles {
  sideBarWidth: string;
  sideBarMinWidth: string;
  sideBarClassNames: string;
  navBarWidth: string;
  navBarMinWidth: string;
  navBarClassNames: string;
  newMainWidth: string;
  mainMinWidth: string;
  oldMainWidth?: string;
  mainClassNames: string;
}

export interface ISidebarContext {
  showSidebar: boolean;
  toggleSidebar: (show: boolean) => void;
  sidebarContent: React.ReactNode;
  setSidebarContent: (content: React.ReactNode) => void;
}

export interface INavbarContext {
  showNavBar: boolean;
  toggleNavBar: (show: boolean) => void;
  navbarContent: React.ReactNode;
  setNavbarContent: (content: React.ReactNode) => void;
}

export interface IMainContext {
  mainContent: React.ReactNode;
  setMainContent: (content: React.ReactNode) => void;
}

export interface ILayoutProvider {
  layoutStyle: ILayoutStyles;
  navBarContent: INavbarContext;
  sidebarContent: ISidebarContext;
  mainContent: IMainContext;
}

export interface LayoutProviderProps {
  children: ReactNode;
  layout?: ILayoutProvider;
}

// Create separate contexts for each content type
const NavbarContext = createContext<INavbarContext | undefined>(undefined);
const MainContentContext = createContext<IMainContext | undefined>(undefined);
const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

// Custom hook for accessing and updating navbar content
export const useNavbarContent = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContent must be used within a NavbarProvider');
  }
  return context;
};

// Custom hook for accessing and updating main content
export const useMainContent = () => {
  const context = useContext(MainContentContext);
  if (!context) {
    throw new Error('useMainContent must be used within a MainContentProvider');
  }
  return context;
};

// Custom hook for accessing and updating sidebar content
export const useSidebarContent = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContent must be used within a SidebarProvider');
  }
  return context;
};

const LayoutProviderContext = createContext<ILayoutProvider>({
  layoutStyle: {
    newMainWidth: LAYOUT_CONFIG.MAIN_MIN_WIDTH + 'px',
    mainMinWidth: LAYOUT_CONFIG.MAIN_MIN_WIDTH + 'px',
    sideBarWidth: LAYOUT_CONFIG.SIDE_MIN_WIDTH + 'px',
    sideBarMinWidth: LAYOUT_CONFIG.SIDE_MIN_WIDTH + 'px',
    navBarWidth: LAYOUT_CONFIG.NAV_MIN_WIDTH + 'px',
    navBarMinWidth: LAYOUT_CONFIG.MAIN_MIN_WIDTH + 'px',
    sideBarClassNames: 'hm-sidebar ',
    navBarClassNames: '',
    mainClassNames: '',
  },
  navBarContent: {
    showNavBar: false,
    toggleNavBar() {},
    navbarContent: null,
    setNavbarContent() {},
  },
  sidebarContent: {
    showSidebar: false,
    toggleSidebar() {},
    sidebarContent: null,
    setSidebarContent() {},
  },
  mainContent: {
    mainContent: null,
    setMainContent() {},
  },
});

const getWidths = (innerWidth: number): [number, number, number, number, number, number] => {
  const minWidthMain = LAYOUT_CONFIG.MAIN_MIN_WIDTH;
  const minWidthMainNav = minWidthMain + LAYOUT_CONFIG.NAV_MIN_WIDTH;
  const minWidthMainNavSide = minWidthMainNav + LAYOUT_CONFIG.SIDE_MIN_WIDTH;

  const p_nav = LAYOUT_CONFIG.P_NAV;
  const p_side = LAYOUT_CONFIG.P_SIDE;

  let nav: number;
  let navMin: number = LAYOUT_CONFIG.NAV_MIN_WIDTH;
  let main: number;
  let mainMin: number = LAYOUT_CONFIG.MAIN_MIN_WIDTH;
  let side: number;
  let sideMin: number = LAYOUT_CONFIG.SIDE_MIN_WIDTH;

  if (minWidthMainNavSide <= innerWidth) {
    nav = innerWidth * p_nav;
    side = innerWidth * p_side;
    main = innerWidth - (nav + side);
  } else if (minWidthMainNav <= innerWidth) {
    nav = innerWidth * p_nav;
    side = innerWidth * p_side;
    main = innerWidth * (1 - p_nav);
  } else {
    nav = innerWidth * p_nav;
    side = innerWidth * p_side;
    main = innerWidth;
  }

  if (nav <= LAYOUT_CONFIG.NAV_MIN_WIDTH) {
    nav = LAYOUT_CONFIG.NAV_MIN_WIDTH;
  }

  if (main <= LAYOUT_CONFIG.MAIN_MIN_WIDTH) {
    main = LAYOUT_CONFIG.MAIN_MIN_WIDTH;
  }

  if (side <= LAYOUT_CONFIG.SIDE_MIN_WIDTH) {
    side = LAYOUT_CONFIG.SIDE_MIN_WIDTH;
  }

  if (nav >= innerWidth) {
    nav = innerWidth;
  }

  if (main >= innerWidth) {
    main = innerWidth;
  }

  if (side >= innerWidth) {
    side = innerWidth;
  }

  if (navMin >= innerWidth) {
    navMin = innerWidth;
  }

  if (mainMin >= innerWidth) {
    mainMin = innerWidth;
  }

  if (sideMin >= innerWidth) {
    sideMin = innerWidth;
  }

  return [nav, navMin, main, mainMin, side, sideMin];
};

const getNavBarInitialState = (innerWidth: number): boolean => {
  const minWidthMain = LAYOUT_CONFIG.MAIN_MIN_WIDTH;
  const minWidthMainNav = minWidthMain + LAYOUT_CONFIG.NAV_MIN_WIDTH;

  return minWidthMainNav <= innerWidth;
};

const getLayoutStyle = (
  innerWidth: number,
  isShowNavBar: boolean,
  isShowSideBar: boolean,
): ILayoutStyles => {
  const minWidthMain = LAYOUT_CONFIG.MAIN_MIN_WIDTH;
  const minWidthMainNav = minWidthMain + LAYOUT_CONFIG.NAV_MIN_WIDTH;
  const minWidthMainNavSide = minWidthMainNav + LAYOUT_CONFIG.SIDE_MIN_WIDTH;

  const [nav, navMin, main, mainMin, side, sideMin] = getWidths(innerWidth);

  const navBarWidth = nav + 'px';
  const navBarMinWidth = navMin + 'px';
  const sideBarWidth = side + 'px';
  const sideBarMinWidth = sideMin + 'px';
  const newMainWidth = main + 'px';
  const mainMinWidth = mainMin + 'px';

  let sideBarClass: string;
  let navBarClass: string;
  if (isShowSideBar) {
    sideBarClass = 'slide-right';
  } else {
    sideBarClass = 'hm-sidebar-display-none';
  }
  if (isShowNavBar) {
    navBarClass = 'slide-left';
  } else {
    navBarClass = 'hm-nav-display-none';
  }
  if (minWidthMainNavSide <= innerWidth) {
    return {
      navBarClassNames: 'hm-nav ' + navBarClass,
      mainClassNames: 'hm-main ',
      sideBarClassNames: 'hm-sidebar ' + sideBarClass,
      sideBarWidth,
      sideBarMinWidth,
      navBarWidth,
      navBarMinWidth,
      newMainWidth,
      mainMinWidth,
    };
  } else if (minWidthMainNav <= innerWidth) {
    return {
      navBarClassNames: 'hm-nav ' + navBarClass,
      mainClassNames: 'hm-main ',
      sideBarClassNames: 'hm-sidebar hm-sidebar-small ' + sideBarClass,
      sideBarWidth,
      sideBarMinWidth,
      navBarWidth,
      navBarMinWidth,
      newMainWidth,
      mainMinWidth,
    };
  } else {
    return {
      navBarClassNames: 'hm-nav hm-nav-small ' + navBarClass,
      mainClassNames: 'hm-main ',
      sideBarClassNames: 'hm-sidebar hm-sidebar-small ' + sideBarClass,
      sideBarWidth,
      sideBarMinWidth,
      navBarWidth,
      navBarMinWidth,
      newMainWidth,
      mainMinWidth,
    };
  }
};

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [layoutStyle, setLayoutStyle] = useState<ILayoutStyles>({
    newMainWidth: LAYOUT_CONFIG.MAIN_MIN_WIDTH + 'px',
    sideBarWidth: LAYOUT_CONFIG.SIDE_MIN_WIDTH + 'px',
    navBarWidth: LAYOUT_CONFIG.NAV_MIN_WIDTH + 'px',
    mainMinWidth: LAYOUT_CONFIG.MAIN_MIN_WIDTH + 'px',
    navBarClassNames: '',
    mainClassNames: '',
    sideBarClassNames: '',
    sideBarMinWidth: '',
    navBarMinWidth: '',
  });
  const [isShowNavBar, setShowNavBar] = useState<boolean>(getNavBarInitialState(innerWidth));
  const [isShowSideBar, setShowSideBar] = useState<boolean>(false);
  const [navbarContent, setNavbarContentState] = useState<React.ReactNode>(null);
  const [mainContent, setMainContentState] = useState<React.ReactNode>(null);
  const [sidebarContent, setSidebarContentState] = useState<React.ReactNode>(null);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
      const showNavBar = getNavBarInitialState(window.innerWidth);
      setShowNavBar(showNavBar);
      setLayoutStyle(getLayoutStyle(window.innerWidth, showNavBar, isShowSideBar));
    };

    // Call handleResize initially
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarContextValue: INavbarContext = {
    showNavBar: isShowNavBar,
    toggleNavBar(show: boolean) {
      setShowNavBar(show);
      setLayoutStyle(getLayoutStyle(window.innerWidth, show, isShowSideBar));
    },
    navbarContent,
    setNavbarContent(content: React.ReactNode) {
      setNavbarContentState(content); // Set state using useState
    },
  };

  const mainContentContextValue: IMainContext = {
    mainContent,
    setMainContent(content: React.ReactNode) {
      setMainContentState(content); // Set state using useState
    },
  };

  const sidebarContextValue: ISidebarContext = {
    showSidebar: isShowSideBar,
    toggleSidebar(show: boolean) {
      setShowSideBar(show);
      setLayoutStyle(getLayoutStyle(window.innerWidth, isShowNavBar, show));
    },
    sidebarContent,
    setSidebarContent(content: React.ReactNode) {
      setSidebarContentState(content); // Set state using useState
    },
  };

  const layoutValue: ILayoutProvider = {
    layoutStyle,
    navBarContent: navbarContextValue,
    sidebarContent: sidebarContextValue,
    mainContent: mainContentContextValue,
  };

  return (
    <LayoutProviderContext.Provider value={layoutValue}>
      <NavbarContext.Provider value={navbarContextValue}>
        <MainContentContext.Provider value={mainContentContextValue}>
          <SidebarContext.Provider value={sidebarContextValue}>
            {children}
          </SidebarContext.Provider>
        </MainContentContext.Provider>
      </NavbarContext.Provider>
    </LayoutProviderContext.Provider>
  );
};

export { LayoutProvider, LayoutProviderContext };
