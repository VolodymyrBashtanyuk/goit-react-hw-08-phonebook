import { NavLink } from 'react-router-dom';
import { List, Item } from './NavigationStyle';

export const MainNavbar = ({ onClose }) => {
  return (
    <>
      <List>
        <Item>
          <NavLink to="/register" onClick={onClose}>
            Registration
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/login" onClick={onClose}>
            Log in
          </NavLink>
        </Item>
      </List>
    </>
  );
};
