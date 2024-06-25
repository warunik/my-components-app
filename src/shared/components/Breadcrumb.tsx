import React, { HTMLAttributes, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.js';
import HMIconly, { IconlyIcons } from './HMIconly.js';
import { BreadcrumbItem } from './BreadcrumbItem.js';
import {  BCItemData, getBreadcrumbItems } from '../utils/breadcrumb.js';

export interface BreadCrumbDivProps extends HTMLAttributes<HTMLDivElement> {
  _theme: Theme;
}

const DivBase = ({ _theme, ...props }: BreadCrumbDivProps) => <div {...props} />;

const BreadCrumbDiv = styled(DivBase)<BreadCrumbDivProps>`
  display: flex;
  align-items: center;

  .bc-container {
    display: flex;
    flex-grow: 1;
  }

  .bc-arrow {
    margin-right: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  .welcome {
    color: ${(props) => props._theme.color.text.primary};
    font-size: ${(props) => props._theme.text.title.medium};
  }

  .welcome b {
    color: ${(props) => props._theme.color.alternate.primary};
  }
`;

export const Breadcrumb = () => {
  const location = useLocation();
  const theme = useContext(HMThemeContext);
  const bcContainerRef = useRef<HTMLDivElement>(null);
  const [pathNameStack, setPathNameStack] = useState<BCItemData[]>([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (bcContainerRef.current) {
        const offsetWidth = bcContainerRef.current.offsetWidth;
        const items = getBreadcrumbItems(location.pathname, offsetWidth);
        setPathNameStack(items);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname, bcContainerRef.current]);

  return (
    <BreadCrumbDiv _theme={theme}>
      <div className={'bc-arrow'} onClick={handleGoBack}>
        {pathNameStack.length !== 0 ? <HMIconly name={IconlyIcons.ArrowLeft} /> : ''}
      </div>
      <div className={'bc-container'} ref={bcContainerRef}>
        {pathNameStack.length !== 0 ? (
          pathNameStack.map((item, key) => {
            const isFinal = pathNameStack.at(pathNameStack.length - 1).name === item.name;
            return (
              <BreadcrumbItem
                isFinal={isFinal}
                onClick={() => {
                  navigate(item.path);
                }}
                text={item.name}
                isShow={true}
                key={key}
              />
            );
          })
        ) : (
          <div className={'welcome'}>
            <b>Hello</b>, Welcome to Health Mate
          </div>
        )}
      </div>
    </BreadCrumbDiv>
  );
};
