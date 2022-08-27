import React from 'react';
import Section from 'components/Section';
import FormSubmit from 'components/Form/Form';
import Phonebook from 'components/Phonebook';
import Filter from 'components/Filter';

import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactApiSlice';

const useFiltredContcts = contacts => {
  const filter = useSelector(getFilterValue);
  const normalizeFiltr = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFiltr)
  );
};

function Contacts() {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();
  const filteredContacts = useFiltredContcts(contacts);

  if (error) {
    return <p>Oops...Refresh me</p>;
  }

  return (
    <>
      <Section title="Phonebook">
        <FormSubmit contacts={contacts} />
      </Section>

      {isLoading && <p>Loading...</p>}
      {contacts.length > 0 && !isLoading ? (
        <Section title="Contact">
          <Filter />
          <Phonebook contacts={filteredContacts} />
        </Section>
      ) : (
        <div>You don't have any contacts yet</div>
      )}
    </>
  );
}

export default Contacts;
