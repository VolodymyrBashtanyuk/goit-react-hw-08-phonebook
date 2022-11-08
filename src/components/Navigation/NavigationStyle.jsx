import styled from 'styled-components';

export const Wrapper = styled.header`
  color: white;
  padding: 20px;
  background-color: #163dcd;
  border-bottom: 1px solid #edd213;
`;

export const List = styled.ul`
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  font-size: 20px;
  :not(:last-child) {
    margin-right: 40px;
  }
  :hover,
  :focus {
    color: #0dede3;
  }
`;

export const Main = styled.main`
  background-color: #b3e6ed;
  min-height: 100vh;
  /* padding-top: 40px; */
`;

export const Footer = styled.footer`
  color: white;
  padding: 20px;
  text-align: center;
  background-color: #163dcd;
  border-top: 1px solid #edd213;
`;

export const Home = styled.span`
  font-size: 20px;
  :hover,
  :focus {
    color: #0dede3;
  }
`;
