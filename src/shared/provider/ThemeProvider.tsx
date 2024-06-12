import React, { ReactNode } from 'react';
import { ColorMap, TextMap, theme } from '../../theme';

export interface Theme {
  color: ColorMap;
  text: TextMap;
}

const theme_: Theme = {
  color: theme.colors.light,
  text: theme.text,
};

const HMThemeContext = React.createContext<Theme>(theme_);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <HMThemeContext.Provider value={theme_}>{children}</HMThemeContext.Provider>;
};

export { ThemeProvider, HMThemeContext };
