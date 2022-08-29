import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  position: relative;
`;
export const Title = styled.h1`
  color: white;
  font-size: 16px;
  margin-top: 150px;
  text-transform: uppercase;
  border-bottom: #57d9a6 solid 1px;
  border-radius: 0.5px;
  display: inline-block;
  padding: 0 5px;
`;

export const Slogan = styled.h2`
  font-size: 55px;
  margin-top: 68px;
  margin-bottom: 22px;
  color: white;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  color: white;
  border-bottom: white solid 2px;
  border-radius: 1px;

 
  }
`;

export const Text = styled.p`
  color: white;
  margin-top: 22px;
`;

export const Img = styled('img')`
  position: absolute;
  top: 10px;
  right: 0;
  width: 550px;
`;
