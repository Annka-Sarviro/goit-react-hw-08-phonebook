import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import FormSubmit from './Form/';
import Contacts from './Contacts';
import Filter from './Filter';
import { Container } from './App.styled';

const STORAGE_KEY = 'contact';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(STORAGE_KEY);
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
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
      <Container>
        <Section title="Phonebook">
          <FormSubmit onSubmitForm={this.formSubmitHandler} />
        </Section>
        {this.state.contacts.length > 0 ? (
          <Section title="Contact">
            <Filter value={filter} onChange={this.changeFilter} />

            <Contacts
              data={visibleContact}
              onRemoveContact={this.removeContact}
            />
          </Section>
        ) : (
          <div>You don't have any contacts yet</div>
        )}
      </Container>
    );
  }
}

export default App;
