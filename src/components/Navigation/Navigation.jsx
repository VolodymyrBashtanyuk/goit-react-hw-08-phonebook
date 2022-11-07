import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Nav, Footer, Main } from './NavigationStyle';
import { MainNavbar } from './MainNavbar';
import { UserNavbar } from './UserNavbar';
import { getLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
// import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <>
      <Wrapper>
        <Nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          {!isLoggedIn ? <MainNavbar /> : <UserNavbar />}
        </Nav>
      </Wrapper>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <p>Copyright &copy; by Volodymyr Bashtanyuk</p>
      </Footer>
    </>
  );
};

// fallback={<Loader />}
