import PropTypes from 'prop-types';
import React from 'react';
import css from './Modal.module.css';

class Modal extends React.Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    currentImageUrl: PropTypes.string.isRequired,
  };

  keydown = event => {
    if (event.keyCode === 27) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown);
  }

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.onCloseModal}>
        <div className={css.Modal}>
          <img src={this.props.currentImageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
