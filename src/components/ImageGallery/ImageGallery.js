import css from './ImageGallery.module.css';
import PropsTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ articles }) => {
  return (
    <ul className={css.ImageGallery}>
      {articles.map(article => {
        return (
          <ImageGalleryItem id={article.id} article={article.webformatURL} />
        );
      })}
    </ul>
  );
};
ImageGallery.propsTypes = {
  articles: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number.isRequired,
      webformatURL: PropsTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default ImageGallery;
