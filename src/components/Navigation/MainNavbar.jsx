import { NavLink } from 'react-router-dom';
import { List, Item } from './NavigationStyle';

export const MainNavbar = () => {
  return (
    <>
      <List>
        <Item>
          <NavLink to="/register">Registration</NavLink>
        </Item>
        <Item>
          <NavLink to="/login">Log in</NavLink>
        </Item>
      </List>
    </>
  );
};
