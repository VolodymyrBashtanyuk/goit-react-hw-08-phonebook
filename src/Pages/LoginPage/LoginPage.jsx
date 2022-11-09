import { LoginForm } from 'components/LoginForm/LoginForm';
import { ChakraProvider } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  );
};

export default LoginPage;
