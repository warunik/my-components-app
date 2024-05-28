// src/components/AppointmentStatus.tsx

import React from 'react';

interface AppointmentStatusProps {
  text: string;
  color: 'orange' | 'red' | 'green';
  icon: 'pending' | 'declined' | 'confirmed';
}

const AppointmentStatus: React.FC<AppointmentStatusProps> = ({ text, color, icon }) => {
  const colorClasses = {
    orange: 'bg-orange-500 text-white',
    red: 'bg-red-500 text-white',
    green: 'bg-green-500 text-white',
  };

  const iconPaths = {
    pending: (
      <svg
        className="w-5 h-5 mr-2 animate-spin"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" className="opacity-25" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.42-1.42"
          strokeWidth="2"
          className="opacity-75"
        />
      </svg>
    ),
    declined: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    confirmed: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  };

  return (
    <div className={`inline-flex items-center py-2 px-4 rounded-full ${colorClasses[color]}`}>
      {iconPaths[icon]}
      <span>{text}</span>
    </div>
  );
};

export default AppointmentStatus;
