import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  max-width: 100vw;
  padding-left: 5px;
  padding-right: 5px;
  @media screen and (min-width: 480px) {
    width: 350px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Input = styled.input`
  max-width: 100vw;
  background-color: #ebeced;
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 10px;
  @media screen and (min-width: 480px) {
    width: 350px;
  }
`;
