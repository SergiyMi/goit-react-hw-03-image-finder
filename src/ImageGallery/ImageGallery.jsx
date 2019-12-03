import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClickes }) => {
  return (
    <ul className={styles.ImageGallery} onClick={onClickes}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            url={image.webformatURL}
            fullurl={image.largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
