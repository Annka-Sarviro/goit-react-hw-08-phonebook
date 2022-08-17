import React from 'react';
import Section from './Section';
import FormSubmit from './Form/';
import Contacts from './Contacts';
import Filter from './Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import {getFilterValue} from '../redux/contactSlice' 
import { useGetContactsQuery } from 'redux/contactApiSlice';

const useFiltredContcts =  (contacts) => {
    const filter = useSelector(getFilterValue);
    const normalizeFiltr = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFiltr)
    );
  }



function App() { 

  const { data: contacts=[], error, isLoading } = useGetContactsQuery()
  
  const filteredContacts = useFiltredContcts(contacts) 
  console.log(filteredContacts)
  return (
    <Container>
      <Section title="Phonebook">
        <FormSubmit  />
      </Section>
                                  
      {!isLoading ? (
        <Section title="Contact">
          <Filter />

          <Contacts  contacts = {filteredContacts}/>
        </Section>
      ) : (
        <div>You don't have any contacts yet</div>
      )}
    </Container>
  );
}

export default App;
