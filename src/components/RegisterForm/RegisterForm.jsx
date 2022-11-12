import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'auth/authRegister';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Button,
  useBoolean,
  Icon,
} from '@chakra-ui/react';
import { LockIcon, EmailIcon } from '@chakra-ui/icons';
import { MdManageAccounts } from 'react-icons/md';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useBoolean();

  const dispatch = useDispatch();

  const submitForm = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      h="100vh"
      bgImage="url('https://st2.depositphotos.com/3715149/7222/v/450/depositphotos_72226323-stock-illustration-contacts-simple-vector-icon-set.jpg')"
      bgPosition="center"
      bgRepeat="repeat"
      pt="40px"
    >
      <form onSubmit={submitForm}>
        <FormControl
          // onSubmit={submitForm}
          border="1px solid black"
          borderRadius="20px"
          bg="#306178"
          p="20px"
          w="600px"
          mr="auto"
          ml="auto"
          pt="20px"
          variant="outline"
          textAlign="center"
        >
          <FormLabel htmlFor="name" color="#e9eaed">
            Full name
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon
                  as={MdManageAccounts}
                  color="#306178"
                  _focus={{ color: '#3182ce' }}
                />
              }
            />
            <Input
              bg="white"
              borderColor="#12edd9"
              _hover={{ borderColor: '#3182ce' }}
              placeholder="Full name"
              id="name"
              name="name"
              type="name"
              onChange={handleChange}
              value={name}
            />
          </InputGroup>
          <FormLabel htmlFor="email" color="#e9eaed" mt="5px">
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
              _hover={{ borderColor: '#3182ce' }}
              borderColor="#12edd9"
              placeholder="email"
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
          <InputGroup size="md">
            <InputLeftElement
              pointerEvents="none"
              children={
                <LockIcon color="#306178" _focus={{ color: '#3182ce' }} />
              }
            />
            <Input
              bg="white"
              _hover={{ borderColor: '#3182ce' }}
              borderColor="#12edd9"
              placeholder="password"
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              onChange={handleChange}
              value={password}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="cyan"
                variant="solid"
                h="1.75rem"
                size="sm"
                onClick={setShow.toggle}
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            colorScheme="cyan"
            variant="solid"
            mt="40px"
            mb="20px"
            w="100%"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

// https://st2.depositphotos.com/3715149/7222/v/450/depositphotos_72226323-stock-illustration-contacts-simple-vector-icon-set.jpg
