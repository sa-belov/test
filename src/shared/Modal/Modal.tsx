import ReactDOM from 'react-dom';
import styles from './Modal.module.sass';
import { FC } from 'react';

interface IProps {
  onClose: () => void;
}

const Modal: FC<IProps> = (props) => {
  const handleClick = (e) => {
    if (e.target.className === styles.shadow) props.onClose();
  };

  const modal = (
    <div className={styles.shadow} onClick={handleClick}>
      <div className={styles.modal}>{props.children}</div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementsByTagName('body')[0]);
};

export default Modal;
