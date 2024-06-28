import React, { useContext, useState } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HMIconly, { IconlyIcons } from './HMIconly.jsx';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';
import styled from 'styled-components';

interface CopyButtonProps {
  textToCopy: string;
}

export interface CopyButtonStylesProps {
  theme: Theme;
}

const CopyButtonStyles = styled.button<CopyButtonStylesProps>`
  display: inline-flex;
  padding: 3px 11px;
  margin-left: 20px;
  align-items: center;
  gap: 6px;
  font-size: 8px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.stroke};
  background-color: ${(props) => props.theme.color.mute};
  color: ${(props) => props.theme.color.text.secondary};

  .custom-tooltip .tooltip-inner {
    background-color: ${(props) => props.theme.color.active};
    color: ${(props) => props.theme.color.mute};
  }
`;

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const theme = useContext(HMThemeContext);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip className="custom-tooltip">
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </Tooltip>
      }
    >
      <CopyButtonStyles theme={theme} onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy'} <HMIconly name={IconlyIcons.Download} size={'small'} />
      </CopyButtonStyles>
    </OverlayTrigger>
  );
};

export default CopyButton;
