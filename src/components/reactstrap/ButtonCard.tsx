import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
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
  const cardStyles = {
    card1: {
      width: '16rem',
      height: '10rem',
      paddingLeft: '1.75rem',
      paddingRight: '3rem',
      paddingTop: '2rem',
      paddingBottom: '1rem',
    },
    card2: {
      width: '16rem',
      height: '11rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card3: {
      width: '8rem',
      height: '10rem',
      border: '1px solid #e0e0e0',
      backgroundColor: '#f5f5f5',
    },
  };

  const cardStyle = cardStyles[type];

  return (
    <Card
      className={`button-card ${bgColor ? bgColor : 'bg-white'}`}
      style={image ? { ...cardStyle, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : cardStyle}
    >
      <CardBody className={`button-card-content ${image ? 'overlay' : ''}`}>
        <div className="button-card-icon">{icon}</div>
        <div>
          <CardTitle className="button-card-title">{title}</CardTitle>
          <CardSubtitle className="button-card-subtitle">{subtitle}</CardSubtitle>
        </div>
        <a href={link} className="button-card-link">
          <FaArrowRight className="text-xl" />
        </a>
      </CardBody>
    </Card>
  );
};

export default ButtonCard;
