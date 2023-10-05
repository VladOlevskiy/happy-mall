import React from 'react';
import styles from '../../(styles)/UI/button.module.scss';

export const Button = ({ type, text }) => {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
};
