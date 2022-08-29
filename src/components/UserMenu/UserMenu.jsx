import LogOut from 'components/LogOut';
import { useSelector } from 'react-redux';
import { Menu, Text } from './UserMenu.styled';

const UserMenu = () => {
  const { email, name } = useSelector(state => state.user);

  return (
    <Menu>
      <Text>Hello, {name}</Text>
      <Text>{email}</Text>
      <LogOut />
    </Menu>
  );
};

export default UserMenu;
