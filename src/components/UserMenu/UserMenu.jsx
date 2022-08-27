import LogOut from 'components/LogOut';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const { email, name } = useSelector(state => state.user);

  return (
    <>
      <p>Hello, {name}</p>
      <p>{email}</p>
      <LogOut />
    </>
  );
};

export default UserMenu;
