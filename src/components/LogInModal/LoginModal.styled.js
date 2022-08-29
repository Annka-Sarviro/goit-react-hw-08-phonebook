import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';

export const Modal = styled.div`
  width: 550px;
  //   height: 350px;
  background-color: #57d9a6;
  color: #1c1c33;
  border-radius: 4px;
  position: relative;
  padding: 25px;
`;

export const BackdropModal = styled(Backdrop)`
  z-index: 9999;
`;
