import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

interface CardProps {
  type: 'card1' | 'card2' | 'card3';
  title: string;
  subtitle: string;
  icon: React.ReactNode | string;
  image?: string;
  bgColor?: string;
  link: string;
}

const CardWB: React.FC<CardProps> = ({ type, title, subtitle, icon, image, bgColor, link }) => {
  const commonClasses = `rounded-lg shadow-lg text-white position-relative`;

  const styles = {
    card1: `${commonClasses} p-4 w-252px h-164px pl-26px pr-48px pt-33px pb-16px`,
    card2: `${commonClasses} p-4 w-262px h-169px d-flex justify-content-center align-items-center`,
    card3: `${commonClasses} p-4 w-133px h-156px border bg-light`,
  };

  return (
    <Card
      className={`${styles[type]} ${bgColor ? bgColor : 'bg-white'}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>

      <Card.Body className={`rounded-lg position-absolute top-0 start-0 w-100 h-100 ${image ? 'bg-dark bg-opacity-50' : ''} d-flex flex-column align-items-start p-4`}>
        <div className="w-22px h-21px position-relative top-3">{icon}</div>
        <div>
          <Card.Title className="text-white h3">{title}</Card.Title>
          <Card.Text className="text-white">{subtitle}</Card.Text>
        </div>
        <a href={link} className="position-absolute bottom-4 start-4 text-white d-flex align-items-center">
          <FaArrowRight className="h5 mb-0" />
        </a>
      </Card.Body>
    </Card>
  );
};

export default CardWB;
