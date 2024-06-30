// How to use:
// <Times status={Status.NotSelected} timeFrom={"9:00 AM"} timeTo={"12.00 AM"} />
// <Times status={Status.Selected} timeFrom={"9:00 AM"} timeTo={"12.00 AM"} />

import styled from 'styled-components';
import { useContext } from 'react';
import { HMThemeContext, Theme } from '../provider/ThemeProvider';

export enum Status {
  NotSelected,
  Selected,
  Unavailable,
}

export interface TimesProps {
  status: Status;
  timeFrom: string;
  timeTo: string;
}

export interface TimesStylesProps {
  theme: Theme;
  status: Status;
}

const backgroundColorMap = {
  [Status.Selected]: (theme: Theme) => theme.color.activeSecondary,
  [Status.NotSelected]: (theme: Theme) => theme.color.alternate.secondary,
  [Status.Unavailable]: (theme: Theme) => theme.color.alternate.secondary,
};

const borderColorMap = {
  [Status.Selected]: (theme: Theme) => theme.color.active,
  [Status.NotSelected]: (theme: Theme) => theme.color.alternate.secondary,
  [Status.Unavailable]: (theme: Theme) => theme.color.alternate.secondary,
};

const textColorMap = {
  [Status.Selected]: (theme: Theme) => theme.color.onActive,
  [Status.NotSelected]: (theme: Theme) => theme.color.alternate.primary,
  [Status.Unavailable]: (theme: Theme) => theme.color.alternate.primary,
};

const textBgColorMap = {
  [Status.Selected]: (theme: Theme) => theme.color.active,
  [Status.NotSelected]: (theme: Theme) => theme.color.mute,
  [Status.Unavailable]: (theme: Theme) => theme.color.mute,
};

const opacityMap = {
  [Status.Selected]: 1,
  [Status.NotSelected]: 1,
  [Status.Unavailable]: 0.4,
};

const TimesStyles = styled.div<TimesStylesProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  background: ${(props) => backgroundColorMap[props.status](props.theme)};
  border: 1px solid ${(props) => borderColorMap[props.status](props.theme)};
  color: ${(props) => props.theme.color.alternate.primary};
  opacity: ${(props) => opacityMap[props.status]};
  border-radius: 8px;
  padding: 10px 0;
  width: 440px;
  gap: 8px;
  font-family: Inter, serif;
  font-size: 14px;
  font-weight: 400;

  .time {
    font-weight: 600;
    padding: 0 15px;
    border-radius: 49px;
    color: ${(props) => textColorMap[props.status](props.theme)};
    background-color: ${(props) => textBgColorMap[props.status](props.theme)};
  }
`;
export const Times = (props: TimesProps) => {
  const theme = useContext(HMThemeContext);
  return (
    <TimesStyles theme={theme} status={props.status}>
      From <div className={'time'}>{props.timeFrom}</div>
      to <div className={'time'}>{props.timeTo}</div>
    </TimesStyles>
  );
};
