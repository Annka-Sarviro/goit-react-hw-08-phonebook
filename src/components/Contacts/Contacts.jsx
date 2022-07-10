import React from 'react';

const Contacts = ({ data, onRemoveContact }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name} {number}
            <button type="button" onClick={() => onRemoveContact(id)}>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
