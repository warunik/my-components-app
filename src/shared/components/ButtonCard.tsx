// How to use:
// <ButtonCard
//   icon={IconlyIcons.Calendar}
//   text={"Manage Healthcare Workers"}
//   image={'image-url'}
//   bgColor={BGColor.blue}
//   link={"https://example.com"} />

import HMIconly, {IconlyIcons} from './HMIconly.jsx';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import { useContext } from 'react';

export enum BGColor {
  blue,
  orange,
  green,
}

export interface ButtonCardProps {
  bgColor: BGColor;
  icon: IconlyIcons;
  image: string;
  text: string;
  link: string;
}

export interface ButtonCardStylesProps {
  bgColor: BGColor;
  image: string;
  theme: Theme;
}

const bgColorMap = {
  [BGColor.blue]: (theme: Theme) => theme.color.alternate.primary,
  [BGColor.orange]: (theme: Theme) => theme.color.pending.primary,
  [BGColor.green]: (theme: Theme) => theme.color.active,
};

const ButtonCardStyles = styled.button<ButtonCardStylesProps>`
  height: 160px;
  border: none;
  border-radius: 15px;
  padding: 0 10px;
  background:
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.image}),
    center no-repeat,
    ${(props) => bgColorMap[props.bgColor](props.theme)};

  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
    color: ${(props) => props.theme.color.onActive};
  }

  .text {
    font-family: Inter, serif;
    font-size: 19px;
    font-weight: 500;
    text-align: left;
    color: ${(props: { theme: { color: { onActive: any; }; }; }) => props.theme.color.onActive};
  }
`;

export const ButtonCard = (props: ButtonCardProps) => {
  const theme_ = useContext(HMThemeContext);

  const handleClick = () => {
    window.location.href = props.link;
  };

  return (
    <ButtonCardStyles
      theme={theme_}
      image={props.image}
      bgColor={props.bgColor}
      onClick={handleClick}
    >
      <div className={'icon'}>
        <HMIconly name={props.icon} />
      </div>
      <div className={'text'}>{props.text}</div>
      <div className={'icon'}>
        <HMIconly name={IconlyIcons.ArrowRight} />
      </div>
    </ButtonCardStyles>
  );
};
