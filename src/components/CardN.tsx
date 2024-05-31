import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface CardProps {
  type: 'card1' | 'card2' | 'card3';
  title: string;
  subtitle: string;
  icon: React.ReactNode | string;
  image?: string;
  bgColor?: string;
  link: string;
}

const CardN: React.FC<CardProps> = ({ type, title, subtitle, icon, image, bgColor, link }) => {
  const commonClasses = `rounded-lg shadow-lg text-white relative`;

  const styles = {
    card1: `${commonClasses} p-4 w-[252px] h-[164px] pl-[26.19px] pr-[47.81px] pt-[32.97px] pb-[16.24px]`,
    card2: `${commonClasses} p-4 w-[262px] h-[169px] flex justify-center items-center`,
    card3: `${commonClasses} p-4 w-[133.48px] h-[156.08px] border bg-zinc-100`,
  };

  return (
    <div
      className={`${styles[type]} ${bgColor ? bgColor : 'bg-white'}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {}}>

      <div className={`rounded-lg absolute top-0 left-0 w-full h-full ${image ? 'bg-black bg-opacity-50' : ''} flex flex-col items-start space-y-2 p-4`}>
        <div className="w-[22.04px] h-[20.94px] relative top-3">{icon}</div>
        <div>
          <h3 className="text-white text-[19.08px] font-medium font-['Inter'] leading-normal">{title}</h3>
          <p className="text-white text-[19.08px] font-medium font-['Inter'] leading-normal">{subtitle}</p>
        </div>
        <a href={link} className="absolute bottom-4 left-4 text-white flex items-center space-x-2">
          <FaArrowRight className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default CardN;
