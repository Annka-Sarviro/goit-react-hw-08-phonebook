import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from '../Form/Form.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label htmlFor={nanoid()}>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
