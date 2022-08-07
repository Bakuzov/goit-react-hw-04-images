import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Modal1, DivOverlay, Img } from './Modal.styled';

export const Modal = ({ largeImageURL, close }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleClickOnOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      close();
    }
  };

  return (
    <DivOverlay onClick={handleClickOnOverlay}>
      <Modal1>
        <Img src={largeImageURL} alt="краса" onClick={close} />
      </Modal1>
    </DivOverlay>
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};
