import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loggedIn } from 'auth/authRegister';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitLogin = evt => {
    evt.preventDefault();
    dispatch(loggedIn({ email, password }));
    resetLogin();
  };

  const resetLogin = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <Box
      minH="100vh"
      bgImage="url('https://st2.depositphotos.com/3715149/7222/v/450/depositphotos_72226323-stock-illustration-contacts-simple-vector-icon-set.jpg')"
      bgPosition="center"
      bgRepeat="repeat"
      pt="40px"
      pb="40px"
    >
      <form onSubmit={submitLogin}>
        <FormControl
          border="1px solid black"
          borderRadius="20px"
          bg="#306178"
          p="20px"
          w={{ base: '100%', sm: '400px', md: '600px' }}
          mr="auto"
          ml="auto"
          pt="20px"
          variant="outline"
          textAlign="center"
        >
          <FormLabel htmlFor="email" color="#e9eaed">
            Email Address
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <EmailIcon color="#306178" _focus={{ color: '#3182ce' }} />
              }
            />
            <Input
              bg="white"
              borderColor="#12edd9"
              _hover={{ borderColor: '#3182ce' }}
              placeholder="Full name"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
            />
          </InputGroup>

          <FormLabel htmlFor="password" color="#e9eaed" mt="5px">
            Password
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <LockIcon color="#306178" _focus={{ color: '#3182ce' }} />
              }
            />
            <Input
              bg="white"
              borderColor="#12edd9"
              _hover={{ borderColor: '#3182ce' }}
              placeholder="password"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={password}
            />
          </InputGroup>

          <Button
            colorScheme="cyan"
            variant="solid"
            mt="40px"
            mb="20px"
            w="100%"
            type="submit"
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
