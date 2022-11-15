import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  /* border: 1px solid back; */
  /* margin-right: auto;
  margin-left: auto; */
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    /* font-size: 30px; */
  }
`;

export const Label = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  /* font-size: 25px; */
`;

export const Input = styled.input`
  max-width: 100vw;
  background-color: #ebeced;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1280px) {
  }
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
  min-height: 100vh;
  background-image: url(https://static4.depositphotos.com/1011006/279/v/450/depositphotos_2790613-stock-illustration-notebook-and-lens-concept.jpg);
`;
