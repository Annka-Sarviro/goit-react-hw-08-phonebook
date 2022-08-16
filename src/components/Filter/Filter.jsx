import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from '../Form/Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, getFilterValue } from 'redux/contactSlice';

const Filter = () => {
  const filterValue = useSelector(getFilterValue)
  const dispatch = useDispatch();
  return (
    <Label htmlFor={nanoid()}>
      Find contacts by name
      <Input type="text" value={filterValue} onChange={e => dispatch(addFilter(e.currentTarget.value))}/>
    </Label>
  );
};

export default Filter;


