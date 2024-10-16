// components/Button.tsx
import React from 'react';
import styles from '../styles/components/Button.module.scss';

interface ButtonProps {
  text: string;
  type?: 'cta' | 'outline' | 'transparent';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type = 'cta', onClick }) => {
  const buttonClass = `${styles.btn} ${styles[`btn--${type}`]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
