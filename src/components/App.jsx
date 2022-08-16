import React from 'react';
import Section from './Section';
import FormSubmit from './Form/';
import Contacts from './Contacts';
import Filter from './Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import {getContacts} from '../redux/contactSlice' 


function App() {
  const contacts = useSelector(getContacts)


  // const changeFilter = e => {
  //   const value = e.currentTarget.value;
  //   setFilter(value);
  // };

  // const filtredContacts = () => {
  //   const normalizeFiltr = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFiltr)
  //   );
  // };

  return (
    <Container>
      <Section title="Phonebook">
        <FormSubmit  />
      </Section>
      {contacts.length > 0 ? (
        <Section title="Contact">
          <Filter />

          <Contacts  />
        </Section>
      ) : (
        <div>You don't have any contacts yet</div>
      )}
    </Container>
  );
}

export default App;
