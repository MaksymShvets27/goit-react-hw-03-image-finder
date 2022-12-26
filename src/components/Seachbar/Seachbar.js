import PropsTypes from 'prop-types';
import React from 'react';
import css from './Seachbar.module.css';

class Seachbar extends React.Component {
  static propTypes = { onSubmit: PropsTypes.func.isRequired };
  state = {
    currentSeachValue: '',
  };

  seachbarSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.currentSeachValue);
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SeacrhForm}>
          <button
            type="submit"
            className={css.Button}
            onClick={this.seachbarSubmit}
          >
            <span className={css.ButtonLabel}>Search</span>
          </button>

          <input
            className={css.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={event =>
              this.setState({ currentSeachValue: event.target.value })
            }
          />
        </form>
      </header>
    );
  }
}

export default Seachbar;
