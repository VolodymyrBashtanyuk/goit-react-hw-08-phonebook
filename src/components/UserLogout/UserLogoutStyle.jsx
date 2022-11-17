import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: transparent;
  padding: 0;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  :hover,
  :focus {
    color: #0dede3;
  }
`;
