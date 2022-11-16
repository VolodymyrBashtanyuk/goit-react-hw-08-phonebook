import styled from 'styled-components';

export const Wrapper = styled.header`
  color: white;
  padding: 20px;
  background-color: #306178;
  border-bottom: 1px solid #edd213;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  font-size: 20px;
  color: white;

  :not(:last-child) {
    margin-bottom: 20px;
    /* margin-right: 40px; */
  }
  :hover,
  :focus {
    color: #0dede3;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
`;

export const Footer = styled.footer`
  color: white;
  padding: 20px;
  text-align: center;
  background-color: #306178;
  border-top: 1px solid #edd213;
`;

export const Home = styled.span`
  font-size: 20px;
  :hover,
  :focus {
    color: #0dede3;
  }
`;
