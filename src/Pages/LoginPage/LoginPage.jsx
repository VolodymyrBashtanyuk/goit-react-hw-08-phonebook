import { LoginForm } from 'components/LoginForm/LoginForm';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
  return (
    <ChakraProvider>
      <LoginForm />
      <ToastContainer />
    </ChakraProvider>
  );
};

export default LoginPage;
