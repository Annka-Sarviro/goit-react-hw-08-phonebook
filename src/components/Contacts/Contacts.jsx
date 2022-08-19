import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
