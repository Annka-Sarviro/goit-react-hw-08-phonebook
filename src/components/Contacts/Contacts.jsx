import React from 'react';
import { Contact, Name, Tel, Button } from './Contacts.styled';
import { useDispatch,  } from 'react-redux';
import { useFiltredContcts, removeContact } from 'redux/contactSlice';
import { useEffect } from 'react';
import { useDeleteContactsMutation } from 'redux/contactApiSlice';

const Contacts = ({contacts}) => {
  // const filteredContacts = useFiltredContcts();
 const [deleteContacts] = useDeleteContactsMutation()
  
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Contact key={id}>
            <Name>{name}</Name> <Tel>{phone}</Tel>
            <Button type="button" onClick={() => deleteContacts(id)}>
              x
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};

export default Contacts;


