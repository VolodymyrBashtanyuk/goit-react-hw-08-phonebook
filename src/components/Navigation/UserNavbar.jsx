import { NavLink } from 'react-router-dom';
import { List, Item } from './NavigationStyle';

export const UserNavbar = ({ onClose }) => {
  return (
    <>
      <List>
        <Item>
          <NavLink to="/contacts" onClick={onClose}>
            Contacts
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/customer" onClick={onClose}>
            Phone book
          </NavLink>
        </Item>
      </List>
    </>
  );
};
