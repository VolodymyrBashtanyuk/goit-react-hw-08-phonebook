import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  @media screen and (min-width: 480px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-top: 40px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const SubTitle = styled.h2`
  font-size: 35px;
  text-align: center;
  margin-bottom: 10px;
  padding-top: 40px;
`;

export const ErrorMessage = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: red;
  margin-top: 60px;
`;
