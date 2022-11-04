import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { loggedOut } from 'auth/authRegister';

export const UserLogout = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //   };

  return (
    <div>
      <p>Welcom {userName}</p>
      <button type="submit" onClick={() => dispatch(loggedOut())}>
        Logout
      </button>
    </div>
  );
};
