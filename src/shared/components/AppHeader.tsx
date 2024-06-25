import styled from 'styled-components';
import { NavBarToggle } from './NavBarToggle.jsx';
import { Breadcrumb } from './Breadcrumb.jsx';
import { Notification } from './Notification.jsx';
import { IconlyIcons } from './HMIconly.jsx';
import { Avatar, AvatarType } from './Avatar.jsx';
import { HTMLAttributes, useContext } from 'react';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.jsx';

export interface IAppHeaderStyle extends HTMLAttributes<HTMLDivElement> {
  _theme: Theme;
}

const DivBase = ({ _theme, ...props }: IAppHeaderStyle) => <div {...props} />;

const AppHeaderDiv = styled(DivBase)<IAppHeaderStyle>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 30px 3px 30px;
  border-bottom: 1px solid ${(props) => props._theme.color.outline};

  .left {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .space {
    width: 10px;
  }
`;

export const AppHeader = () => {
  const theme = useContext(HMThemeContext);
  return (
    <AppHeaderDiv _theme={theme}>
      <div className={'left'}>
        <NavBarToggle />
        <div className={'space'} />
        <Breadcrumb />
      </div>
      <div className={'right'}>
        <Notification icon={IconlyIcons.Notification} count={3} />
        <div className={'space'} />
        <div style={{ width: '40px' }}>
          <Avatar
            onClickAvatar={() => {}}
            type={AvatarType.CIRCLE}
            image={
              'https://th.bing.com/th/id/OIP.4aCpc4LXZwPP56uXZyebQgHaHa' +
              '?w=500&h=500&rs=1&pid=ImgDetMain'
            }
            isOnline={false}
          />
        </div>
      </div>
    </AppHeaderDiv>
  );
};
