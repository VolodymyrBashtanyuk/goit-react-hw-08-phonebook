import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'auth/authRegister';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  // FormErrorMessage,
  // FormHelperText,
} from '@chakra-ui/react';

export const RegistrationForm = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm({ values: '' });
    },
  });

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Box
      h="100vh"
      bgImage="url('https://st2.depositphotos.com/3715149/7222/v/450/depositphotos_72226323-stock-illustration-contacts-simple-vector-icon-set.jpg')"
      bgPosition="center"
      bgRepeat="repeat"
      pt="40px"
    >
      <FormControl
        onSubmit={formik.handleSubmit}
        border="1px solid black"
        borderRadius="20px"
        bg="#0b6dff"
        p="20px"
        w="600px"
        mr="auto"
        ml="auto"
        pt="20px"
        variant="outline"
        textAlign="center"
      >
        <FormLabel htmlFor="name">Full name</FormLabel>
        <Input
          bg="white"
          borderColor="#12edd9"
          _hover={{ borderColor: '#3182ce' }}
          placeholder="Full name"
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input
          bg="white"
          _hover={{ borderColor: '#3182ce' }}
          borderColor="#12edd9"
          placeholder="email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup size="md">
          <Input
            bg="white"
            _hover={{ borderColor: '#3182ce' }}
            borderColor="#12edd9"
            placeholder="password"
            id="password"
            name="password"
            type={show ? 'text' : 'password'}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <InputRightElement width="4.5rem">
            <Button
              colorScheme="cyan"
              variant="solid"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
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
    </Box>
  );
};
