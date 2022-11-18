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
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
  }
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
  }
  :hover,
  :focus {
    color: #0dede3;
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 40px;
      margin-bottom: 0;
    }
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
