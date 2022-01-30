import { ReactComponent as HeartIcon } from '../../images/heart.svg';
import { ReactComponent as PersonIcon } from '../../images/person.svg';
import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import styles from './Header.module.sass';

const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.logo}>
        <HeartIcon />
        <span>Medicine</span>
      </div>
      <div className={styles.profile}>
        <PersonIcon />
        <span>Александрова Александра Александровна</span>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Header;
