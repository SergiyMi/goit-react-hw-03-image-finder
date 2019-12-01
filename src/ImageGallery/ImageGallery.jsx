import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            keys={image.id}
            url={image.webformatURL}
            fullUrl={image.largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
