import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import AppBar from '../AppBar';
// import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <GlobalStyle />
      <AppBar />
      <Outlet />
    </div>
  );
};
