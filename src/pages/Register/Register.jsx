import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RegisterForm from 'components/RegisterForm';

export const Register = () => {
  const { token } = useSelector(state => state.user);

  if (token) {
    return <Navigate to="/" replace></Navigate>;
  }

  return <RegisterForm />;
};
