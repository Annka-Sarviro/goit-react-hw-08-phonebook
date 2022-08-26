import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import { Label, Button, ErrorText } from './Form.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/userApi';

import { loginSuccess } from 'redux/user';
// const FormError = ({ email }) => {
//   return (
//     <ErrorMessage
//       name={email}
//       // render={() => <p>Enter valid number or name</p>}
//     />
//   );
// };

// const validationSchema = Yup.object({
//   password: Yup.string().required(),
//   email: Yup.string().required(),
// });

const initialValues = {
  password: '',
  email: '',
};

const LoginForm = ({ contacts }) => {
  const passwordInputId = nanoid();
  const emailInputId = nanoid();
  const dipatch = useDispatch();
  const [login, status] = useLoginMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      login(values).then(({ data }) => {
        dipatch(loginSuccess(data));
        console.log(data);
      });

      console.log(values);
      resetForm();
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

LoginForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
