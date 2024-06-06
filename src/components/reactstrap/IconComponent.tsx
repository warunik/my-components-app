// src/components/IconComponent.tsx

import React from 'react';

interface IconComponentProps {
  icon: string;
  label: string | React.ReactNode;
  link: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ icon, label, link }) => {
  return (
    <div className="w-24 h-36 flex flex-col justify-start items-center gap-3.5">
      <a
        href={link}
        className="w-24 h-24 p-4 bg-white rounded-2xl shadow border border-neutral-300 flex flex-col justify-between items-center"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: '0px 0px 15.029px 0px rgba(222, 222, 222, 0.40)',
        }}
      >
        <div className="w-9 h-9 px-px py-px flex justify-center items-center">
          <div className="w-8 h-8 relative">
            <img src={icon} alt="icon" className="w-full h-full" />
          </div>
        </div>
      </a>
      <div className="text-center text-neutral-600 text-base font-bold font-['Inter']">
        {typeof label === 'string' ? (
          label.split(' ').map((word, index) => (
            <div key={index}>{word}</div>
          ))
        ) : (
          label
        )}
      </div>
    </div>
  );
};

export default IconComponent;
