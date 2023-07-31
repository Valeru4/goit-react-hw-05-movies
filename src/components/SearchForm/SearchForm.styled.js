import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  width: 400px;
  padding: 20px;
  /* border: 1px solid #ccc;
  border-radius: 5px; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 15px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
