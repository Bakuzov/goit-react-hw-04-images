import PropTypes from 'prop-types';
import { Ul } from './ImageGallary.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, handleModalImg }) => {
  return (
    <Ul>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        // console.log(images);
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            id={id}
            handleModalImg={handleModalImg}
          />
        );
      })}
    </Ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  handleModalImg: PropTypes.func,
};
