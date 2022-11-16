import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { loggedOut } from 'auth/authRegister';
import { Container, Text, Button } from './UserLogoutStyle';

export const UserLogout = ({ onClose }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <Container>
      <Text>Welcom {userName}</Text>
      <Button
        type="submit"
        onClick={() => {
          dispatch(loggedOut());
          onClose();
        }}
      >
        Logout
      </Button>
    </Container>
  );
};
