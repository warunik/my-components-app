import HMIconly, { HMIcons, IconlyIcons } from './HMIconly.jsx';
import React, { HTMLAttributes, useContext } from 'react';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import styled from 'styled-components';

export interface NotificationProps {
  icon: IconlyIcons | HMIcons;
  count: number;
}

export interface NotificationStyle extends HTMLAttributes<HTMLDivElement> {
  _theme: Theme;
}

const DivBase = ({ _theme, ...props }: NotificationStyle) => <div {...props} />;

const StyleDiv = styled(DivBase)<NotificationStyle>`
  margin-top: 10px;
  width: 38px;
  height: 40px;
  position: relative;
  display: inline-block;

  .icon {
    width: 34px;
    height: 34px;
    background-color: ${(props) => props._theme.color.alternate.secondary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .notification-badge {
    width: 18px;
    height: 18px;
    position: absolute;
    top: -6px;
    right: 0;
    background-color: ${(props) => props._theme.color.active};
    color: ${(props) => props._theme.color.mute};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Notification = (props: NotificationProps) => {
  const theme = useContext(HMThemeContext);

  return (
    <StyleDiv _theme={theme}>
      <div className={'icon'}>
        <HMIconly name={props.icon}></HMIconly>
      </div>
      <div className={'notification-badge'}>{props.count}</div>
    </StyleDiv>
  );
};
