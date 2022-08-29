import { useLogoutMutation } from 'redux/userApi';
import { Button } from '@mui/material';

const LogOut = () => {
  const [logout] = useLogoutMutation();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <div>
      <Button
        style={{
          borderRadius: '3px',
          backgroundColor: '#57d9a6',
          padding: '6px 12px',
          fontSize: '16px',
          color: '#1c1c33',
          width: '112px',
          textTransform: 'none',
        }}
        variant="contained"
        onClick={handleLogoutClick}
        type="button"
      >
        LogOut
      </Button>
    </div>
  );
};

export default LogOut;
