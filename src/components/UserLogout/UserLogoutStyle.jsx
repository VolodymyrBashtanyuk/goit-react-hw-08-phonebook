import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-right: 20px;
`;

export const Button = styled.button`
  font-size: 20px;

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
