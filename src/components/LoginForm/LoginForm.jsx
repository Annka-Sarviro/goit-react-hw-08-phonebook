import React from 'react';
import { nanoid } from 'nanoid';

// import { Label, Button, ErrorText } from './Form.styled';
import { Formik, Form, Field } from 'formik';
import { useLoginMutation } from 'redux/userApi';

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
        resp?.error && alert('Invalid email or password');
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={emailInputId}>
          Email
          <Field
            type="email"
            name="email"
            id={emailInputId}
            title="Email"
            required
          />
          {/* <FormError name="email" /> */}
        </label>

        <label htmlFor={passwordInputId}>
          Password
          <Field
            type="password"
            name="password"
            title="Password may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {/* <FormError name="password" /> */}
        </label>

        <button type="submit">LogIn </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
