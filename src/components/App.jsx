import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else
      return this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFiltr = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFiltr)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.filtredContacts();
    return (
      <div>
        <Section title="Phonebook">
          <Form onFormSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contact">
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts
            data={visibleContact}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
