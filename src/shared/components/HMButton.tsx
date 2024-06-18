import { ButtonHTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { Theme, HMThemeContext } from '../provider/ThemeProvider';

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
  margin: 10px;
  height: 40px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => props.theme_.color.active};
`;

export const HMButton = ({ text, ...htmlProps }: HMButtonProps) => {
  const theme = useContext(HMThemeContext);
  return (
    <HMButtonStyle {...htmlProps} theme_={theme}>
      {text}
    </HMButtonStyle>
  );
};
