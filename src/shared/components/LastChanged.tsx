import styled from 'styled-components';
import { useContext } from 'react';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';

interface LastChangedProps {
  date: string;
  time: string;
}

interface LastChangedStylesProps {
  theme: Theme;
}

const LastChangedStyles = styled.div<LastChangedStylesProps>`
  display: inline-flex;
  flex-direction: row;
  font-family: Inter, serif;
  font-size: 10px;

  .date {
    color: ${(props) => props.theme.color.text.primary};
    font-weight: 500;
  }

  .time {
    color: ${(props) => props.theme.color.text.tertiary};
    font-weight: 400;
  }
`;

export const LastChanged = (props: LastChangedProps) => {
  const theme_ = useContext(HMThemeContext);
  return (
    <LastChangedStyles theme={theme_}>
      <div className={'date'}>{props.date}</div>
      <div className={'time'}>{props.time}</div>
    </LastChangedStyles>
  );
};
