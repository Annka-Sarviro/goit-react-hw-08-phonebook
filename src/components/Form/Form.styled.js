import styled from 'styled-components';
import { Field } from 'formik';

export const FieldContact = styled(Field)`
  font-size: 16px;
  border: none;
  border-bottom: #57d9a6 solid 1px;
  border-radius: 0.5px;
  background-color: inherit;
  margin: 0 14px;
  color: white;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  display: inline-block;
  color: #57d9a6;
  font-family: inherit;
  font-size: 18px;
  :not(:last-child) {
    margin-bottom: 22px;
  }
`;

export const Input = styled.input`
  margin-left: 14px;
  color: white;
  font-size: 16px;
  border: none;
  border-bottom: #57d9a6 solid 1px;
  border-radius: 0.5px;
  background-color: inherit;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const ErrorText = styled.div`
  color: red;
  position: absolute;
`;
