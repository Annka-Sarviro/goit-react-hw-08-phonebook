import styled from 'styled-components';

export const Contact = styled.li`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 420px;
  border-bottom: #57d9a6 solid 1px;
  border-radius: 0.5px;
  padding: 5px;
`;

export const Name = styled.span`
  font-weight: 700;
  flex-grow: 1;
  color: white;
`;

export const Tel = styled.span`
  font-weight: 400;
  color: white;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
