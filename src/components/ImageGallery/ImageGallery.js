import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import Modal from '../Modal/Modal';

class ImageGallery extends React.Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  state = {
    currentImageUrl: '',
    openModal: false,
  };

  clickImage = event => {
    if (event.target.tagName === 'IMG') {
      let currentImgObj = this.props.articles.find(function (element) {
        return element.id === Number(event.target.id);
      });
      this.setState({ currentImageUrl: currentImgObj.largeImageURL });
      this.setState({ openModal: true });
    }
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <>
        <ul className={css.ImageGallery} onClick={this.clickImage}>
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

export default ImageGallery;
