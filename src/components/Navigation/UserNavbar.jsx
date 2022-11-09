import { NavLink } from 'react-router-dom';
import { List, Item } from './NavigationStyle';
import { UserLogout } from 'components/UserLogout/UserLogout';

export const UserNavbar = () => {
  return (
    <>
      <List>
        <Item>
          <NavLink to="/contacts">Contacts</NavLink>
        </Item>
        <Item>
          <NavLink to="/customer">Phone book</NavLink>
        </Item>
      </List>
      <UserLogout />
    </>
  );
};
