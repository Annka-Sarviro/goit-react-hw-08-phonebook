import React from 'react';

import { Contact, Name, Tel, Button } from './Contacts.styled';

import { useDeleteContactsMutation } from 'redux/contactApiSlice';

const ContactItem = ({ contact }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  const { id, name, phone } = contact;
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
};

export default ContactItem;
