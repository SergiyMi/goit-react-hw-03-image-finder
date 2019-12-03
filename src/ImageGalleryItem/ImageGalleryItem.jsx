import React from 'react';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, url, fullurl }) => {
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        id={id}
        src={url}
        alt={fullurl}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
