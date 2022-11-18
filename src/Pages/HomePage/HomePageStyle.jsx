import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #f3ecec;
  min-height: 100vh;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 10px 40px;
  background: linear-gradient(to bottom, #1463ce 0%, #1c6ea4 38%, #c4c505 100%);
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
`;
