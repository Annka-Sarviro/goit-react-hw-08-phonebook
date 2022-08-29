import React from 'react';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { CloseLink } from './RegisterForm.styled';

import {
  FormModal,
  Title,
  Label,
  Input,
  Div,
  Text,
} from '../LoginForm/LoginFormStyled';

import { Link } from 'pages/Login/Login.styled';
import { Formik, ErrorMessage } from 'formik';
import { useRegisterMutation } from 'redux/userApi';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={() => <p>Enter valid number or name</p>}
    />
  );
};

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const [register] = useRegisterMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      register(values).then(resp => {
        resp?.error && alert('User olready exist');
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Div>
      <Title>Hello, new user</Title>
      <Text>Please, create you account</Text>
      <CloseLink to="/" replace>
        <IconButton
          aria-label="close"
          variant="contained"
          sx={{
            position: 'absolute',
            right: '5px',
            top: '5px',
            p: 0,
          }}
        >
          <Close />
        </IconButton>
      </CloseLink>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormModal>
          <Label htmlFor={nameInputId}>
            Name
            <Input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <FormError name="name" />
          </Label>
          <Label htmlFor={emailInputId}>
            Email
            <Input
              type="email"
              name="email"
              id={emailInputId}
              title="Email"
              required
            />
            <FormError name="email" />
          </Label>

          <Label htmlFor={emailInputId}>
            Password
            <Input
              type="password"
              name="password"
              id={passwordInputId}
              title="password"
              required
            />
            <FormError name="password" />
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
            Register{' '}
          </Button>
        </FormModal>
      </Formik>
      <Text>
        or{' '}
        <Link to="/login" replace>
          login
        </Link>{' '}
        now
      </Text>
    </Div>
  );
};

export default RegisterForm;
