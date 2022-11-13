import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Nav, Footer, Main, Home } from './NavigationStyle';
import { MainNavbar } from './MainNavbar';
import { UserNavbar } from './UserNavbar';
import { getLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { LoaderPage } from 'components/Loader/Loader';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <>
      <Wrapper>
        <Nav>
          <NavLink to="/" end>
            <Home>Home</Home>
          </NavLink>
          {!isLoggedIn ? <MainNavbar /> : <UserNavbar />}
        </Nav>
      </Wrapper>
      <Main>
        <Suspense fallback={<LoaderPage />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <p>Copyright &copy; by Volodymyr Bashtanyuk</p>
      </Footer>
    </>
  );
};
