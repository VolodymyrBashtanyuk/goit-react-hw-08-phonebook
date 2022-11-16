import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  max-width: 100vw;
  padding-left: 5px;
  padding-right: 5px;
  @media screen and (min-width: 480px) {
    /* grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); */
    /* max-width: calc(100vw - 40px); */
    margin-right: auto;
    margin-left: auto;
    /* justify-content: center; */
    width: 350px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    /* font-size: 30px; */
  }
  /* width: 350px;
  margin-right: auto;
  margin-left: auto; */
`;

export const Label = styled.label`
  font-size: 20px;

  /* font-size: 25px; */
  margin-bottom: 10px;
`;

export const Input = styled.input`
  /* width: 350px; */
  max-width: 100vw;
  background-color: #ebeced;
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 10px;
  @media screen and (min-width: 480px) {
    /* grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); */
    /* max-width: calc(100vw - 40px); */
    /* justify-content: center; */
    width: 350px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    /* font-size: 30px; */
  }
`;
