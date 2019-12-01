import React, { Component, createRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './App.module.css';
import Modal from '../Modal/Modal';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Searchbar from '../Searchbar/Searchbar';
import Loadder from '../Loader/Loader';
import * as imagesApi from '../services/imagesApi';
import Button from '../Button/Button';

const messageInvalid = 'Error';

export default class App extends Component {
  state = {
    images: [],
    isModalOpen: false,
    isLoading: false,
    error: null,
    pageNumber: 1,
    query: '',
  };

  // imageRef = createRef();

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  onSearch = query => {
    this.setState({
      query,
      images: [],
      pageNumber: 1,
    });
  };

  fetchImages = () => {
    this.setState({
      isLoading: true,
    });
    imagesApi
      .fetchImages(this.state.query, this.state.pageNumber)
      .then(picture => {
        console.log(picture);
        this.setState(state => ({
          images: [...state.images, ...picture],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  closeModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  notifyInvalid = () =>
    toast(messageInvalid, {
      position: toast.POSITION.TOP_CENTER,
    });

  handleImageRefClick = e => {
    const { current } = this.imageRef;
    if (current && e.target === current)
      this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { isModalOpen, images, isLoading, error } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSearch={this.onSearch} />
        {error && <ToastContainer />}
        {isLoading && (
          <Loadder
            type="CradleLoader"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 && <ImageGallery images={images} />}
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <ImageGalleryItem
              isModalOpen={isModalOpen}
              ref={this.imageRef}
              onClick={this.handleImageRefClick}
            />
          </Modal>
        )}
        {/* {images.length > 0 && <Button onClick={this.fetchImages} />} */}
      </div>
    );
  }
}
