import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Navigate } from 'react-router-dom';

import { Div, Title, Slogan, Link, Text, Img } from './Login.styled';
import { Button } from '@mui/material';
import LogInModal from 'components/LogInModal';
import png from '../../img/group3.png';

export const Login = () => {
  const { token } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);

  if (token) {
    return <Navigate to="/" replace></Navigate>;
  }

  return (
    <Div>
      <Title>Create you Phonebook</Title>
      <Slogan>Let's talk freely</Slogan>

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
        onClick={() => setOpen(true)}
      >
        LogIn
      </Button>

      <Text>
        or{' '}
        <Link to="/register" replace>
          register
        </Link>{' '}
        now
      </Text>
      <Img src={png} alt="logo" />

      <LogInModal open={open} setOpen={setOpen}></LogInModal>
    </Div>
  );
};
