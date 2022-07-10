import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from '../Form/Form.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <Label htmlFor={nanoid()}>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
