import { useLogoutMutation } from 'redux/userApi';

const LogOut = () => {
  const [logout] = useLogoutMutation();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <div>
      <p>User email</p>
      <button type="button" onClick={handleLogoutClick}>
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
