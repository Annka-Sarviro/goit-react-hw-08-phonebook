import React from 'react';
import { Contact, Name, Tel, Button } from './Contacts.styled';

const Contacts = ({ data, onRemoveContact }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            <Name>{name}</Name> <Tel>{number}</Tel>
            <Button type="button" onClick={() => onRemoveContact(id)}>
              x
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};

export default Contacts;
