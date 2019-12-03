import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import T from 'prop-types';

import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    children: T.node.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  handleBackdropRefClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.onClose();
  };

  render() {
    return createPortal(
      <div
        className={styles.Overlay}
        role="presentation"
        ref={this.backdropRef}
        onClick={this.handleBackdropRefClick}
      >
        <div className={styles.Modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>,
      MODAL_ROOT,
    );
  }
}
