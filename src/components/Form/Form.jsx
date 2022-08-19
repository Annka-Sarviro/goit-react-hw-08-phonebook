import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, Button, ErrorText } from './Form.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddContactsMutation } from 'redux/contactApiSlice';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={() => <ErrorText>Enter valid number or name</ErrorText>}
    />
  );
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormSubmit = ({ contacts }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [addContacts, { isLoading }] = useAddContactsMutation();

  const handleSubmit = async (values, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts`);
    }
    try {
      addContacts({ name: values.name, phone: values.number });
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
        <Label htmlFor={nameInputId}>
          Name
          <Field
            type="text"
            name="name"
            id={nameInputId}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Field
            type="tel"
            name="number"
            id={numberInputId}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />
        </Label>
        <Button type="submit" disabled={isLoading}>
          + Add contact{' '}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormSubmit;

FormSubmit.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
