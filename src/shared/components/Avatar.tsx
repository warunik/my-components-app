import { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider';

export enum AvatarType {
  CIRCLE,
  Box,
}

export interface BaseAvatarStyles extends HTMLAttributes<HTMLImageElement> {
}

export interface AvatarStyles extends BaseAvatarStyles {
  _type: AvatarType;
  _image: string;
  _isOnline: boolean;
  _theme: Theme;
}

export interface AvatarProps extends BaseAvatarStyles {
  onClickAvatar: () => void;
  type: AvatarType;
  image: string;
  isOnline: boolean;
}

const ImageBase = ({ _type, _image, _isOnline, _theme, ...props }: AvatarStyles) => (
  <img src={_image} {...props} alt={'Avatar'} />
);

const AvatarImage = styled(ImageBase)<AvatarStyles>`
  border-radius: ${(props) => (props._type === AvatarType.CIRCLE ? '50px' : '8px')};
  border: ${(props) => (props._isOnline ? `solid 2px ${props._theme.color.active}` : '')};
`;

export const Avatar = (props: AvatarProps) => {
  const theme = useContext(HMThemeContext);

  return (
    <AvatarImage
      _type={props.type}
      _isOnline={props.isOnline}
      _image={props.image}
      _theme={theme}
    ></AvatarImage>
  );
};
