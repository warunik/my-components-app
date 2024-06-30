import { ButtonHTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider';

interface ButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface ButtonStyleProps_ extends ButtonStyleProps {
  theme_: Theme;
}

export interface HMButtonProps extends ButtonStyleProps {
  text: string;
}

// Create an intermediate component that filters out the custom props
const ButtonBase = ({ ...props }: ButtonStyleProps) => <button {...props} />;

export const HMButtonStyle = styled(ButtonBase)<ButtonStyleProps_>`
  width: 140px;
  margin: 20px 10px 10px 10px;
  height: 40px;
  border-radius: 7px;
  border: none;
  font-family: Inter, serif;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${(props) => props.theme_.color.active};
  color: ${(props) => props.theme_.color.onActive};
`;

export const HMButton = ({ text, ...htmlProps }: HMButtonProps) => {
  const theme = useContext(HMThemeContext);
  return (
    <HMButtonStyle {...htmlProps} theme_={theme}>
      {text}
    </HMButtonStyle>
  );
};
