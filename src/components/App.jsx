import React from 'react';

import Seachbar from './Seachbar/Seachbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Audio } from 'react-loader-spinner';

import css from './App.module.css';
import fetchImages from 'servise/fetchImages';
class App extends React.Component {
  state = {
    seachName: '',
    articles: [],
    page: 1,
    loading: false,
  };

  onSubmit = name => {
    this.setState({ seachName: name, articles: [], page: 1, loading: true });
  };

  onLoadMoreBtn = () => {
    this.setState({ page: this.state.page + 1, loading: true });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.seachName !== this.state.seachName ||
      this.state.page > prevState.page
    ) {
      let imagesResponce = await fetchImages(
        this.state.seachName,
        this.state.page
      );
      let imagesFiltred = imagesResponce.data.hits.map(image => {
        let imageObj = {};
        imageObj.id = image.id;
        imageObj.webformatURL = image.webformatURL;
        imageObj.largeImageURL = image.largeImageURL;
        return imageObj;
      });
      this.setState({
        articles: [...this.state.articles, ...imagesFiltred],
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className={css.App}>
        <Seachbar onSubmit={this.onSubmit} />
        {this.state.articles.length > 0 ? (
          <>
            <ImageGallery articles={this.state.articles} />
            {this.state.loading !== true && (
              <Button onLoadMore={this.onLoadMoreBtn} />
            )}
          </>
        ) : null}
        {this.state.loading === true && (
          <Audio
            height="100"
            width="100"
            radius="9"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass={css.audio}
          />
        )}
      </div>
    );
  }
}

export { App };
