import { Link, Span, Logo, LogoText, Nav } from './Navigation.styled';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../img/group2.svg';

const Navigation = () => {
  const { token } = useSelector(state => state.user);

  return (
    <Nav>
      {token ? (
        <Link to="/">Contacts</Link>
      ) : (
        <>
          <Logo>
            <img src={logo} alt="logo" size="30" />
            <LogoText>You PhoneBook</LogoText>
          </Logo>
          <div>
            <Link to="register">Register</Link>
            <Span>or</Span>
            <Link to="login">LogIn</Link>{' '}
          </div>
        </>
      )}
    </Nav>
  );
};

export default Navigation;
