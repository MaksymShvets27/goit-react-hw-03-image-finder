import css from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, article }) => {
  return (
    <li key={toString(id)} className={css.ImageGalleryItem}>
      <img
        id={id}
        src={article}
        alt=""
        loading="lazy"
        width="100%"
        height="100%"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  article: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
