// src/components/IconComponent.tsx

import React from 'react';

interface IconComponentProps {
  icon: React.ReactNode;
  label: string | React.ReactNode;
  link: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ icon, label, link }) => {
  return (
    <div className="flex flex-col items-center">
      <a
        href={link}
        className="flex flex-col justify-between items-center w-[93.933px] h-[93.933px] p-[15.656px] border rounded-[15.656px] shadow-custom border-gray-300 bg-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: '0px 0px 15.029px 0px rgba(222, 222, 222, 0.40)',
        }}
      >
        <div className="text-4xl text-green-500">
          {icon}
        </div>
      </a>
      <div className="mt-2 text-center font-inter font-bold text-[15.656px] leading-normal text-[#4E4E4E]">
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
