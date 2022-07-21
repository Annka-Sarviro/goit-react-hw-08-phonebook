import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import FormSubmit from './Form/';
import Contacts from './Contacts';
import Filter from './Filter';
import { Container } from './App.styled';

const STORAGE_KEY = 'contact';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const user = { name: name, number: number, id: nanoid() };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    } else {
      return setContacts(prevState => [user, ...prevState]);
    }
  };

  const changeFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  const filtredContacts = () => {
    const normalizeFiltr = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFiltr)
    );
  };

  const removeContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <FormSubmit onSubmitForm={formSubmitHandler} />
      </Section>
      {contacts.length > 0 ? (
        <Section title="Contact">
          <Filter value={filter} onChange={changeFilter} />

          <Contacts data={filtredContacts()} onRemoveContact={removeContact} />
        </Section>
      ) : (
        <div>You don't have any contacts yet</div>
      )}
    </Container>
  );
}

export default App;
