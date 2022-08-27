import React from 'react';
import { nanoid } from 'nanoid';

// import { Label, Button, ErrorText } from './Form.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
