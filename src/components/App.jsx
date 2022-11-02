import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './Navigation/Navigation';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('Pages/ContactPage/ContactPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/phoneBook" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
