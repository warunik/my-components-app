import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  image?: string;
  bgColor?: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, icon, image, bgColor, link }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${bgColor ? bgColor : 'bg-white'} text-white relative`}>
      {image ? (
        <div className="relative">
          <img src={image} alt={title} className="rounded-lg  w-full h-48 bg-black" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-start space-y-4">
          <div className="text-4xl">{icon}</div>
            <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <a href={link} className="mt-4 text-white flex items-center space-x-2">
                <FaArrowRight className="text-xl" />
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start space-y-4">
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <a href={link} className="mt-4 text-white flex items-center space-x-2">
            <FaArrowRight className="text-xl" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Card;
