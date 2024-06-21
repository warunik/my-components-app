// How to use:
// <IconComponents icon={IconlyIcons.Calling}
// text={'24/7 Hotline'} link={'https://example.com'} />
// <IconComponents icon={IconlyIcons.Video}
// text={'Online Consultation'} link={'https://example.com'} />

import HMIconly, { IconlyIcons } from './HMIconly.jsx';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import { useContext } from 'react';

export interface IconComponentsProps {
  icon: IconlyIcons;
  text: string;
  link: string;
}

export interface IconComponentsStylesProps {
  theme_: Theme;
}

const IconComponentsStyles = styled.div<IconComponentsStylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 94px;
  text-align: center;

  .icon {
    margin-bottom: 15px;
    border: 1px solid ${(props) => props.theme_.color.outline};
    border-radius: 15px;
    padding: 25px;
    color: ${(props) => props.theme_.color.active};
  }

  .text {
    font-family: Inter, serif;
    font-weight: 700;
    padding: 0 5px;
    font-size: 1.5rem; //change after checking figma
    color: ${(props) => props.theme_.color.text.secondary};
  }
`;

export const IconComponents = (props: IconComponentsProps) => {
  const theme = useContext(HMThemeContext);

  return (
    <IconComponentsStyles as="a" theme_={theme}>
      <a href={props.link}>
        <div className="icon">
          <HMIconly name={props.icon} set="bold" />
        </div>
      </a>
      <div className="text">{props.text}</div>
    </IconComponentsStyles>
  );
};
