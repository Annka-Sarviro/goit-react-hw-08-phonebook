import React from 'react';
import { Contact, Name, Tel, Button } from './Contacts.styled';
import PropTypes from 'prop-types';

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

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onRemoveContact: PropTypes.func,
};
