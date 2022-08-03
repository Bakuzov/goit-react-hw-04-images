import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal1, DivOverlay, Img } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handClickDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handClickDown);
  }

  handClickDown = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  };

  handleClickOnOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.close();
    }
  };

  render() {
    const { largeImageURL, close } = this.props;
    return (
      <DivOverlay onClick={this.handleClickOnOverlay}>
        <Modal1>
          <Img src={largeImageURL} alt="краса" onClick={close} />
        </Modal1>
      </DivOverlay>
    );
  }
}
