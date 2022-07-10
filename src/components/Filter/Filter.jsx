import React from 'react';
import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor={nanoid()}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
