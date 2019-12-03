import React from 'react';

import styles from './Button.module.css';

const Button = ({ onClickes }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClickes}>
      Load more
    </button>
  );
};

export default Button;
