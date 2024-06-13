// How to use
// <Communication icon={IconlyIcons.Chat} text={'Chat Now'} link={'https://example.com'} />
// Icons for this component: Calling, Chat

import HMIconly, {IconlyIcons} from './HMIconly.jsx';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import { useContext } from 'react';

export interface CommunicationProps {
  icon: IconlyIcons;
  text: string;
  link: string;
}

export interface CommunicationStylesProps {
  theme: Theme;
}

const CommunicationStyles = styled.button<CommunicationStylesProps>`
  border-radius: 9px;
  border: none;
  background: ${(props) => props.theme.color.alternate.secondary};
  padding: 7px;

  .text {
    text-align: center;
    font-family: Inter, serif;
    font-size: 11px;
    font-weight: 400;
    gap: 6px;
    color: ${(props) => props.theme.color.alternate.primary};
  }

  .icon {
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 6px;
    display: flex;
    color: ${(props) => props.theme.color.alternate.primary};
  }
`;

export const Communication = (props: CommunicationProps) => {
  const theme = useContext(HMThemeContext);
  const handleClick = () => {
    window.location.href = props.link;
  };

  return (
    <CommunicationStyles theme={theme} onClick={handleClick}>
      <div className={'icon'}>
        <HMIconly name={props.icon} set="bold" />
        <HMIconly name={IconlyIcons.ChevronRight} size="small" stroke="bold" />
      </div>
      <div className={'text'}>{props.text}</div>
    </CommunicationStyles>
  );
};
