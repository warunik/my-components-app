import { HMThemeContext, Theme } from '../provider/ThemeProvider';
import styled from 'styled-components';
import HMIconly, { IconlyIcons } from './HMIconly';
import { useContext } from 'react';

export interface ClosingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ClosingButtonStylesProps {
  theme: Theme;
}

const ClosingButtonStyles = styled.button<ClosingButtonStylesProps>`
  display: flex;
  border: 0;
  background-color: ${(props) => props.theme.color.active};
  color: ${(props) => props.theme.color.text.primary};
`;

export const ClosingButton: React.FC<ClosingButtonProps> = ({ ...htmlProps }) => {
  const theme = useContext(HMThemeContext);

  return (
    <ClosingButtonStyles theme={theme} {...htmlProps}>
      <HMIconly name={IconlyIcons.CloseSquare} />
    </ClosingButtonStyles>
  );
};
