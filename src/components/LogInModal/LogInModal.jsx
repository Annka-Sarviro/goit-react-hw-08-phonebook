import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import LoginForm from 'components/LoginForm';
import { BackdropModal } from './LoginModal.styled';
import { Modal } from './LoginModal.styled';

const LogInModal = ({ open, setOpen }) => {
  return (
    <BackdropModal open={open} onClose={() => setOpen(false)}>
      <Modal>
        <IconButton
          aria-label="close"
          variant="contained"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: '5px',
            top: '5px',
            p: 0,
          }}
        >
          <Close />
        </IconButton>
        <LoginForm />
      </Modal>
    </BackdropModal>
  );
};

export default LogInModal;
