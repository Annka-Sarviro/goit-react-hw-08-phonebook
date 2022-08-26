import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const { token } = useSelector(state => state.user);

  return (
    <div className={styles.bar}>
      <Navigation />
      {token ? <UserMenu /> : null}
    </div>
  );
};

export default AppBar;
