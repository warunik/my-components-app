import HMLogoIcon from './HMLogoIcon.jsx';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import { useContext } from 'react';

export interface HMLogoStylesProps {
  theme: Theme;
}

const HMLogoStyles = styled.div<HMLogoStylesProps>`
  display: flex;
  align-items: center;
  //font-family: Verdana, serif;
  font-size: 18px;
  text-align: left;
  color: ${(props) => props.theme.color.alternate.primary};

  .position {
    display: -ms-inline-flexbox;
    line-height: 1;
    padding-left: 5px;
  }

  .text1 {
    font-weight: 400;
  }

  .text2 {
    font-weight: 700;
  }
`;

export const HMLogo = () => {
  const theme = useContext(HMThemeContext);
  return (
    <HMLogoStyles theme={theme}>
      <HMLogoIcon color={theme.color.active} />
      <div className={'position'}>
        <div className={'text1'}>HEALTH</div>
        <div className={'text2'}>MATE</div>
      </div>
    </HMLogoStyles>
  );
};
