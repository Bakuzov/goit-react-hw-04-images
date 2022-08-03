import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  handleModalImg,
}) => {
  return (
    <Li>
      <Img
        src={webformatURL}
        alt="picter"
        onClick={() => {
          handleModalImg(largeImageURL);
        }}
      />
    </Li>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleModalImg: PropTypes.func.isRequired,
};
