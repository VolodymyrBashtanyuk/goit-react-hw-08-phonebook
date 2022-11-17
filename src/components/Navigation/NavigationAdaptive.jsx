import { useRef } from 'react';
import { getLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { UserLogout } from 'components/UserLogout/UserLogout';
import { UserNavbar } from './UserNavbar';
import { MainNavbar } from './MainNavbar';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Show,
} from '@chakra-ui/react';

export const AdaptiveNavbar = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Button ref={btnRef} bg="transparent" onClick={onOpen}>
          <HamburgerIcon fontSize="30px" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />

          <DrawerContent bgColor="#306178">
            <DrawerCloseButton color="white" />
            <DrawerBody
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              pt="40px"
              pb="20px"
            >
              {!isLoggedIn ? (
                <MainNavbar onClose={onClose} />
              ) : (
                <>
                  <UserNavbar onClose={onClose} />
                  <UserLogout onClose={onClose} />
                </>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>

      <Show breakpoint="(min-width: 768px)">
        {!isLoggedIn ? (
          <MainNavbar />
        ) : (
          <>
            <UserNavbar />
            <UserLogout />
          </>
        )}
      </Show>
    </>
  );
};
