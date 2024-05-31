
import React from 'react';

interface StatusTabsProps {
  text: string;
  icon: 'pending' | 'declined' | 'confirmed';
}

const StatusTabs: React.FC<StatusTabsProps> = ({ text, icon }) => {
  const iconData = {
    pending: {
      color: 'bg-orange-300 border-orange-300 text-white',
      imgSrc: 'https://example.com/pending-icon.png', //add icon
    },
    declined: {
      color: 'bg-red-400 border-red-400 text-white',
      imgSrc: 'https://example.com/declined-icon.png', //add icon
    },
    confirmed: {
      color: 'bg-emerald-500 border-emerald-500 text-white',
      imgSrc: 'https://example.com/confirmed-icon.png', //add icon
    },
  };

  return (
    <div className={`flex items-center h-[25.99px] px-[12.95px] py-px ${iconData[icon].color} rounded-[92.66px] border items-center gap-[19.93px] inline-flex`}>
      <div className="flex items-center gap-[6.97px]">
        <div className="w-[15.54px] h-[15.54px] relative">
          <img src={iconData[icon].imgSrc} alt={`${icon} icon`} className="w-full h-full" />
        </div>
        <div className="text-sm font-normal font-['Inter'] leading-normal">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusTabs;
