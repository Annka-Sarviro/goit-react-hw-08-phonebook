import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: white;

  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    font-size: 20px;
    color: #57d9a6;
    border-bottom: #57d9a6 solid 4px;
    border-radius: 2px;
  }
`;

export const Span = styled.span`
  display: inline-block;
  margin-right: 20px;
  font-size: 15px;
`;

export const ButtonOpen = styled(Button)`
  &.active {
    font-size: 20px;
    color: #57d9a6;
    border-bottom: #57d9a6 solid 4px;
    border-radius: 2px;
  }
  // style={{
  //   borderRadius: '3px',
  //   backgroundColor: 'transparent',
  //   padding: '6px 12px',
  //   fontSize: '16px',
  //   color: '#1c1c33',
  //   width: '112px',
  //   textTransform: 'none',
  // }}
`;

export const LogoText = styled.div`
  hight: 30px;
  font-size: 20px;
  margin-left: 10px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
