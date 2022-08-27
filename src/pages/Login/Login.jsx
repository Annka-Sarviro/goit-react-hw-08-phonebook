import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from 'components/LoginForm';

export const Login = () => {
  const { token } = useSelector(state => state.user);

  if (token) {
    return <Navigate to="/" replace></Navigate>;
  }

  return <LoginForm />;
};
