import React from 'react';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ keys, url, fullUrl, isModalOpen }) => {
  return (
    <li className={styles.ImageGalleryItem} key={keys}>
      <img
        src={!isModalOpen ? url : fullUrl}
        alt=""
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
