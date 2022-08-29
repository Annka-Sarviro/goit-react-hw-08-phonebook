import React from 'react';

import { Contact, Name, Tel, Button } from './Contacts.styled';

import { useDeleteContactsMutation } from 'redux/contactApiSlice';

const ContactItem = ({ contact }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  const { id, name, number } = contact;
  return (
    <Contact key={id}>
      <Name>{name}</Name> <Tel>{number}</Tel>
      <Button
        style={{
          borderRadius: '3px',
          backgroundColor: '#57d9a6',
          padding: '6px 12px',
          fontSize: '16px',
          color: '#1c1c33',
          width: '30px',
          textTransform: 'none',
          boxShadow: 'none',
          border: 'none',
        }}
        variant="contained"
        type="button"
        onClick={() => deleteContacts(id)}
        disabled={isLoading}
      >
        x
      </Button>
    </Contact>
  );
};

export default ContactItem;
