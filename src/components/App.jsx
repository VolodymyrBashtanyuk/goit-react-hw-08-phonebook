import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { SharedLayout } from './Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { userCurrent } from 'auth/authRegister';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublickRoute/PublickRoute';
import { getLoadingUserStatus } from 'redux/selectors';
import { Loading } from './Loader/Loader';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('Pages/ContactPage/ContactPage'));
const RegistrationPage = lazy(() =>
  import('Pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
const CustomerPage = lazy(() => import('Pages/CustomerPage/CustomerPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingUserStatus = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  return (
    <>
      {isLoadingUserStatus ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/customer" element={<CustomerPage />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
