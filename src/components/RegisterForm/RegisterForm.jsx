import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import { Label, Button, ErrorText } from './Form.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRegisterMutation } from 'redux/userApi';
import { loginSuccess } from 'redux/user';
import { useDispatch } from 'react-redux';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={() => <p>Enter valid number or name</p>}
    />
  );
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ contacts }) => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const dipatch = useDispatch();

  const [register, status] = useRegisterMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      register(values);
      console.log(values);
      dipatch(loginSuccess(values));

      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameInputId}>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />
        </label>
        <label htmlFor={emailInputId}>
          Email
          <Field
            type="email"
            name="email"
            id={emailInputId}
            title="Email"
            required
          />
          <FormError name="email" />
        </label>

        <label htmlFor={emailInputId}>
          Password
          <Field
            type="password"
            name="password"
            id={passwordInputId}
            title="password"
            required
          />
          <FormError name="password" />
        </label>
        <button type="submit">Register </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
