import React from 'react';
import { Contact, Name, Tel, Button } from './Contacts.styled';
import { useDispatch,  } from 'react-redux';
import { useFiltredContcts, removeContact } from 'redux/contactSlice';

const Contacts = () => {
  const dispatch = useDispatch()
  const filteredContacts = useFiltredContcts();
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            <Name>{name}</Name> <Tel>{number}</Tel>
            <Button type="button" onClick={() => dispatch(removeContact(id))}>
              x
            </Button>
          </Contact>
        );
      })}
    </ul>
  );
};

export default Contacts;


