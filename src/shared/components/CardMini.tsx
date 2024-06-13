// How to use
// <CardMini icon={IconlyIcons.Heart} text={"13y+"} subtext={"Experience"}/>

import HMIconly, {IconlyIcons} from './HMIconly.jsx';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import { useContext } from 'react';

export interface CardMiniProps {
  icon: IconlyIcons;
  text: string;
  subtext: string;
}

export interface CardMiniStylesProps {
  theme: Theme;
}

const CardMiniStyles = styled.div<CardMiniStylesProps>`
  font-family: Inter, serif;
  display: inline-flex;
  padding: 9px 58px;
  border-radius: 12px;
  background: ${(props) => props.theme.color.activeSecondary};

  .text {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 21px;
    font-weight: 600;
    color: ${(props) => props.theme.color.active};
  }

  .subtext {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.color.text.secondary};
  }
`;

export const CardMini = (props: CardMiniProps) => {
  const theme = useContext(HMThemeContext);
  return (
    <CardMiniStyles theme={theme}>
      <div>
        <div className={'text'}>
          <HMIconly name={props.icon} set={'bold'} />
          {props.text}
        </div>
        <div className={'subtext'}>{props.subtext}</div>
      </div>
    </CardMiniStyles>
  );
};
