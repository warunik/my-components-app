import { Iconly, IconProps } from 'react-iconly';
import React from 'react';
import SyncIcon from '../icons/SyncIcon';

export enum IconlyIcons {
  Home = 'Home',
  Chat = 'Chat',
  TickSquare = 'TickSquare',
  TimeCircle = 'TimeCircle',
  CloseSquare = 'CloseSquare',
  Calling = 'Calling',
  Video = 'Video',
  Scan = 'Scan',
  Document = 'Document',
  Bookmark = 'Bookmark',
  Chart = 'Chart',
  Heart = 'Heart',
  User = 'User',
  Calendar = 'Calendar',
  Profile = 'Profile',
  Message = 'Message',
  ArrowRight = 'ArrowRight',
  ChevronRight = 'ChevronRight',
}

export enum HMIcons {
  Edit = 'Edit',
  Message = 'Message',
}

interface HMIconProps extends Omit<IconProps, 'name'> {
  name: IconlyIcons | HMIcons;
}

const HMIconly: React.FC<HMIconProps> = ({ name, ...props }) => {
  if (name in IconlyIcons) {
    return <Iconly name={name.toString()} {...props} />;
  } else if (name in HMIcons) {
    switch (name) {
      case HMIcons.Edit:
        return <SyncIcon {...props} fill={props.primaryColor} />;
      case HMIcons.Message:
        return <SyncIcon {...props} fill={props.primaryColor} />;
      default:
        return <SyncIcon {...props} fill={props.primaryColor} />;
    }
  }
};

export default HMIconly;
