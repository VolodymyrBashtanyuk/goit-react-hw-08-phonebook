import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid back;
  margin-right: auto;
  margin-left: auto;
`;

export const Label = styled.label`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 350px;
  background-color: #ebeced;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 150px;
  font-weight: bold;
  background-color: #3ca9ba;
  border: transparent;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #4f94f3;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  background-image: url(https://static4.depositphotos.com/1011006/279/v/450/depositphotos_2790613-stock-illustration-notebook-and-lens-concept.jpg);
`;
