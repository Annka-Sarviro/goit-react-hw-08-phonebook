import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Title = styled.h2`
  color: #1c1c33;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Div = styled.div`
  width: 550px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 22px;
  background-color: #57d9a6;
  color: #1c1c33;
  border-radius: 4px;
  position: relative;
  padding: 25px;
`;
export const FormModal = styled(Form)`
  //   display: flex;
  //   flex-wrap: wrap;
  //   flex-direction: column;
  //   align-items: stretch;
`;

export const Label = styled.label`
  color: #1c1c33;
  font-family: inherit;
  display: block;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 22px;
  }
`;

export const Input = styled(Field)`
  width: inherit;
  font-size: 16px;
  border: none;
  border-bottom: #1c1c33 solid 1px;
  border-radius: 0.5px;
  background-color: inherit;

  &:focus {
    outline: none;
  }
`;
