import styled from 'styled-components';

export const Label = styled.label`
  font-size: 20px;
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  margin-left: 4px;
  font-size: 16px;
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
