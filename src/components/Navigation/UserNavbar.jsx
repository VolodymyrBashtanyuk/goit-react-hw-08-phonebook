import { NavLink } from 'react-router-dom';
import { List, Item } from './NavigationStyle';
import { UserLogout } from 'components/UserLogout/UserLogout';

export const UserNavbar = () => {
  return (
    <>
      <List>
        <Item>
          <NavLink to="/customer">Contacts</NavLink>
        </Item>
        <Item>
          <NavLink to="/contacts">Phone book</NavLink>
        </Item>
      </List>
      <UserLogout />
    </>
  );
};
