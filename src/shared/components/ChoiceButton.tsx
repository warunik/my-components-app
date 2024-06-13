// How to use:
// <ChoiceButton icon={IconlyIcons.Video} text={"Video Call"}
// subtext={"1500 LKR (Per Call)"} type={Type.NotSelected} />
// <ChoiceButton icon={IconlyIcons.Video} text={"Video Call"}
// subtext={"1500 LKR (Per Call)"} type={Type.Selected} />

import HMIconly, {IconlyIcons} from './HMIconly.jsx';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import { useContext, useState } from 'react';

export enum Type {
  Selected,
  NotSelected,
}

export interface ChoiceButtonProps {
  icon: IconlyIcons;
  text: string;
  subtext: string;
  type: Type;
}

const backgroundColorMap = {
  [Type.Selected]: (theme: Theme) => theme.color.active,
  [Type.NotSelected]: (theme: Theme) => theme.color.mute,
};

const textColorMap = {
  [Type.Selected]: (theme: Theme) => theme.color.onActive,
  [Type.NotSelected]: (theme: Theme) => theme.color.text.secondary,
};

const borderColorMap = {
  [Type.Selected]: (theme: Theme) => theme.color.active,
  [Type.NotSelected]: (theme: Theme) => theme.color.alternate.primary,
};

export interface ChoiceButtonStylesProps {
  theme: Theme;
  type: Type;
}

const ChoiceButtonStyles = styled.button<ChoiceButtonStylesProps>`
  background: ${(props) => backgroundColorMap[props.type](props.theme)};
  border-color: ${(props) => borderColorMap[props.type](props.theme)};
  color: ${(props) => textColorMap[props.type](props.theme)};
  font-family: Inter, serif;
  padding: 22px 20px;
  border-radius: 9px;

  .text {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
  }

  .subtext {
    display: flex;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ChoiceButton = (props: ChoiceButtonProps) => {
  const theme = useContext(HMThemeContext);
  const [type, setType] = useState<Type>(props.type);

  const handleClick = () => {
    setType((prevType) => (prevType === Type.Selected ? Type.NotSelected : Type.Selected));
  };

  return (
    <ChoiceButtonStyles theme={theme} type={type} onClick={handleClick}>
      <div>
        <div className={'text'}>
          <HMIconly name={props.icon} /> {props.text}{' '}
        </div>
      </div>
      <div className={'subtext'}>{props.subtext}</div>
    </ChoiceButtonStyles>
  );
};
