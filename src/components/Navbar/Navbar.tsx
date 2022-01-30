import routes from '../../router/routes';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.sass';

const Navbar = () => {
  const renderLinks = () => {
    return routes.map((route) => (
      <NavLink
        className={styles.navLink}
        activeClassName={styles.activeLink}
        key={route.id}
        to={route.path}
        exact={true}
      >
        {route.name}
      </NavLink>
    ));
  };

  return (
    <div className={styles.linksContainer}>
      <div className={styles.links}>{renderLinks()}</div>
    </div>
  );
};

export default Navbar;
