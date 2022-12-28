import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import Modal from '../Modal/Modal';

class ImageGallery extends React.Component {
  state = {
    currentImageUrl: '',
    openModal: false,
  };

  componentDidMount() {
    document.addEventListener('click', event => {
      if (event.target.tagName === 'IMG') {
        this.setState({ currentImageUrl: event.target.src });
        this.setState({ openModal: true });
      }
    });
  }

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <>
        <ul className={css.ImageGallery}>
          {this.props.articles.map(article => {
            return (
              <ImageGalleryItem
                id={article.id}
                article={article.webformatURL}
                onOpenModal={this.onOpenModal}
              />
            );
          })}
        </ul>
        {this.state.openModal && (
          <Modal
            onCloseModal={this.onCloseModal}
            currentImageUrl={this.state.currentImageUrl}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default ImageGallery;
