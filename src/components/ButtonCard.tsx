import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ButtonCard.css';

interface ButtonCardProps {
  type: 'card1' | 'card2' | 'card3';
  title: string;
  subtitle: string;
  icon: React.ReactNode | string;
  image?: string;
  bgColor?: string;
  link: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ type, title, subtitle, icon, image, bgColor, link }) => {
  return (
    <div
      className={`button-card ${type} ${bgColor ? bgColor : 'bg-white'}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      <div className={`button-card-content ${image ? 'overlay' : ''}`}>
        <div className="button-card-icon">{icon}</div>
        <div>
          <h3 className="button-card-title">{title}</h3>
          <p className="button-card-subtitle">{subtitle}</p>
        </div>
        <a href={link} className="button-card-link">
          <FaArrowRight className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default ButtonCard;
