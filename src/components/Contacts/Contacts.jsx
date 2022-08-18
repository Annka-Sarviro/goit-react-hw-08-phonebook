import React from 'react';
import { Contact, Name, Tel, Button } from './Contacts.styled';
import { useDeleteContactsMutation } from 'redux/contactApiSlice';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Contact key={id}>
            <Name>{name}</Name> <Tel>{phone}</Tel>
            <Button
              type="button"
              onClick={() => deleteContacts(id)}
              disabled={isLoading}
            >
              x
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
