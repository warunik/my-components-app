import { HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { HMThemeContext, Theme } from '../provider/ThemeProvider';
import HMIconly, { IconlyIcons } from './HMIconly';

export interface BreadcrumbItemProps {
  text: string;
  isShow: boolean;
  isFinal: boolean;
  onClick: () => void;
}

export interface BreadcrumbItemStyle extends HTMLAttributes<HTMLDivElement> {
  _theme: Theme;
  _isFinal: boolean;
}

const DivBase = ({ _theme, _isFinal, ...props }: BreadcrumbItemStyle) => <div {...props} />;

const BreadcrumbItemDiv = styled(DivBase)<BreadcrumbItemStyle>`
  width: fit-content;
  display: flex;

  .bc-text {
    font-size: ${(props) => {
    if (props._isFinal) {
      return props._theme.text.label.large;
    } else {
      return props._theme.text.label.medium;
    }
  }};
    font-weight: ${(props) => {
    if (props._isFinal) {
      return 600;
    } else {
      return 400;
    }
  }};
  }

  .bc-icon {
    width: 16px;
  }

  &:hover {
    cursor: ${(props) => {
    if (props._isFinal) {
      return 'default';
    } else {
      return 'pointer';
    }
  }};

    .bc-text {
      text-decoration: ${(props) => {
    if (props._isFinal) {
      return 'default';
    } else {
      return 'underline';
    }
  }};
    }
  }
`;

export const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const theme = useContext(HMThemeContext);

  return (
    <BreadcrumbItemDiv _theme={theme} _isFinal={props.isFinal} onClick={props.onClick}>
      {props.isShow ? (
        <>
          <div className={'bc-text'}>{props.text}</div>
          {!props.isFinal ? (
            <div className={'bc-icon'}>
              <HMIconly
                name={IconlyIcons.ChevronRight}
                primaryColor={theme.color.text.primary}
              />
            </div>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </BreadcrumbItemDiv>
  );
};
