import PropTypes from 'prop-types';
import css from './Modal.module.css';
const Modal = ({ onCloseModal, currentImageUrl }) => {
  console.log(currentImageUrl);
  return (
    <div className={css.Overlay} onClick={onCloseModal}>
      <div className={css.Modal}>
        <img src={currentImageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  currentImgUrl: PropTypes.string.isRequired,
};
export default Modal;
