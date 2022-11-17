import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: 100vw;

  grid-gap: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 0;
  padding-left: 5px;
  padding-right: 5px;
  /* padding: 0; */
  /* list-style: none;
  margin-left: auto;
  margin-right: auto; */
  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    max-width: calc(100vw - 100px);
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    max-width: calc(100vw - 24px);
  }
  @media screen and (min-width: 1280px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100vw;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #34b8e9;
  border-radius: 15px;
  background-color: #306178;
  box-shadow: 13px 19px 32px -9px rgba(42, 66, 21, 07);
  @media screen and (min-width: 480px) {
    /* font-size: 25px; */

    /* justify-content: space-between; */
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    /* font-size: 30px; */
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ButtonCall = styled.button`
  color: #27872a;
  background-color: #c9bebe;
  border: #b76677;
  text-align: center;
  margin-right: 20px;
  padding: 0;
  cursor: pointer;
  :hover,
  :focus {
    color: #08f152;
  }
`;

export const ButtonDell = styled.button`
  color: #b01313;
  background-color: #c9bebe;
  border: #b76677;
  text-align: center;
  padding: 0;
  cursor: pointer;
  :hover,
  :focus {
    color: #ff0000;
  }
`;

export const ButtonUpdate = styled.button`
  color: #626226;
  background-color: #c9bebe;
  border: #b76677;
  text-align: center;
  margin-right: 20px;
  padding: 0;
  cursor: pointer;
  :hover,
  :focus {
    color: #ffe100;
  }
`;

export const Img = styled.img`
  height: fit-content;
  border: 1px solid black;
  border-radius: 25%;
  object-fit: contain;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
  @media screen and (min-width: 480px) {
    margin-right: 40px;
    margin-left: 20px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    /* font-size: 30px; */
  }
`;

export const Container = styled.div`
  text-align: center;
`;
