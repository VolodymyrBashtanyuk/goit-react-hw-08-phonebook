import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */

  font-size: 25px;
  font-weight: bold;
  border: 1px solid #34b8e9;
  background-color: #306178;
  box-shadow: 13px 19px 32px -9px rgba(42, 66, 21, 07);
  /* :not(:last-child) {
    margin-bottom: 15px;
  } */
`;
export const Text = styled.p`
  margin-bottom: 10px;
  /* text-align: end; */
  /* margin-right: 5px; */
  /* width: 35%;
  border-right: 1px solid #34b8e9; */
`;

export const ButtonCall = styled.button`
  /* width: 120px; */
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
  /* width: 120px; */
  color: #b01313;

  background-color: #c9bebe;
  border: #b76677;
  text-align: center;
  /* margin-right: 10px; */
  padding: 0;
  cursor: pointer;
  :hover,
  :focus {
    color: #ff0000;
  }
`;

export const ButtonUpdate = styled.button`
  /* width: 120px; */
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
  border: 1px solid black;
  border-radius: 25%;
  margin-right: 40px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Container = styled.div`
  text-align: center;
`;
