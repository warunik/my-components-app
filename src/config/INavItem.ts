import { HMIcons, IconlyIcons } from "../shared/components/HMIconly";

export interface INavItem {
  text: string;
  icon?: IconlyIcons | HMIcons;
  route: string;
  children?: Array<INavItem>;
}

export const navItems: {
  admin: Array<INavItem>;
  user: Array<INavItem>;
} = {
  admin: [
    {
      text: 'Home',
      icon: IconlyIcons.Home,
      route: '/home',
    },
    {
      text: 'Users',
      icon: IconlyIcons.People,
      route: '/users',
      children: [
        {
          text: 'Healthcare Workers',
          route: '/users/healthcare-workers',
        },
        {
          text: 'Medical Centers',
          route: '/users/medical-centers',
        },
        {
          text: 'Patients',
          route: '/users/patients',
        },
      ],
    },
    {
      text: 'Messages',
      icon: IconlyIcons.Chat,
      route: '/messages',
    },
    {
      text: 'Profile',
      icon: IconlyIcons.User,
      route: '/profile',
    },
  ],
  user: [
    {
      text: 'Home',
      icon: IconlyIcons.Home,
      route: '/home',
    },
    {
      text: 'Appointments',
      icon: IconlyIcons.Bookmark,
      route: '/appointments',
    },
    {
      text: 'Documents',
      icon: IconlyIcons.Paper,
      route: '/documents',
    },
    {
      text: 'Messages',
      icon: IconlyIcons.Chat,
      route: '/messages',
    },
    {
      text: 'Favorites',
      icon: IconlyIcons.Heart,
      route: '/favorites',
    },
    {
      text: 'Profile',
      icon: IconlyIcons.User,
      route: '/profile',
    },
    {
      text: 'Settings',
      icon: IconlyIcons.Setting,
      route: '/settings',
    },
  ],
};
