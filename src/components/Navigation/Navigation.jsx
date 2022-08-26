// import { Link } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { token } = useSelector(state => state.user);

  return (
    <nav>
      {token ? (
        <NavLink to="/">Contacts</NavLink>
      ) : (
        <>
          <NavLink to="register">Register</NavLink>
          <NavLink to="login">LogIn</NavLink>{' '}
        </>
      )}
    </nav>
  );
};

export default Navigation;
