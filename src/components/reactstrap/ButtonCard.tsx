import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

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
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        color: 'white',
        position: 'relative',
        padding: '1rem',
        ...cardStyle,
        ...(image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}),
        backgroundColor: bgColor ? bgColor : 'white',
      }}
    >
      <CardBody
        style={{
          borderRadius: '0.5rem',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '1rem',
          gap: '0.5rem',
          ...(image ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : {}),
        }}
      >
        <div style={{ position: 'absolute', top: '30px', width: '1.5rem', height: '1.25rem' }}>{icon}</div>
        <div>
          <CardTitle style={{ color: 'white', fontSize: '1.25rem', fontWeight: 500, fontFamily: 'Inter, sans-serif', lineHeight: 'normal' }}>
            {title}
          </CardTitle>
          <CardSubtitle style={{ color: 'white', fontSize: '1.25rem', fontWeight: 500, fontFamily: 'Inter, sans-serif', lineHeight: 'normal' }}>
            {subtitle}
          </CardSubtitle>
        </div>
        <a href={link} style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaArrowRight className="text-xl" />
        </a>
      </CardBody>
    </Card>
  );
};

export default ButtonCard;
