import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './Navigation/Navigation';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('Pages/ContactPage/ContactPage'));
const RegistrationPage = lazy(() =>
  import('Pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
const CustomerPage = lazy(() => import('Pages/CustomerPage/CustomerPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
