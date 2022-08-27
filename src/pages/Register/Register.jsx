import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RegisterForm from 'components/RegisterForm';

export const Register = () => {
  const { isRegister } = useSelector(state => state.user);

  if (isRegister) {
    return <Navigate to="/" replace></Navigate>;
  }

  return <RegisterForm />;
};
