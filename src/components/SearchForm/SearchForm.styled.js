import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  padding: 20px;
  /* border: 1px solid #ccc;
  border-radius: 5px; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  padding: 10px;

  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 15px;
  font-size: 20px;
  border: 4px solid #015346;
  border-radius: 15px;
`;

export const Button = styled.button`
  width: 120px;
  height: 51px;
  padding: 10px;
  background-color: #212121;
  color: #56dcc6;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  border: 4px solid #015346;
  border-radius: 15px;

  &:hover,
  :focus {
    background-color: #01927c;
  }
`;
