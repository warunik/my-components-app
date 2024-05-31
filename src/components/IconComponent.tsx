// src/components/IconComponent.tsx

import React from 'react';

interface IconComponentProps {
  icon: string;
  label: string | React.ReactNode;
  link: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ icon, label, link }) => {
  return (
    <div className="w-[93.93px] h-[146.93px] flex flex-col justify-start items-center gap-[15px]">
      <a
        href={link}
        className="w-[93.93px] h-[93.93px] p-[15.66px] bg-white rounded-2xl shadow border border-neutral-300 flex flex-col justify-between items-center"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: '0px 0px 15.029px 0px rgba(222, 222, 222, 0.40)',
        }}
      >
        <div className="w-[34.86px] h-[34.86px] flex justify-center items-center">
          <img src={icon} alt="icon" className="w-full h-full" />
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
