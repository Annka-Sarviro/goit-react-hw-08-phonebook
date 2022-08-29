import React from 'react';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';

import { Formik } from 'formik';
import { useLoginMutation } from 'redux/userApi';
import { FormModal, Title, Label, Input } from './LoginFormStyled';

const initialValues = {
  password: '',
  email: '',
};

const LoginForm = () => {
  const passwordInputId = nanoid();
  const emailInputId = nanoid();

  const [login] = useLoginMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      login(values).then(resp => {
        resp?.error &&
          alert('IThat email and password combination is incorrect');
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Title>Please, enter your login and password</Title>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormModal>
          <Label htmlFor={emailInputId}>
            Email
            <Input
              type="email"
              name="email"
              id={emailInputId}
              title="Email"
              required
            />
            {/* <FormError name="email" /> */}
          </Label>

          <Label htmlFor={passwordInputId}>
            Password
            <Input
              type="password"
              name="password"
              title="Password may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            {/* <FormError name="password" /> */}
          </Label>

          <Button
            style={{
              borderRadius: '3px',
              backgroundColor: '#1c1c33',
              padding: '6px 12px',
              fontSize: '16px',
              color: '#fff',
              width: '112px',
              textTransform: 'none',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
            }}
            variant="contained"
            type="submit"
          >
            LogIn{' '}
          </Button>
        </FormModal>
      </Formik>
    </>
  );
};

export default LoginForm;
