import React from 'react';
import axios from 'axios';

import Seachbar from './Seachbar/Seachbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Audio } from 'react-loader-spinner';

import css from './App.module.css';

const ApiKey = '31277754-8952e55c2ce1852b40f45b8fd';

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
      await axios
        .get(
          `https://pixabay.com/api/?q=${this.state.seachName}&page=${this.state.page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => {
          this.setState({
            articles: [...this.state.articles, ...response.data.hits],
          });
        })
        .finally(() => {
          this.setState({ loading: false });
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
