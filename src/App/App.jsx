import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './App.module.css';
import Modal from '../Modal/Modal';
import ImageGallery from '../ImageGallery/ImageGallery';
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
    pageNumber: 0,
    query: '',
    imageUrl: '',
  };

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
        this.setState(state => ({
          images: [...state.images, ...picture],
          pageNumber: state.pageNumber + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
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
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      imageUrl: e.target.alt,
    });
  };

  render() {
    const { isModalOpen, images, isLoading, error, imageUrl } = this.state;
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
        {images.length > 0 && (
          <ImageGallery images={images} onClickes={this.handleImageRefClick} />
        )}
        {imageUrl && isModalOpen && (
          <Modal onClose={this.closeModal} url={imageUrl} />
        )}
        {images.length > 0 && <Button onClickes={this.fetchImages} />}
      </div>
    );
  }
}
